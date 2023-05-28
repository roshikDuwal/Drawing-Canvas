import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "./Home"
import Answer from "./Answer"
import Navbar from './Navbar'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/answer' element={<Answer/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App