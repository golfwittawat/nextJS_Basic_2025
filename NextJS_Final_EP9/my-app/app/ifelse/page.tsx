'use client'

import { useState } from "react"

export default function Page() {
    const [name, setName] = useState('')
    return (
        <>
            <h1>กรอกชื่อ</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div>
                {name === 'admin' ? (
                    <h1>Welcome, Admin</h1>
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}