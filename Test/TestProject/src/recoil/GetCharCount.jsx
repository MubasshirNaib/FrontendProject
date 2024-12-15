import React from 'react'
import { CharAtom } from './CharState'
import { useRecoilState } from 'recoil'

const GetCharCount = () => {
  const [message,setMessage] = useRecoilState(CharAtom)
  return (
    <div>
      {message}
    </div>
  )
}

export default GetCharCount
