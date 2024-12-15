import React from 'react'
import { CharAtom } from './CharState'
import {charSelector} from './SelectorRecoil'
import { useRecoilState,useRecoilValue } from 'recoil'

const GetCharCount = () => {
  const [message,setMessage] = useRecoilState(CharAtom)
  const value= useRecoilValue(charSelector);
  return (
    <div>
      {message}
      <div>
      {value}
      </div>
    </div>
  )
}

export default GetCharCount
