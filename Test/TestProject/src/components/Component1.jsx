import React from 'react'

export default function Component1(props) {
  const {batch,dept,comp} = props
  // const {object}=props;
  // const [c1,c2,c3] =object;
  return (
    <div>
      {dept }
      <div>
      Batch: {batch}
      </div>
      {comp}
      {/* {c2} */}

    </div>
  )
}
