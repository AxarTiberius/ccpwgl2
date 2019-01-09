import {Tw2BaseClass} from "../../class";

/**
 * EveChildModifierCameraOrientedRotationConstrained
 * @implements ChildModifier
 *
 */
export default class EveChildModifierCameraOrientedRotationConstrained extends Tw2BaseClass
{


}

Tw2BaseClass.define(EveChildModifierCameraOrientedRotationConstrained, Type =>
{
    return {
        isStaging: true,
        type: "EveChildModifierCameraOrientedRotationConstrained",
        category: "ChildModifier",
        props: {}
    };
});

