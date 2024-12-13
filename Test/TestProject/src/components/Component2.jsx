import React,{useContext} from 'react'
import { UserContext } from './UserContext';
const Component2 = () => {
//  const {details}= props;
 const user = useContext(UserContext);
 console.log(user);
  return (
    <div>
      {/* {
        details.map((detail,index)=>
            <div>
               Sl: {index }  Name: {detail.Name } Id: {detail.Id }
               {
                detail.phone.map((phonenumber)=>
                    <div>
                        Home: { phonenumber.home } office : { phonenumber.office }
                    </div>
                )
               }
            </div>
        )
      } */}
      component2
      <h1>{user.id}</h1>
      <h2>{user.name}</h2>
    </div>
  )
}

export default Component2
