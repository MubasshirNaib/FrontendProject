import Component1 from "./components/Component1"
import Data from "./dataset/Data.json"
import Component2 from "./components/Component2"

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


  return (
    <>
      <Component1 object={names}/>
      {/* <Component1 dept={func1()} comp={<Component2 details={details}/>}/> */}
      
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
    </>
  );
}

export default App
