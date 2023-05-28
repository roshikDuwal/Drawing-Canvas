import React from 'react'
import image1 from "./1.png";
import {NavLink} from "react-router-dom"

const Home = () => {
  return (
    <>
        <div className="container">
            <div className="box">
                <img src={image1} alt="" />
                <NavLink to="/answer">Answer the question</NavLink>
            </div>
        </div>
    </>
  )
}

export default Home