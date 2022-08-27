import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
function Counter({ userName }) {

    const [number, setnumber] = useState(5)

    // const inc = () => {
    //     setnumber(number + 1)
    // }

    return (
        <div>
            <h1>{userName}</h1>
            <h2>{number}</h2>
            <Button className="m-2" variant="primary" onClick={() => setnumber(number + 1)}>+</Button>
            <Button variant="danger" onClick={() => setnumber(number - 1)}>-</Button>
            <Button className="m-2" variant="dark" onClick={() => setnumber(0)}>Reset</Button>
        </div>
    )
}

export default Counter