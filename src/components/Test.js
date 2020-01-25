import React from 'react';

function Test (props){
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.description}</h3>
            <h3>{props.currency}</h3>
            <h3>{props.price}</h3>
        </div>
    )
}

export default Test;


