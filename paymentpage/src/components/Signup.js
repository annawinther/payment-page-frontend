import React from 'react';

function Signup () {
    return (
            <div>
                <h1>Signup Here</h1>
                <div>First Name <input type="text" /></div>
                <div>Last Name <input type="text" /></div>
                <div>Email <input type="text" /></div>
                <div>Password <input type="password"/></div>
                <div>Repeat Password <input type="password" /></div>

                <button >Log In</button>
            </div>
    )
}

export default Signup;