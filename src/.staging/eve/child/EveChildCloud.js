import {quat, vec3} from "../../../global";
import {Tw2BaseClass} from "../../../global";

/**
 * EveChildCloud
 * @implements ObjectChild
 *
 * @property {Number} cellScreenSize      -
 * @property {Tr2Effect} effect           -
 * @property {Number} preTesselationLevel -
 * @property {quat} rotation              -
 * @property {vec3} scaling               -
 * @property {Number} sortingModifier     -
 * @property {vec3} translation           -
 */
export default class EveChildCloud extends Tw2BaseClass
{

    cellScreenSize = 0;
    effect = null;
    preTesselationLevel = 0;
    rotation = quat.create();
    scaling = vec3.fromValues(1, 1, 1);
    sortingModifier = 0;
    translation = vec3.create();

}

Tw2BaseClass.define(EveChildCloud, Type =>
{
    return {
        isStaging: true,
        type: "EveChildCloud",
        category: "ObjectChild",
        props: {
            cellScreenSize: Type.NUMBER,
            effect: ["Tr2Effect"],
            preTesselationLevel: Type.NUMBER,
            rotation: Type.TR_ROTATION,
            scaling: Type.TR_SCALING,
            sortingModifier: Type.NUMBER,
            translation: Type.TR_TRANSLATION
        }
    };
});
