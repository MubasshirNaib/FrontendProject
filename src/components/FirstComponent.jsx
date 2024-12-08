import React from 'react'
// const name="Mubasshir";
// function text(){
//   return "My Name is " + name
// }
const FirstComponent = (props) => {
  const {name,id,emoji,fruit,func,cmponant} =props; // props.name="abc"; we can't define the props in this section
  
  return (
    <div>
      {/* {text()}
      {name} */}
      {/* {text()} */}
      {/* {props.name}
      {props.id} */}
      {/* {cmponant}
      {emoji}
      {fruit}
      {func} */}
      {/* {name} {id}access for const */}
      {props.studentInfo.name}
      {props.studentInfo.roll}
      {props.studentInfo.emoji}
      {props.studentInfo.fav_foods.map((fav_food)=>
      (
        <p>fav_food</p>
      ))}
      {props.studentInfo.fav_color}
    </div>
  )
}

export default FirstComponent