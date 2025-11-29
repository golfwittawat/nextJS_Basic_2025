'use client'

import { useRef, useEffect, useState } from "react"

export default function Page() {
    const refUsername = useRef<HTMLInputElement>(null)
    const [username, setUsername] = useState('')

    useEffect(() => {
        refUsername.current?.focus()
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(username)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={refUsername} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <div>
                <div>Username: {username}</div>
                <div>Ref Username: {refUsername.current?.value}</div>
            </div>
        </>
    )
}