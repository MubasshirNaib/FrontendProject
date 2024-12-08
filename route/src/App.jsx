import { Button } from "@mui/material";
import BrowserRoute from "./router/BrowserRoute";
import CharacterCounter from "./components/CharacterCounter";
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <>
      {/* <Button variant="contained">Home</Button>
      <Button variant="outlined">About</Button>
      <Button variant="contained">Contact</Button> */}
      {/* <BrowserRoute /> */}
      <RecoilRoot>
      <CharacterCounter/>
     </RecoilRoot>
    </>
  );
}

export default App;
