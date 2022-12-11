import { usePlane } from "@react-three/cannon"
import { ThreeEvent } from "@react-three/fiber"
import { useCallback } from "react"
import { useStore } from "../hooks/useStore"
import texture from "../images/textures"

const { groundTexture } = texture

export function Ground(){
    const [ref] = usePlane<any>(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -.5, 0]
    }))

    const [addCube] = useStore(state => [state.addCube, state.removeCube])

    groundTexture.repeat.set(100, 100)

    const handleAddCube = useCallback((e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation()
        const [x, y, z] = Object.values(e.point).map(p => (Math.ceil(p)))
        addCube(x, y, z)
    }, [])
    
    return (
        <mesh 
            onClick={(e) => handleAddCube(e)}
            ref={ref}
        >
            <planeBufferGeometry attach="geometry" args={[100, 100]}/>
            <meshStandardMaterial attach="material" map={groundTexture}/>
        </mesh>
    )
}