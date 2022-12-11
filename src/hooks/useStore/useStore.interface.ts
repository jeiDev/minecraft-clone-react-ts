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
    (x: number, y: number, z: number): void
}

export interface SaveWorldStoreFunctionI{
    (x: number, y: number, z: number): void
}

export interface ResetWorldStoreFunctionI{
    (x: number, y: number, z: number): void
}

export interface StoreI{
    texture: string
    cubes: CubeStoreI[]
    addCube: AddCubeStoreFunctionI
    removeCube: RemoveCubeStoreFunctionI
    setTexture: SetTextureStoreFunctionI
    saveWorld: SaveWorldStoreFunctionI
    resetWorld: ResetWorldStoreFunctionI
}