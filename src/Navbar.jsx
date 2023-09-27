import React from 'react'
import "./navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav className='p-2 mb-2 w-full'>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
     
        </ul>
    </nav>
    </>
  )
}

export default Navbar