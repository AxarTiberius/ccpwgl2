/**
 * EveSOFDataPatternLayer
 *
 * @property {Boolean} isTargetMtl1      -
 * @property {Boolean} isTargetMtl2      -
 * @property {Boolean} isTargetMtl3      -
 * @property {Boolean} isTargetMtl4      -
 * @property {Number} materialSource     -
 * @property {Number} projectionTypeU    -
 * @property {Number} projectionTypeV    -
 * @property {String} textureName        -
 * @property {String} textureResFilePath -
 */
export class EveSOFDataPatternLayer
{

    isTargetMtl1 = true;
    isTargetMtl2 = true;
    isTargetMtl3 = true;
    isTargetMtl4 = true;
    materialSource = 0;
    projectionTypeU = 0;
    projectionTypeV = 0;
    textureName = "";
    textureResFilePath = "";

    /**
     * Black definition
     * @param {*} r
     * @returns {*[]}
     */
    static black(r)
    {
        return [
            ["isTargetMtl1", r.boolean],
            ["isTargetMtl2", r.boolean],
            ["isTargetMtl3", r.boolean],
            ["isTargetMtl4", r.boolean],
            ["materialSource", r.uint],
            ["projectionTypeU", r.uint],
            ["projectionTypeV", r.uint],
            ["textureName", r.string],
            ["textureResFilePath", r.path]
        ];
    }
}