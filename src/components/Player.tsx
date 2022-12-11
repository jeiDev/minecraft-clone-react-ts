import { useThree, useFrame } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { useKeyboard } from "../hooks/useKeyboard"

const JUMP = 4
const SPEED = 4

export function Player(){
    const { jump, moveBackward, moveForward, moveLeft, moveRight } = useKeyboard()

    const { camera } = useThree()
    const [ref, api] = useSphere<any>(() => ({
        mass: 1,
        type: "Dynamic",
        position: [0, 1, 0]
    }))

    const position = useRef([0, 0, 0])
    const velocity = useRef([0, 0, 0])

    useEffect(() => {
        api.velocity.subscribe((v) => {
            velocity.current = v
        })
    }, [api.velocity])

    useEffect(() => {
        api.position.subscribe((p) => {
            position.current = p
        })
    }, [api.position])

    useFrame(() => {
        camera.position.copy(new Vector3(position.current[0], position.current[1], position.current[2]))

        let direction = new Vector3()

        let frontVector = new Vector3(
            0,
            0,
            (moveBackward ? 1 : 0) - (moveForward ? 1 : 0)
        )

        let sideVector = new Vector3(
            (moveLeft ? 1 : 0) - (moveRight ? 1 : 0),
            0,
            0
        )

        direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation)

        api.velocity.set(
            direction.x, 
            velocity.current[1], 
            direction.z
        )

        if(jump && Math.abs(velocity.current[1]) < 0.05){
            api.velocity.set(velocity.current[0], JUMP, velocity.current[2])
        }
    })

    return (
        <mesh ref={ref} />
    )
}