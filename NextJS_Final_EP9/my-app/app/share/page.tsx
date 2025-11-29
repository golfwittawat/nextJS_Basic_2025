'use client'

import { createContext, useState } from "react"
import CounterDisplay from "../composents/CounterDisplay"
import CounterButton from "../composents/CounterButton"

export const DataContext = createContext<any>(undefined);




export default function Page() {
    const [counter, setCounter] = useState(0)
    return (
        <DataContext.Provider value={{ counter, setCounter }}>
            <CounterDisplay />
            <CounterButton />
        </DataContext.Provider>
    )
}