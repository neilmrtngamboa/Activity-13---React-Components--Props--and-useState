import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';



function Counter() {

    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    return (
        <>
        <h1>{count}</h1>
        <div className='d-grid gap-2'>
            <button className='btn btn-outline-dark' onClick={Increment}>➕Add 1</button>
            <button className='btn btn-outline-dark' onClick={Decrement}>➖Subtract 1</button>
        </div>
        </>
    )
}

export default Counter