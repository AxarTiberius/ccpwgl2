import {Tw2BaseClass} from "../../../global";

/**
 * Tr2FloatParameter
 * @implements Parameter
 *
 * @property {Number} value -
 */
export default class Tr2FloatParameter extends Tw2BaseClass
{

    value = 0;

}

Tw2BaseClass.define(Tr2FloatParameter, Type =>
{
    return {
        isStaging: true,
        type: "Tr2FloatParameter",
        category: "Parameter",
        props: {
            value: Type.NUMBER
        }
    };
});
