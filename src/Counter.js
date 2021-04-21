// {useState} is "named import"
import React, {useState} from 'react';

function Counter() {

    // 0 = initial value
    // useState(0) returns an array with 2 items
    //  [piece-of-state, function-to-change-piece-of-state]
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Counter;