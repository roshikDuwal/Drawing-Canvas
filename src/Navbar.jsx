import React from 'react'
import "./navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
     
        </ul>
    </nav>
    </>
  )
}

export default Navbar