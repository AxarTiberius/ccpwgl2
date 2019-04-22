import {Tw2BaseClass} from "../../global/index";

/**
 * Tr2CurveVector3Expression
 * TODO: Implement
 *
 * @property {String} name                          -
 * @property {String} expressionX                   -
 * @property {String} expressionY                   -
 * @property {String} expressionZ                   -
 * @property {Array.<Curve|CurveExpression>} inputs -
 */
export class Tr2CurveVector3Expression extends Tw2BaseClass
{

    name = "";
    expressionX = "";
    expressionY = "";
    expressionZ = "";
    inputs = [];

    /**
     * Black definition
     * @param {*} r
     * @returns {*[]}
     */
    static black(r)
    {
        return [
            ["inputs", r.array],
            ["name", r.string],
            ["expressionX", r.string],
            ["expressionY", r.string],
            ["expressionZ", r.string]
        ];
    }

    /**
     * Identifies that the class is in staging
     * @property {null|Number}
     */
    static __isStaging = 4;

}