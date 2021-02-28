import React from 'react'
import { Link } from "gatsby"

const Menu = () => {
    return (
        <nav style={{
            background: '#f4f4f4',
            padding: '10px'
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Blogs</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;