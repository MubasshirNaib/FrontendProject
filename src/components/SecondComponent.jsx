import React from 'react'

const SecondComponent = (props) => {
  return (
    <div>SecondComponent
        {/* {props.products.map((product)=>
      (
        <>{product.product_id}</>
      ))} */}
      {props.products[0].product_id}
    </div>
  )
}

export default SecondComponent