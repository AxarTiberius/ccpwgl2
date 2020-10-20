import { meta } from "utils";


/**
 * Instanced Mesh instance reader
 */
class EveSOFDataInstancedMeshInstanceReader
{
    constructor(data)
    {
        this.data = data;
    }

    static blackStruct(reader)
    {
        return new EveSOFDataInstancedMeshInstanceReader([
            reader.ReadF32(),
            reader.ReadF32(),
            reader.ReadF32(),
            reader.ReadF32(),
            reader.ReadF32(),
            reader.ReadF32(),
            reader.ReadF32(),
            reader.ReadF32(),
            reader.ReadF32(),
            reader.ReadF32(),
            reader.ReadF32()
        ]);
    }
}


@meta.type("EveSOFDataInstancedMesh")
export class EveSOFDataInstancedMesh
{

    @meta.string
    name = "";

    @meta.path
    geometryResPath = "";

    @meta.list(EveSOFDataInstancedMeshInstanceReader)
    instances = [];

    @meta.uint
    lowestLodVisible = 0;

    @meta.string
    shader = "";

    @meta.list("EveSOFDataTexture")
    textures = [];

}
