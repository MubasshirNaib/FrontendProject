import { Button } from '@mui/material'
import React, { useState } from 'react'

const ReactHook = () => {
const[count,setCount] = useState(0)
const handleIncrement = () =>{
    setCount(prevCount => prevCount +1)
    setCount(count => count +1)
}
const handleDecrement = () =>{
    setCount(count -1)
}
  return (
    <div>
      <div>{count}</div>
      <Button variant="outlined" onClick={handleIncrement}>Increment</Button>
      <Button variant="outlined" onClick={handleDecrement} disabled={count==0}>Decrement</Button>
    </div>
  )
}

export default ReactHook
