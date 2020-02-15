import { meta, vec3, mat4, util } from "global";
import { Tw2AnimationController, Tw2PerObjectData } from "core";
import { EveObject } from "./EveObject";


@meta.type("EveSpaceObject")
export class EveSpaceObject extends EveObject
{

    @meta.objectOf("Tw2AnimationController")
    animation = new Tw2AnimationController();

    @meta.vector3
    @meta.isPrivate
    boundingSphereCenter = vec3.create();

    @meta.float
    @meta.isPrivate
    boundingSphereRadius = 0;

    @meta.listOf("EveObject")
    children = [];

    @meta.listOf("Tw2CurveSet")
    curveSets = [];

    @meta.listOf("EveCustomMask")
    customMasks = [];

    @meta.listOf("EveSpaceObjectDecal")
    decals = [];

    @meta.listOf("EveChild")
    effectChildren = [];

    @meta.float
    killCount = 0;

    @meta.listOf("EveCurveLineSet")
    lineSets = [];

    @meta.listOf("EveLocator")
    locators = [];

    @meta.objectOf("Tw2Mesh")
    mesh = null;

    @meta.listOf("EveMeshOverlayEffect")
    overlayEffects = [];

    @meta.listOf("EvePlaneSet")
    planeSets = [];

    @meta.vector3
    @meta.isPrivate
    shapeEllipsoidRadius = vec3.create();

    @meta.vector3
    @meta.isPrivate
    shapeEllipsoidCenter = vec3.create();

    @meta.listOf("EveSpotlightSet")
    spotlightSets = [];

    @meta.listOf("EveSpriteSet")
    spriteSets = [];

    @meta.matrix4
    transform = mat4.create();

    @meta.listOf("EveTurretSet")
    turretSets = [];

    @meta.plain
    visible = {
        mesh: true,
        children: true,
        effectChildren: true,
        planeSets: true,
        spotlightSets: true,
        decals: true,
        spriteSets: true,
        overlayEffects: true,
        lineSets: true,
        killmarks: true,
        customMasks: true,
        turretSets: true,
        boosters: true
    };

    _lod = 3;
    _worldSpriteScale = 1;
    _worldTransform = mat4.create();
    _perObjectData = Tw2PerObjectData.from(EveSpaceObject.perObjectData);


    /**
     * Initializes the EveSpaceObject
     */
    Initialize()
    {
        if (this.mesh)
        {
            this.animation.SetGeometryResource(this.mesh.geometryResource);

            for (let i = 0; i < this.decals.length; ++i)
            {
                this.decals[i].SetParentGeometry(this.mesh.geometryResource);
            }
        }
    }

    /**
     * Sets the object's local transform
     * @param {mat4} m
     * @param {mat4} offset
     */
    SetTransform(m, offset)
    {
        if (offset)
        {
            mat4.multiply(this.transform, m, offset);
        }
        else
        {
            mat4.copy(this.transform, m);
        }
    }

    /**
     * Gets object resources
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array.<Tw2Resource>} [out]
     */
    GetResources(out = [])
    {
        if (this.mesh) this.mesh.GetResources(out);
        if (this.animation) this.animation.GetResources(out);
        util.perArrayChild(this.spriteSets, "GetResources", out);
        util.perArrayChild(this.turretSets, "GetResources", out);
        util.perArrayChild(this.decals, "GetResources", out);
        util.perArrayChild(this.spotlightSets, "GetResources", out);
        util.perArrayChild(this.planeSets, "GetResources", out);
        util.perArrayChild(this.lineSets, "GetResources", out);
        util.perArrayChild(this.overlayEffects, "GetResources", out);
        util.perArrayChild(this.effectChildren, "GetResources", out);
        util.perArrayChild(this.children, "GetResources", out);
        return out;
    }

    /**
     * Resets the lod
     */
    ResetLod()
    {
        this._lod = 3;
    }

    /**
     * Updates the lod
     * @param {Tw2Frustum} frustum
     */
    UpdateLod(frustum)
    {
        const center = vec3.transformMat4(EveObject.global.vec3_0, this.boundingSphereCenter, this.transform);

        if (frustum.IsSphereVisible(center, this.boundingSphereRadius))
        {
            if (frustum.GetPixelSizeAcross(center, this.boundingSphereRadius) < 100)
            {
                this._lod = 1;
            }
            else
            {
                this._lod = 2;
            }
        }
        else
        {
            this._lod = 0;
        }
    }

    /**
     * Finds all turret prefixes
     * @param {Array<String>} [out=[]] - Receiving array
     * @returns {Array<String>} out    - Receiving array
     */
    FindTurretPrefixes(out = [])
    {
        function add(match)
        {
            if (!match) return false;
            const name = match[0].substring(0, match[0].length - 1);
            if (!out.includes(name)) out.push(name);
            return true;
        }

        for (let i = 0; i < this.locators.length; i++)
        {
            const name = this.locators[i].name;
            if (!add((/^locator_turret_([0-9]+)[a-z]$/i).exec(name)))
            {
                add((/^locator_xl_([0-9]+)[a-z]$/i).exec(name));
            }
        }

        out.sort();
        return out;
    }

