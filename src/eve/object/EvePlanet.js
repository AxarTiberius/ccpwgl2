import { getPathExtension, meta } from "utils";
import { device, tw2 } from "global";
import { vec3, mat4,  quat, box3, sph3 } from "math";
import { Tw2Effect, Tw2RenderTarget, Tw2Resource } from "core";
import { EveTransform } from "./EveTransform";
import { EveObject } from "./EveObject";

// TODO: Add "OnValueChanged" handler

@meta.type("EvePlanet")
export class EvePlanet extends EveObject
{

    @meta.struct("EveTransform")
    highDetail = new EveTransform();

    @meta.struct("Tw2Effect")
    effectHeight = new Tw2Effect();

    @meta.struct("Tw2RenderTarget")
    heightMap = new Tw2RenderTarget();

    @meta.struct("EveTransform")
    zOnlyModel = null;

    @meta.uint
    @meta.isPrivate
    itemID = 0;

    @meta.path
    @meta.isPrivate
    heightMapResPath1 = "";

    @meta.path
    @meta.isPrivate
    heightMapResPath2 = "";

    @meta.list("EveChild")
    @meta.notImplemented
    effectChildren = [];

    @meta.float
    radius = 0;

    @meta.uint
    minScreenSize = 0;

    @meta.uint
    estimatedPixelDiameter = 0;

    @meta.vector3
    scaling = vec3.fromValues(1,1,1);

    @meta.vector3
    translation = vec3.fromValues(1,1,1);

    @meta.quaternion
    rotation  = quat.create();


    _worldTransform = mat4.create();
    _localTransform = mat4.create();

    _pendingLoad = null;
    _atmosphere = null;
    _planet = null;

    /**
     * Sets the object's local transform
     * @param {mat4} m
     */
    SetTransform(m)
    {
        mat4.getRotation(this.rotation, m);
        mat4.getScaling(this.scaling, m);
        mat4.getTranslation(this.translation, m);

        const radius = mat4.maxScaleOnAxis(m);
        if (Math.round(this.radius) !== Math.round(radius))
        {
            this.radius = radius;
            this._boundsDirty = true;
        }
    }

    /**
     * Gets the object's transform
     * @param {mat4} out
     * @returns {mat4} out
     */
    GetTransform(out)
    {
        return mat4.copy(out, this._localTransform);
    }

    /**
     * Gets the object's world transform
     * @param {mat4} out
     * @returns {mat4} out
     */
    GetWorldTransform(out)
    {
        return mat4.copy(out, this._worldTransform);
    }

    /**
     * Rebuilds bounds
     * @param {Boolean} [force]
     */
    RebuildBounds(force)
    {
        super.RebuildBounds(force);

        if (force || this._boundsDirty)
        {
            sph3.fromMat4(this._boundingSphere, this._localTransform);
            box3.fromSph3(this._boundingBox, this._boundingSphere);
            this._boundsDirty = false;
        }
    }

    /**
     * Fetches planet async
     * @param {Object} options
     * @return {Promise<EvePlanet>}
     */
    async Fetch(options = {})
    {
        const { name = "", itemID = 0, resPath = "", atmospherePath = "", heightMap1 = "", heightMap2 = "", radius = 0 } = options;

        this.name = name;
        this.itemID = itemID;
        this.heightMapResPath1 = heightMap1;
        this.heightMapResPath2 = heightMap2;
        this.highDetail.children.splice(0);
        this.radius = radius;

        const d = radius * 2;
        vec3.set(this.highDetail.scaling, d, d, d);

        const [ zOnly, planet, atmosphere ] = await tw2.FetchAll([
            EvePlanet.zOnlyModelPath,
            resPath,
            [ atmospherePath, true ]
        ]);

        this._planet = planet;
        this._atmosphere = atmosphere;
        this.zOnlyModel = zOnly;

        this.highDetail.children[0] = planet;
        if (atmosphere) this.highDetail.children[1] = atmosphere;

        return this.Rebuild();
    }

    /**
     * Planet z only model
     * @type {string}
     */
    static zOnlyModelPath = "res:/dx9/model/worldObject/planet/planetZOnly.red";

    /**
     * Sync alias for Fetch
     * @param {Object} options
     * @param {Function} [onLoaded]
     */
    Create(options, onLoaded = x => x)
    {
        this.Fetch(options).then(onLoaded);
    }

