import style from "../../styles/Control.module.css"
import { TextureControl } from "./Texture"

export function Control(){

    return (
        <div className={style.parent}>
            <TextureControl />
        </div>
    )
}