    /**
     * Gets locator count for a specific locator group
     * @param {String} prefix
     * @returns {number}
     */
    GetLocatorCount(prefix)
    {
        const locators = this.FindLocatorsByPrefix(prefix);
        return locators.length;
    }

    /**
     * Finds a locator's joint by name
     * @param {String} name
     * @returns {?mat4}
     */
    FindLocatorJointByName(name)
    {
        const locator = this.FindLocatorBoneByName(name);
        return locator ? locator.worldTransform : null;
    }

    /**
     * Finds a locator's transform by it's name
     * @param {String} name
     * @returns {?mat4}
     */
    FindLocatorTransformByName(name)
    {
        const locator = this.FindLocatorByName(name);
        return locator ? locator.transform : null;
    }

    /**
     * Checks if a locator prefix exists
     * @param {String} prefix
     * @returns {Boolean}
     */
    HasLocatorPrefix(prefix)
    {
        for (let i = 0; i < this.locators.length; i++)
        {
            if (this.locators[i].name.indexOf(prefix) === 0)
            {
                return true;
            }
        }
        return false;
    }

    /**
     * Finds a locator's bone by it's name
     * @param {String} name
     * @returns {?Tw2Bone} null if not found
     */
    FindLocatorBoneByName(name)
    {
        return this.animation.FindBoneForMesh(name, 0);
    }

    /**
     * Finds a locator by name
     * @param {String} name
     * @returns {?EveLocator2}
     */
    FindLocatorByName(name)
    {
        for (let i = 0; i < this.locators.length; i++)
        {
            if (this.locators[i].name === name)
            {
                return this.locators[i];
            }
        }
        return null;
    }

    /**
     * Finds locators with a given prefix
     * @param {String} prefix
     * @param {Array} [out=[]}
     * @returns {Array<EveLocator2>}
     */
    FindLocatorsByPrefix(prefix, out = [])
    {
        for (let i = 0; i < this.locators.length; i++)
        {
            if (this.locators[i].name.indexOf(prefix) === 0)
            {
                out.push(this.locators[i]);
            }
        }
        return out;
    }

    /**
     * Rebuilds overlay effects
     * @param {Array<EveMeshOverlayEffect>} [overlays=[]] - The overlays that should be in effect
     */
    RebuildOverlays(overlays=[])
    {
        this.overlayEffects.splice(0);

        for (let i = 0; i < overlays.length; i++)
        {
            this.overlayEffects.push(overlays[i]);
        }
    }

    /**
     * A Per frame function that updates view dependent data
     * @param {undefined|mat4} parentTransform
     * @param {Number} dt
     */
    UpdateViewDependentData(parentTransform, dt)
    {
        if (parentTransform)
        {
            mat4.multiply(this._worldTransform, parentTransform, this.transform);
        }
        else
        {
            mat4.copy(this._worldTransform, this.transform);
        }

        // Scale sprites to object scale
        const worldSpriteScale = mat4.maxScaleOnAxis(this._worldTransform);
        if (this._worldSpriteScale !== worldSpriteScale)
        {
            this._worldSpriteScale = worldSpriteScale;
            for (let i = 0; i < this.spriteSets.length; i++)
            {
                this.spriteSets[i].SetWorldSpriteScale(worldSpriteScale);
            }
        }

        for (let i = 0; i < this.children.length; ++i)
        {
            this.children[i].UpdateViewDependentData(this._worldTransform);
        }

        mat4.transpose(this._perObjectData.vs.Get("WorldMat"), this._worldTransform);
        mat4.transpose(this._perObjectData.vs.Get("WorldMatLast"), this._worldTransform);

        const
            center = this._perObjectData.vs.Get("EllipsoidCenter"),
            radii = this._perObjectData.vs.Get("EllipsoidRadii");

        if (this.shapeEllipsoidRadius[0] > 0)
        {
            center[0] = this.shapeEllipsoidCenter[0];
            center[1] = this.shapeEllipsoidCenter[1];
            center[2] = this.shapeEllipsoidCenter[2];
            radii[0] = this.shapeEllipsoidRadius[0];
            radii[1] = this.shapeEllipsoidRadius[1];
            radii[2] = this.shapeEllipsoidRadius[2];
        }
        else if (this.mesh && this.mesh.IsGood())
        {
            const { maxBounds, minBounds } = this.mesh.geometryResource;
            vec3.subtract(center, maxBounds, minBounds);
            vec3.scale(center, center, 0.5 * 1.732050807);
            vec3.add(radii, maxBounds, minBounds);
            vec3.scale(radii, radii, 0.5);
        }

        for (let i = 0; i < this.customMasks.length; ++i)
        {
            this.customMasks[i].UpdatePerObjectData(this._worldTransform, this._perObjectData, i, this.visible.customMasks);
        }

        if (this.animation.animations.length)
        {
            this._perObjectData.vs.Set("JointMat", this.animation.GetBoneMatrices(0));
        }

        for (let i = 0; i < this.lineSets.length; ++i)
        {
            this.lineSets[i].UpdateViewDependentData(this._worldTransform);
        }
    }

