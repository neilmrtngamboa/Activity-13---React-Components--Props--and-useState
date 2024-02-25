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
        
        {count < 5 ? (<h1><span className="badge bg-dark rounded-pill ms-5 text-danger">{count}</span></h1>):(<h1><span className="badge bg-dark rounded-pill ms-5 text-primary">{count}</span></h1>)
        }
        <div className='d-grid gap-2'>
            <button className='btn btn-outline-dark' onClick={Increment}>➕Add 1</button>
            <button className='btn btn-outline-dark' onClick={Decrement}>➖Subtract 1</button>
        </div>

       
        </>
    )
}

export default Counter