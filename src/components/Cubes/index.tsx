import React, { useEffect } from "react"
import { useKeyboard } from "../../hooks/useKeyboard"
import { useStore } from "../../hooks/useStore"
import { TextureType } from "../../hooks/useStore/useStore.interface"
import { Box } from "./Box"

export function Cubes(){
    const { 
        dirtTexture, glassTexture,
        grassTexture, logTexture,
        woodTexture 
    } = useKeyboard()
    
    const [cubes] = useStore((state) => [
        state.cubes
    ])
    
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])

    useEffect(() => {
        let _texture: TextureType = texture

        if(dirtTexture){
            _texture = "dirt"
        }else if(glassTexture){
            _texture = "glass"
        }else if(grassTexture){
            _texture = "grass"
        }else if(logTexture){
            _texture = "log"
        }else if(woodTexture){
            _texture = "wood"
        }

        setTexture(_texture)
    }, [dirtTexture, glassTexture, grassTexture, logTexture, woodTexture])

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