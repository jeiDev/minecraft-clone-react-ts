import { useCallback, useEffect, useState } from "react"

interface useKeyboardResponseI{
    moveForward: boolean
    moveBackward: boolean
    moveLeft: boolean
    moveRight: boolean
    jump: boolean
    texture1: boolean
    texture2: boolean
    texture3: boolean
    texture4: boolean
    texture5: boolean
}

function actionByKey(key: string): string | undefined {
    return {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: "jump",
        Digit1: "dirt",
        Digit2: "grass",
        Digit3: "glass",
        Digit4: "wood",
        Digit5: "log"
    }[key]
}

export function useKeyboard(): useKeyboardResponseI {
    const [actions, setActions] = useState<useKeyboardResponseI>({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false,
        texture4: false,
        texture5: false
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