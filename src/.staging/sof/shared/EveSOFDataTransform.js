import {quat, vec3} from "../../../global";
import {Tw2BaseClass} from "../../class";

/**
 * EveSOFDataTransform
 *
 * @parameter {Number} boneIndex -
 * @parameter {vec3} position    -
 * @parameter {quat} rotation    -
 */
export default class EveSOFDataTransform extends Tw2BaseClass
{

    boneIndex = 0;
    position = vec3.create();
    rotation = quat.create();

}

Tw2BaseClass.define(EveSOFDataTransform, Type =>
{
    return {
        isStaging: true,
        type: "EveSOFDataTransform",
        props: {
            boneIndex: Type.NUMBER,
            position: Type.TR_TRANSLATION,
            rotation: Type.TR_ROTATION
        }
    };
});

