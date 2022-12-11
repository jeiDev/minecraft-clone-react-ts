import React from "react"
import { useStore } from "../../hooks/useStore"
import { Box } from "./Box"
import { CubeI } from "./cube.interface"

export function Cubes(){
    const [cubes] = useStore((state: any) => [
        state.cubes
    ])
    

    return (
        <React.Fragment>
            {cubes.map(({ key, position, texture }: CubeI) => (
                <Box 
                    key={key} 
                    position={position} 
                    texture={`${texture}Texture`}
                /> 
            ))}
        </React.Fragment>
    )
}