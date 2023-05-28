import React from 'react'
import image1 from "./image1.jpg";
import {NavLink} from "react-router-dom"

const Home = () => {
  return (
    <>
        <div className="container">
            <div className="box" style={{display:"flex",flexDirection:"column",border:"2px solid black"}}>
              <h1>Question NO 1</h1>
                <img style={{width:"20%"}} src={image1} alt="" />
                <NavLink style={{fontSize:"2rem"}} to="/answer">Answer the question</NavLink>
            </div>
        </div>
    </>
  )
}

export default Home