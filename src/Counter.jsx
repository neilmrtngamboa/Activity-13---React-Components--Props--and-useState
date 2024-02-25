import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';



function Counter() {

    const [count, setCount] = useState(0)

    const Increment = () => {
    }

    const Decrement = () => {
    }

    return (
        <>
        <h1>{counter}</h1>
        <div className='d-grid gap-2'>
            <button className='btn btn-outline-dark'>➕Add 1</button>
            <button className='btn btn-outline-dark'>➖Subtract 1</button>
        </div>
        </>
    )
}

export default Counter