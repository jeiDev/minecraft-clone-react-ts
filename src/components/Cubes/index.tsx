import React from "react"
import { useStore } from "../../hooks/useStore"
import { Box } from "./Box"

export function Cubes(){
    const [cubes] = useStore((state) => [
        state.cubes
    ])
    

    return (
        <React.Fragment>
            {cubes.map(({ key, position, texture }) => (
                <Box 
                    key={key} 
                    position={position} 
                    texture={`${texture}Texture`}
                /> 
            ))}
        </React.Fragment>
    )
}