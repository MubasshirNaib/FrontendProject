import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
   <nav>
    <Link to="/">Home</Link><span>  </span>
    <Link to="/contract">Contract</Link><span> </span>
    <Link to="/about">About</Link>
   </nav>
  )
}

export default Navbar
