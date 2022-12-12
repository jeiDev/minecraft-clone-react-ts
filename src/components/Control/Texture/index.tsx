import React, { useEffect, useState } from "react"
import { Cube } from "./Cube"
import { useStore } from "../../../hooks/useStore"

const SPACES = 9
const SPACES_ARRAY = "-".repeat(SPACES).split("")

export function TextureControl() {
    const [texture] = useStore((state) => [state.texture])
    const spaces = [
        "dirt",
        "glass",
        "grass",
        "log",
        "wood",
        null,
        null,
    ].map(t => (t != texture ? t : null)).sort((a, b) => {
        if (a === null) {
            return 1;
        }

        if (b === null) {
            return -1;
        }

        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    })
    
    return (
        <div style={{ marginBottom: 20, display: "flex" }}>
            <div>
                <Cube texture={texture} />
            </div>
            <div style={{ display: "flex", marginLeft: 25 }}>
                {SPACES_ARRAY.map((_, i) => (
                    <Cube key={i} texture={spaces[i]} />
                ))}
            </div>
        </div>
    )
}