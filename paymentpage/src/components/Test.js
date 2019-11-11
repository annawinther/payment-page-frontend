import React from 'react';

function Test (props){
    return (
        <div>
            <h1>{props.fname} {props.lname}</h1>
            <h3>{props.email}</h3>
        </div>
    )
}

export default Test;


