import React from 'react';

function Greeter(props) {
    return (
    <>
        <h1>Hi there, your {props.name}.</h1>
        <p>You are {props.age} years old.</p>
    </>
    )
}

export default Greeter;