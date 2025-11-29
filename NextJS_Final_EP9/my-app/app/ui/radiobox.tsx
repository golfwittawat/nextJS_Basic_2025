'use client'

import { useState } from "react"

export default function Radiobox() {

    const [gender, setGender] = useState('male')



    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value)
    }

    return (
        <>
            <input type='radio' value="male" checked={gender === 'male'} onChange={handleGenderChange} /> Male
            <input type='radio' value="female" checked={gender === 'female'} onChange={handleGenderChange} /> Female

            <div>
                <div>Your Selected Gender</div>
                <div>Gender: {gender}</div>
            </div>
        </>
    )
}
