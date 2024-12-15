import React from 'react'
import {atom,useRecoilState} from 'recoil'
import { TextField } from '@mui/material'
import {CharAtom} from './CharState'

// const CharAtom = atom({
//     key:'charSate',
//     default: "",
// })
const CharCount = () => {
  const[text,setText] = useRecoilState(CharAtom)
  return (
    <div>
       {/* <div>{text}</div> */}
      <TextField id="standard-basic" label="Text" variant="standard" onChange={(e)=>setText(e.target.value)} />
    </div>
  )
}

export default CharCount
