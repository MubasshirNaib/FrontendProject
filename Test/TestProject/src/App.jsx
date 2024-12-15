import Component1 from "./components/Component1"
import Data from "./dataset/Data.json"
import Component2 from "./components/Component2"
import State from "./components/State"
import ReactHook from "./components/ReactHook"
import CrudExample from "./components/CrudExample"
import CrudPractice from "./components/CrudPractice"
import { UserContext } from "./components/UserContext"
import { useState } from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home"
import Contract from "./Pages/Contract"
import About from "./Pages/About"
import Error from "./Pages/Error"
import Navbar from "./components/Navbar"
import Details from "./Pages/Details"
import User from "./Pages/User"
import Index from "./routes/Index"

function App() {

const details=[
  {
    Name:"Mubasshir",
    Id:1904089,
    phone:[
      {
        home:123,
        office: 456,
      },
      {
        home:789,
        office: 111,
      },
    ]

  },
  {
    Name:"Sakib",
    Id:1904086,
    phone:[
      {
        home:1234,
        office: 4561,
      },
      {
        home:7895,
        office: 5111,
      },
    ]

  },
]
const names=["Naib","Sakib","Shohag"];

function func1(){
  return "Department of Computer Science and Engineering";
}

 const [user,setUser] = useState({id:101,name:"Mubasshir Naib"});
 const [text,setText] = useState("Hello I am Mubasshir");
  return (
    <>
      {/* <Component1 object={names}/> */}
      {/* <Component1 batch ="19" dept={func1()} comp={<Component2 details={details}/>}/> */}
      
      {/* <div>
        {Data.map((item, index) => (
          <div>
            {
             item.id != 100?(
              <div>
              {index } {item.Name}  {item.Id } {item.Batch}
              </div>
             ):
             (<></>)
            }
          </div>
        ))}
      </div> */}
      {/* <State/> */}
      {/* <ReactHook/> */}
      {/* <UserContext.Provider value={{user,text}}>
      home 
      <Component1/>
      </UserContext.Provider> */}
      {/* <CrudExample/> */}
      {/* <CrudPractice/> */}
      
      {/* <BrowserRouter>  
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contract" element={<Contract/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/user" element={<User/>}/>
              <Route path="/about/:Name" element={<Details/>}/>
              <Route path="/*" element={<Error/>}/>
          </Routes>
      </BrowserRouter> */}
      <Index/>

      
    </>
  );
}

export default App
