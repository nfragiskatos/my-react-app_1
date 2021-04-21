import React from 'react';

function Greeter({name, age}) {
    return (
    <>
        <h1>Hi there, your {name}.</h1>
        <p>You are {age} years old.</p>
    </>
    )
}

export default Greeter;