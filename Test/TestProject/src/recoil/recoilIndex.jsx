import React from 'react'
import {RecoilRoot} from 'recoil'
import CharCount from './CharCount';
import GetCharCount from './GetCharCount';

const recoilIndex = () => {
  return (
    <div>
        <RecoilRoot>
            <CharCount/>
            <GetCharCount/>
        </RecoilRoot>
    </div>
  )
}

export default recoilIndex
