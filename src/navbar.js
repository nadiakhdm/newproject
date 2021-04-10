import React from 'react'
import {Link} from 'react-router-dom';


import './App.css';

function Navbar() {
const navstyle ={
    color:"white",
    listStyle:"none"
}

    return (
        <nav >
            <h3>logo</h3>
            <ul className="nav-links">
                
                <Link  style={navstyle} to='/about'>
                <li>About</li>
                </Link>
               
                <Link style={navstyle}  to='/contact'>
                <li>Contact</li>
                </Link>
                <Link style={navstyle}  to='/register'>
                <li>Register</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;