'use client'

const { useState } = require("react")

export default function Checkbox() {
    const [item1, setItem1] = useState(false)
    const [item2, setItem2] = useState(false)
    const [item3, setItem3] = useState(false)

    const handleItem1Checked = (e: any) => {
        setItem1(e.target.checked)
    }

    const handleItem2Checked = (e: any) => {
        setItem2(e.target.checked)
    }

    const handleItem3Checked = (e: any) => {
        setItem3(e.target.checked)
    }

    return (
        <>
            <input type="checkbox" checked={item1} onChange={handleItem1Checked} />{" "}
            <label>Item 1</label>
            <input type="checkbox" checked={item2} onChange={handleItem2Checked} />{" "}
            <label>Item 2</label>
            <input type="checkbox" checked={item3} onChange={handleItem3Checked} />{" "}
            <label>Item 3</label>


            {/* <div>
                <p>Item 1: {item1 ? 'Checked' : 'Not Checked'}</p>
                <p>Item 2: {item2 ? 'Checked' : 'Not Checked'}</p>
                <p>Item 3: {item3 ? 'Checked' : 'Not Checked'}</p>
            </div> */}

            <div>
                <div> Your Selected Item: </div>
                <div> Item 1: {item1.toString()}</div>
                <div> Item 2: {item2.toString()}</div>
                <div> Item 3: {item3.toString()}</div>
            </div>
        </>
    )
}