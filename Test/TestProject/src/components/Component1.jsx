import React from 'react'

export default function Component1(props) {
  const {object}=props;
  const [c1,c2,c3] =object;
  return (
    <div>
      {/* {dept}
      {comp} */}
      {c2}

    </div>
  )
}
