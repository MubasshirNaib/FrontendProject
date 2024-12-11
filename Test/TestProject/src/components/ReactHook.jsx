import { Button ,TextField} from '@mui/material'
import React, { useState } from 'react'

const ReactHook = () => {
const[text,setText]=useState("")
const[count,setCount] = useState(0)
const handleIncrement = () =>{
    setCount(prevCount => prevCount +1)
    // setCount(count => count +1)
}
const handleDecrement = () =>{
    setCount(count=>count -1)
}
const handleText=(e) =>{
    setText(e.target.value)
}
  return (
    <div>
      <div>{count}</div>
      <Button variant="outlined" onClick={handleIncrement}>Increment</Button>
      <Button variant="outlined" onClick={()=>{setCount(count=>count-1)}} disabled={count==0}>Decrement</Button>
      <div>{text}</div>
      <TextField id="standard-basic" label="input" variant="standard" onChange={handleText}/>
    </div>
  )
}

export default ReactHook
