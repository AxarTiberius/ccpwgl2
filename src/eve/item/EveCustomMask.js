import { meta, vec3, quat, vec4, mat4, tw2 } from "global";
import { Tw2TextureParameter, Tw2TransformParameter, Tw2Vector4Parameter } from "core/parameter";


@meta.type("EveCustomMask", true)
@meta.stage(1)
export class EveCustomMask extends Tw2TransformParameter
{

    @meta.boolean
    display = true;

    @meta.boolean
    isMirrored = false;

    @meta.black.byte
    materialIndex = 0;

    @meta.black.vector3
    position = vec3.create();

    @meta.black.quaternion
    rotation = quat.create();

    @meta.black.vector3
    scaling = vec3.fromValues(1, 1, 1);

    @meta.black.vector4
    targetMaterials = vec4.create();

    @meta.object
    @meta.todo("Move to direct class properties")
    parameters = {
        PatternMaskMap: new Tw2TextureParameter("PatternMaskMap"),
        DiffuseColor: new Tw2Vector4Parameter("DiffuseColor"),
        FresnelColor: new Tw2Vector4Parameter("FresnelColor"),
        Gloss: new Tw2Vector4Parameter("Gloss")
    };


    _worldInverseTranspose = mat4.create();


    /**
     * Sets a sof material by name
     * @param {String} name
     * @returns {Promise<void>}
     */
    async SetMaterial(name)
    {
        const material = await tw2.eveSof.FetchMaterial(name);
        const { DiffuseColor, FresnelColor, Gloss } = material.parameters;
        this.parameters.DiffuseColor.SetValue(DiffuseColor);
        this.parameters.FresnelColor.SetValue(FresnelColor);
        this.parameters.Gloss.SetValue(Gloss);
    }

    /**
     * Updates the parent's per object data
     * @param {mat4} parentTransform
     * @param {Tw2PerObjectData} perObjectData
     * @param {Number} index
     * @param {Boolean} visible
     */
    UpdatePerObjectData(parentTransform, perObjectData, index, visible)
    {
        this.SetParentTransform(parentTransform);
        const targets = this.display && visible ? this.targetMaterials : vec4.ZERO;
        perObjectData.ps.Set("CustomMaskTarget" + index, targets);
        perObjectData.ps.SetIndex("CustomMaskMaterialID" + index, 0, this.materialIndex);
        perObjectData.vs.SetIndex("CustomMaskData" + index, 1, this.isMirrored ? 1 : 0);
        perObjectData.vs.Set("CustomMaskMatrix" + index, this._worldInverseTranspose);
    }

}
