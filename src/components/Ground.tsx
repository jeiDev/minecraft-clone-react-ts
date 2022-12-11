import { usePlane } from "@react-three/cannon"
import { NearestFilter, RepeatWrapping } from "three"
import texture from "../images/textures"

const { groundTexture } = texture

export function Ground(){
    const [ref] = usePlane<any>(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0]
    }))

    groundTexture.magFilter = NearestFilter
    groundTexture.wrapS = RepeatWrapping
    groundTexture.wrapT = RepeatWrapping
    groundTexture.repeat.set(100, 100)
    
    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach="geometry" args={[100, 100]}/>
            <meshStandardMaterial attach="material" map={groundTexture}/>
        </mesh>
    )
}