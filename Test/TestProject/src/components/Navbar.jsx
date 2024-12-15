import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
   <nav>
    <Link to="/">Home</Link><span>  </span>
    <Link to="/add-blog">Add Blog </Link><span> </span>
    <Link to="/about">About</Link><span> </span>
    {/* <Link to="/about/:Name">Details</Link> */}
   </nav>
  )
}

export default Navbar
