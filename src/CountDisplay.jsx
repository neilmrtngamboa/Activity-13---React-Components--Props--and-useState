import Counter from "./Counter";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function CountDisplay ({count,setCount}) {


    return(
        <div>
             {count > 5 ? (<h1><span className="badge bg-primary rounded-pill ms-5 text-white">{count}</span></h1>) : (<h1><span className="badge bg-dark rounded-pill ms-5 text-danger">{count}</span></h1>)}
        
        </div>
    )
}

export default CountDisplay