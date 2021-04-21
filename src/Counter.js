// {useState} is "named import"
import React, {useState} from 'react';

function Counter({step = 1}) {

    // 0 = initial value
    // useState(0) returns an array with 2 items
    //  [piece-of-state, function-to-change-piece-of-state]
    const [count, setCount] = useState(0)
    const [isHappy, setIsHappy] = useState(true)
    const toggleIsHappy = () => setIsHappy(!isHappy);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + step)}>+{step}</button>
            <h3 onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h3>
        </div>
    )
}

export default Counter;