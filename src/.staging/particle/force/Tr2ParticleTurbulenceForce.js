import {vec3, vec4} from "../../../global";
import {Tw2BaseClass} from "../../../global";

/**
 * Tr2ParticleTurbulenceForce
 * @implements ParticleForce
 *
 * @property {vec3} amplitude    -
 * @property {vec4} frequency    -
 * @property {Number} noiseLevel -
 * @property {Number} noiseRatio -
 */
export default class Tr2ParticleTurbulenceForce extends Tw2BaseClass
{

    amplitude = vec3.create();
    frequency = vec4.create();
    noiseLevel = 0;
    noiseRatio = 0;

}

Tw2BaseClass.define(Tr2ParticleTurbulenceForce, Type =>
{
    return {
        isStaging: true,
        type: "Tr2ParticleTurbulenceForce",
        category: "ParticleForce",
        props: {
            amplitude: Type.VECTOR3,
            frequency: Type.VECTOR4,
            noiseLevel: Type.NUMBER,
            noiseRatio: Type.NUMBER
        }
    };
});
