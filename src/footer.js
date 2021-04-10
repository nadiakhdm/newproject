import React from 'react'
import {Link} from 'react-router-dom';
import './App.css';


function Footer() {
    const navstyle ={
        color:"white",
        listStyle:"none",
      
    }
    const mystyle={
padding:" 200px"
    }
    
        return (
            <footer >
        <p style={mystyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.

</p>
                <ul className="nav-links" style={mystyle}>
                    
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
            </footer>
        );
    }
    
    export default Footer;