    /**
     * Per frame update
     * @param {Number} dt - delta time
     */
    Update(dt)
    {
        if (this._lod > 0)
        {
            for (let i = 0; i < this.spriteSets.length; ++i)
            {
                this.spriteSets[i].Update(dt);
            }

            for (let i = 0; i < this.planeSets.length; i++)
            {
                this.planeSets[i].Update(dt);
            }

            for (let i = 0; i < this.spotlightSets.length; i++)
            {
                this.spotlightSets[i].Update(dt);
            }

            for (let i = 0; i < this.children.length; ++i)
            {
                this.children[i].Update(dt);
            }

            for (let i = 0; i < this.effectChildren.length; ++i)
            {
                this.effectChildren[i].Update(dt, this._worldTransform, this._lod);
            }

            for (let i = 0; i < this.curveSets.length; ++i)
            {
                this.curveSets[i].Update(dt);
            }

            for (let i = 0; i < this.overlayEffects.length; ++i)
            {
                this.overlayEffects[i].Update(dt);
            }

            for (let i = 0; i < this.lineSets.length; i++)
            {
                this.lineSets[i].Update(dt);
            }

            this.animation.Update(dt);
        }
    }

    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */
    GetBatches(mode, accumulator)
    {
        if (this.display)
        {
            const show = this.visible;

            if (show.mesh && this.mesh && this._lod > 0)
            {
                this.mesh.GetBatches(mode, accumulator, this._perObjectData);
            }

            if (this._lod > 1)
            {
                if (show.spriteSets)
                {
                    for (let i = 0; i < this.spriteSets.length; i++)
                    {
                        this.spriteSets[i].GetBatches(mode, accumulator, this._perObjectData, this._worldTransform);
                    }
                }

                if (show.spotlightSets)
                {
                    for (let i = 0; i < this.spotlightSets.length; i++)
                    {
                        this.spotlightSets[i].GetBatches(mode, accumulator, this._perObjectData);
                    }
                }

                if (show.planeSets)
                {
                    for (let i = 0; i < this.planeSets.length; i++)
                    {
                        this.planeSets[i].GetBatches(mode, accumulator, this._perObjectData);
                    }
                }

                if (show.decals)
                {
                    for (let i = 0; i < this.decals.length; i++)
                    {
                        this.decals[i].GetBatches(mode, accumulator, this._perObjectData, show.killmarks ? this.killCount : 0);
                    }
                }

                if (show.lineSets)
                {
                    for (let i = 0; i < this.lineSets.length; i++)
                    {
                        this.lineSets[i].GetBatches(mode, accumulator);
                    }
                }

                if (show.overlayEffects && this.mesh && this.mesh.IsGood())
                {
                    for (let i = 0; i < this.overlayEffects.length; i++)
                    {
                        this.overlayEffects[i].GetBatches(mode, accumulator, this._perObjectData, this.mesh);
                    }
                }
            }

            if (show.children)
            {
                for (let i = 0; i < this.children.length; i++)
                {
                    this.children[i].GetBatches(mode, accumulator, this._perObjectData);
                }
            }

            if (show.effectChildren)
            {
                for (let i = 0; i < this.effectChildren.length; i++)
                {
                    this.effectChildren[i].GetBatches(mode, accumulator, this._perObjectData);
                }
            }
        }
    }

    /**
     * RenderDebugInfo
     * @param debugHelper
     */
    RenderDebugInfo(debugHelper)
    {
        this.animation.RenderDebugInfo(debugHelper);
    }

    /**
     * Per object data
     * @type {{vs: *[], ps: *[]}}
     */
    static perObjectData = {
        vs: [
            [ "WorldMat", 16 ],
            [ "WorldMatLast", 16 ],
            [ "Shipdata", [ 0, 1, 0, -10 ] ],
            [ "Clipdata1", 4 ],
            [ "EllipsoidRadii", 4 ],
            [ "EllipsoidCenter", 4 ],
            [ "CustomMaskMatrix0", mat4.identity([]) ],
            [ "CustomMaskMatrix1", mat4.identity([]) ],
            [ "CustomMaskData0", [ 1, 0, 0, 0 ] ],
            [ "CustomMaskData1", [ 1, 0, 0, 0 ] ],
            [ "JointMat", 696 ]
        ],
        ps: [
            [ "Shipdata", [ 0, 1, 0, 1 ] ],
            [ "Clipdata1", 4 ],
            [ "Clipdata2", 4 ],
            [ "ShLighting", 4 * 7 ],
            [ "CustomMaskMaterialID0", 4 ],
            [ "CustomMaskMaterialID1", 4 ],
            [ "CustomMaskTarget0", 4 ],
            [ "CustomMaskTarget1", 4 ]
        ]
    };

}

export { EveSpaceObject as EveStation };
