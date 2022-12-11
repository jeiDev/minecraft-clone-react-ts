import { useBox } from "@react-three/cannon"
import textures from "../../images/textures"
import { useStore } from "../../hooks/useStore"
import { CubeStoreI } from "../../hooks/useStore/useStore.interface"
import { useCallback } from "react"
import { ThreeEvent } from "@react-three/fiber"

export function Box({position, texture}: CubeStoreI){
    const selectTexture = textures[texture]

    const [addCube, removeCube] = useStore(state => [state.addCube, state.removeCube])

    const [ref] = useBox<any>(() => ({
        type: "Static",
        position
    })) 

    const handleOptionAddCube = useCallback((clickedFace: number, x: number, y: number, z: number) => {
        if(clickedFace == 0){
            addCube(x + 1, y, z)
        }
        else if(clickedFace == 1){
            addCube(x - 1, y, z)
        }
        else if(clickedFace == 2){
            addCube(x, y + 1, z)
        }
        else if(clickedFace == 3){
            addCube(x, y - 1, z)
        }
        else if(clickedFace == 4){
            addCube(x, y, z + 1)
        }
        else if(clickedFace == 5){
            addCube(x, y, z - 1)
        }
    }, [])

    const handleAddCube = useCallback((e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        let clickedFace = Math.floor(parseFloat(`${e.faceIndex}`) / 2)
        let {x, y, z} = ref.current.position

        if(e.altKey){
            return removeCube(x, y, z)
        }

        handleOptionAddCube(clickedFace, x, y, z)
    }, [])
    
    return (
        <mesh 
            onClick={(e) => handleAddCube(e)}
            ref={ref}
        >
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial map={selectTexture} attach="material"/>
        </mesh>
    )
}