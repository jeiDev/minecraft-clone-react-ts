import create from "zustand"
import { ObjectDynamicI } from "./hook.interface"
import { nanoid } from "nanoid"

export const useStore = create(set => ({
    texture: "dirt",
    cubes: [{
        key: nanoid(),
        position: [2, .5, 10],
        texture: "dirt"
    },
    {
        key: nanoid(),
        position: [1, .5, 10],
        texture: "wood"
    }],
    addCube: (x: number, y: number, z: number) => {
        set((prev: ObjectDynamicI) => ({    
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
    removeCube: () => {},
    setTexture: () => {},
    saveWorld: () => {},
    resetWorld: () => {}
}))