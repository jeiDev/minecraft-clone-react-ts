export interface CubeStoreI{
    key: string
    position: [x: number, y: number, z: number]
    texture: string
}

export interface AddCubeStoreFunctionI{
    (x: number, y: number, z: number): void
}

export interface RemoveCubeStoreFunctionI{
    (x: number, y: number, z: number): void
}

export interface SetTextureStoreFunctionI{
    (texture: TextureType): void
}

export interface SaveWorldStoreFunctionI{
    (x: number, y: number, z: number): void
}

export interface ResetWorldStoreFunctionI{
    (x: number, y: number, z: number): void
}

export const TextureEnum = {
    DIRT: "dirt",
    GLASS: "glass",
    GRASS: "grass",
    LOG: "log",
    WOOD: "wood",
    GROUND: "ground"
} as const

export type TextureType = typeof TextureEnum[keyof typeof TextureEnum]

export interface StoreI{
    texture: TextureType
    cubes: CubeStoreI[]
    addCube: AddCubeStoreFunctionI
    removeCube: RemoveCubeStoreFunctionI
    setTexture: SetTextureStoreFunctionI
    saveWorld: SaveWorldStoreFunctionI
    resetWorld: ResetWorldStoreFunctionI
}