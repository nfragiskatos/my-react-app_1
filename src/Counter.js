// {useState} is "named import"
import React, {useState} from 'react';
import './Counter.css';

function Counter({step = 1}) {

    // 0 = initial value
    // useState(0) returns an array with 2 items
    //  [piece-of-state, function-to-change-piece-of-state]
    const [count, setCount] = useState(0)
    return (
        <div className="Counter">
            <h2>{count}</h2>
            <button onClick={() => setCount(count + step)}>+{step}</button>
        </div>
    )
}

export default Counter;