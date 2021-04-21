import React from 'react';

// You should not alter value of props in a component.
// Props should be treated as immutable
function Greeter({name, excitement = 1, age}) {

    const greet = () => {
        alert(`HELLO THERE, ${name}`)
    }

    return (
    <>
        <h1>Hi there, your {name}{"!".repeat(excitement)}</h1>
        <p>You are {age} years old.</p>
        <button onClick={greet}>Click Me</button>
    </>
    )
}

export default Greeter;