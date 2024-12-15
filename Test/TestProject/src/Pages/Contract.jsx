import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contract = () => {
  const navigate = useNavigate();
  return (
    <div>
      Contract
      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ratione neque mollitia doloribus eligendi ut voluptate iusto reprehenderit atque deleniti! Libero, nostrum voluptate? Sit aliquam quia libero et rerum temporibus?</p>
      <Button onClick={()=> {navigate("/about");}}> Go To Home</Button>
    </div>
  )
}

export default Contract
