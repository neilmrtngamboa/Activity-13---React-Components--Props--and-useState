import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import CountDisplay from './CountDisplay';



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
        <CountDisplay count = {count} setCount={setCount}
        
        />
        <div className='d-grid gap-2'>
            <button className='btn btn-outline-dark' onClick={Increment}>➕Add 1</button>
            <button className='btn btn-outline-dark' onClick={Decrement}>➖Subtract 1</button>
        </div>

       
        </>
    )
}

export default Counter