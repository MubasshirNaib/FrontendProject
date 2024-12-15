import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AddBlog from '../Pages/AddBlog'
import About from '../Pages/About'
import Navbar from '../components/Navbar'
import { Button } from '@mui/material'
import Protected from './Protected'

const Index = () => {
    const[isLoggedIn,setIsLoggesIn] = useState(false);
  return (
    <BrowserRouter>
        <Navbar/>
        {isLoggedIn? <Button onClick={()=>{setIsLoggesIn(!isLoggedIn)}}> Log Out </Button>: <Button onClick={()=>{setIsLoggesIn(!isLoggedIn)}}> Log In</Button>}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add-blog" element={
                <Protected isLoggedIn={isLoggedIn}> 
                    <AddBlog/>
                </Protected>
            }/>
            <Route path="/about" element={<About/>}/>
            <Route path="/*" element={<Error/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default Index
