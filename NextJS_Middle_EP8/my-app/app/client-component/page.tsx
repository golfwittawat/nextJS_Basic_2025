'use client'

import React, { useState } from 'react'

export default function ClientComponent() {
    const [items] = useState(['1', '2', '3', '4', '5'])
    return (
        <ul>
            {items.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}
