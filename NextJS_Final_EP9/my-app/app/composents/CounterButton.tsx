'use client'

import { useContext } from "react"
import { DataContext } from "../share/page";

export default function CounterButton() {
    const { counter, setCounter } = useContext(DataContext)
    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        setCounter(counter - 1)
    }
    return (
        <>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
