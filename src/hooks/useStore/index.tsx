import create from "zustand"
import { nanoid } from "nanoid"
import { StoreI, TextureType } from "./useStore.interface"

export const useStore = create<StoreI>(set => ({
    texture: "glass",
    cubes: [],
    addCube: (x: number, y: number, z: number) => {
        set((prev) => ({    
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    position: [x, y, z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: (x: number, y: number, z: number) => {
        set((prev) => ({    
            cubes: prev.cubes.filter(cube => {
                let [_x, _y, _z] = cube.position
                return x != _x || y != _y || z != _z
            })
        }))
    },
    setTexture: (texture: TextureType) => {
        set(() => ({ texture }))
    },
    saveWorld: () => {},
    resetWorld: () => {}
}))