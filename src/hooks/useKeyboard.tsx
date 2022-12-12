import { useCallback, useEffect, useState } from "react"

interface useKeyboardResponseI{
    moveForward: boolean
    moveBackward: boolean
    moveLeft: boolean
    moveRight: boolean
    jump: boolean
    dirtTexture: boolean
    grassTexture: boolean
    glassTexture: boolean
    woodTexture: boolean
    logTexture: boolean
}

function actionByKey(key: string): string | undefined {
    return {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: "jump",
        Digit1: "dirtTexture",
        Digit2: "grassTexture",
        Digit3: "glassTexture",
        Digit4: "woodTexture",
        Digit5: "logTexture"
    }[key]
}

export function useKeyboard(): useKeyboardResponseI {
    const [actions, setActions] = useState<useKeyboardResponseI>({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirtTexture: false,
        grassTexture: false,
        glassTexture: false,
        woodTexture: false,
        logTexture: false
    })

    const handleChangeAction = useCallback((code: string, status: boolean = false) => {
        const action = actionByKey(code)
        if (action) {
            setActions((prev) => ({
                ...prev,
                [action]: status
            }))
        }
    }, [])

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        handleChangeAction(e.code, true)
    }, [])

    const handleKeyUp = useCallback((e: KeyboardEvent) => {
        handleChangeAction(e.code)
    }, [])

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)

        return () => {
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("keyup", handleKeyUp)
        }
    }, [])

    return actions
}