    /**
     * Updates LOD
     * @param {Tw2Frustum}frustum
     */
    UpdateLod(frustum)
    {
        this._lod = !frustum.IsSphereVisible(this.translation, this.radius) ? 0 : 3;
    }

    /**
     * Gets object resources
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array.<Tw2Resource>} [out]
     */
    GetResources(out = [])
    {
        if (this.highDetail) this.highDetail.GetResources(out);
        if (this.effectHeight) this.effectHeight.GetResources(out);
        return out;
    }

    /**
     * Updates view dependent data
     * @param {mat4} parentTransform
     */
    UpdateViewDependentData(parentTransform)
    {
        mat4.fromRotationTranslationScale(this._localTransform, this.rotation, this.translation, this.scaling);
        mat4.multiply(this._worldTransform, parentTransform, this._localTransform);

        this.highDetail.SetTransform(this._localTransform);
        this.highDetail.UpdateViewDependentData(parentTransform);

        if (this.zOnlyModel)
        {
            this.zOnlyModel.translation = this.highDetail.translation;
            this.zOnlyModel.scaling = this.highDetail.scaling;
            this.zOnlyModel.UpdateViewDependentData(parentTransform);
        }
    }

    /**
     * Per frame update
     * @param {number} dt - delta time
     */
    Update(dt)
    {
        if (this.display)
        {
            this.highDetail.Update(dt);
        }
    }

    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */
    GetBatches(mode, accumulator)
    {
        if (this.display && this._lod && this._planet)
        {
            this.highDetail.GetBatches(mode, accumulator);
        }
    }

    /**
     * Gets z buffer only batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */
    GetZOnlyBatches(mode, accumulator)
    {
        if (this.display && this._lod && this.zOnlyModel)
        {
            this.zOnlyModel.GetBatches(mode, accumulator);
        }
    }

    /**
     * Internal helper function that fires when a planet's mesh has loaded
     * @return {Promise<EvePlanet|null>}
     */
    async Rebuild()
    {
        const { effectHeight, heightMap } = this;

        this._boundsDirty = true;

        function getMainEffect(t)
        {
            const a = t.mesh ? t.mesh.transparentAreas[0] || t.mesh.opaqueAreas[0] : null;
            return a ? a.effect : null;
        }

        function copyParameters(target, source)
        {
            const { parameters } = source;
            for (const key in parameters)
            {
                if (parameters.hasOwnProperty(key))
                {
                    target.parameters[key] = parameters[key];
                }
            }
        }

        let originalEffect = getMainEffect(this.highDetail.children[0]),
            resPath = "res:/Graphics/Effect/Managed/Space/Planet/EarthlikePlanet.fx";

        if (originalEffect)
        {
            resPath = originalEffect.effectFilePath;
            copyParameters(effectHeight, originalEffect);
        }

        for (let i = 0; i < this.highDetail.children[0].children.length; ++i)
        {
            let effect = getMainEffect(this.highDetail.children[0].children[i]);
            if (effect) copyParameters(effectHeight, originalEffect);
        }

        effectHeight.SetParameters({
            Random: this.itemID % 100,
            TargetTextureHeight: 1048,
            NormalHeight1: this.heightMapResPath1,
            NormalHeight2: this.heightMapResPath2
        });

        // Replace standard effect with blit height effect
        const ext = "." + getPathExtension(resPath);
        resPath = resPath.replace(ext, `BlitHeight${ext}`);
        effectHeight.SetValue(resPath);

        // If already watching, any updates will be caught
        if (this._pendingLoad)
        {
            return this._pendingLoad;
        }

        // Wait until everything is loaded
        return this._pendingLoad = tw2.Watch(this, res => console.dir(res)).then(() =>
        {
            this.heightMap.Create(2048, 1024, false);
            this.heightMap.Set();
            device.SetStandardStates(device.RM_FULLSCREEN);
            device.gl.clearColor(0.0, 0.0, 0.0, 0.0);
            device.gl.clear(device.gl.COLOR_BUFFER_BIT);
            device.RenderFullScreenQuad(this.effectHeight);
            this.heightMap.Unset();

            if (originalEffect)
            {
                originalEffect.SetTextures({ HeightMap: "" });
                originalEffect.parameters["HeightMap"].AttachTextureRes(heightMap.texture);
            }

            this._pendingLoad = null;
            return this;
        });

    }

}
