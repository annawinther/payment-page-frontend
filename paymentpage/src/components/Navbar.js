import React from 'react'; 
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <div>
            <nav>
                <Link to="#">Home</Link>
                <Link to="#">Dash</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </nav>
        </div>
    )
}

export default Navbar;