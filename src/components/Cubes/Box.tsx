import { useBox } from "@react-three/cannon"
import { CubeI } from "./cube.interface"

import textures from "../../images/textures"

export function Box({position, texture}: CubeI){
    const [ref] = useBox<any>(() => ({
        type: "Static",
        position
    })) 

    const selectTexture = textures[texture]

    console.log({selectTexture, texture})

    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshStandardMaterial map={selectTexture} attach="material"/>
        </mesh>
    )
}