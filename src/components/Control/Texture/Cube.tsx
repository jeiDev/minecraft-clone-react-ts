import style from "../../../styles/Cube.module.css"

export function Cube({ texture }: any){

    return (
        <div className={`${style.parent} ${style.border}`}>
            <div className={style.box}>
                {texture && (
                    <img src={`/images/texture/${texture}.jpg`} alt={texture} className={style.image} />
                )}
            </div>
        </div>
    )
}