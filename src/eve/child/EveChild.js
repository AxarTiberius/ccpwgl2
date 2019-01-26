/* eslint no-unused-vars:0 */
import {vec3, quat, mat4, util} from "../../global";

/**
 * EveChild base class
 * TODO: Implement LOD
 *
 * @property {number|String} _id
 * @property {String} name
 * @property {Boolean} display
 * @property {Boolean} useSRT
 * @property {number} lowestLodVisible
 * @property {Boolean} staticTransform
 * @property {quat} rotation
 * @property {vec3} translation
 * @property {vec3} scaling
 * @property {mat4} localTransform
 * @property {mat4} worldTransform
 * @property {mat4} worldTransformLast
 * @property {Tw2PerObjectData} _perObjectData
 * @class
 */
export class EveChild
{

    _id = util.generateID();
    name = "";
    display = true;
    useSRT = true;
    lowestLodVisible = 2;
    staticTransform = false;
    rotation = quat.create();
    translation = vec3.create();
    scaling = vec3.fromValues(1, 1, 1);
    localTransform = mat4.create();
    worldTransform = mat4.create();
    worldTransformLast = mat4.create();
    _perObjectData = null;
    isEffectChild = true;
    lod = 3;


    /**
     * Gets the child's resources
     * @param {Array} [out=[]]
     * @returns {Array<Tw2Resource>} out
     */
    GetResources(out = [])
    {
        return out;
    }

    /**
     * Per frame update
     * @param {number} dt
     * @param {mat4} parentTransform
     * @param {Number} [parentLod]
     */
    Update(dt, parentTransform, parentLod)
    {
        if (parentLod !== undefined)
        {
            this.lod = parentLod;
        }

        if (this.useSRT)
        {
            quat.normalize(this.rotation, this.rotation);
            mat4.fromRotationTranslationScale(this.localTransform, this.rotation, this.translation, this.scaling);
        }

        mat4.copy(this.worldTransformLast, this.worldTransform);
        mat4.multiply(this.worldTransform, parentTransform, this.localTransform);
    }

    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     */
    GetBatches(mode, accumulator, perObjectData)
    {

    }

    /**
     * Class globals and scratch variables
     * @type {Object}
     */
    static global = {
        mat4_0: mat4.create(),
        vec3_0: vec3.create()
    };

    /**
     * Per object data
     * @type {{ffe: *[]}}
     */
    static perObjectData = {
        ffe: [
            ["world", 16],
            ["worldInverseTranspose", 16]
        ]
    };

}

