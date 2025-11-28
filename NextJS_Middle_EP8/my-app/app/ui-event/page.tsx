'use client'

import { useState } from "react"

export default function Page() {
    const [x, setX] = useState(0);

    const handleIncrement = () => {
        setX(x + 1);
    }

    const handleDecrement = () => {
        setX(x - 1);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Count: {x}</h1>
            <button onClick={handleIncrement}>+</button>
            <br />
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}