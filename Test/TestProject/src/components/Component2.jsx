import React from 'react'

const Component2 = (props) => {
 const {details}= props;
  return (
    <div>
      {
        details.map((detail,index)=>
            <div>
               Sl: {index }  Name: {detail.Name } Id: {detail.Id }
               {
                detail.phone.map((phonenumber)=>
                    <span>
                        Home: { phonenumber.home } office : { phonenumber.office }
                    </span>
                )
               }
            </div>
        )
      }
    </div>
  )
}

export default Component2
