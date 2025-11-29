'use client'

import { useState } from "react"

export default function DropdownList() {
    const [foodList, setFoodList] = useState([
        {
            name: 'pizza',
            price: 299
        },
        {
            name: 'burger',
            price: 199
        },
        {
            name: 'pasta',
            price: 249
        },
        {
            name: 'ice cream',
            price: 149
        },
        {
            name: 'cake',
            price: 199
        },
        {
            name: 'tea',
            price: 99
        },
        {
            name: 'coffee',
            price: 199
        }


    ])
    const [food, serFood] = useState('pizza')

    return (
        <>
            <select onChange={(e) => serFood(e.target.value)}>
                {foodList.map((item, index) => (
                    <option key={index} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select>
            <div>
                <div>Selected Food: {food}</div>
                <div>Price: {foodList.find((item) => item.name === food)?.price}</div>
            </div>
        </>
    )
}