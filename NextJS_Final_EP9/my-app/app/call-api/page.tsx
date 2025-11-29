'use client'

import axios from "axios"

export default function Page() {
    const doPost = async () => {
        try {
            const payload = {
                id: 123,
                name: 'golf'
            };
            await axios.post('http://localhost:3000/api/products', payload);
        } catch (error) {
            console.error(error)
        }
    };

    const doGet = async () => {
        try {
            await axios.get('http://localhost:3000/api/products');
        } catch (error) {
            console.error(error)
        }
    };

    const doPut = async () => {
        try {
            const payload = {
                id: 123,
                name: 'golf'
            };
            await axios.put('http://localhost:3000/api/products/123', payload);
        } catch (error) {
            console.error(error)
        }
    };

    const doDelete = async () => {
        try {
            await axios.delete('http://localhost:3000/api/products/123');
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <>
            <h1>Call API</h1>
            <button onClick={doPost}>Post</button> <br />
            <button onClick={doGet}>Get</button> <br />
            <button onClick={doPut}>Put</button> <br />
            <button onClick={doDelete}>Delete</button> <br />
        </>
    )
}
