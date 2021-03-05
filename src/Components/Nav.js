import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (    
        <nav>
            <ul className = 'nav-links'>
                <Link className = 'links' to ='/'><li>Home</li></Link>
                <Link className = 'links' to ='/about'><li>About</li></Link>
            </ul>
        </nav>
    )
}

export default Nav
