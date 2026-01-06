import React from 'react'

const Arrayobj2 = (props) => {
    const a=props.x;
  return (
    <div>
      <h1>{a.id+"  "+a.name+"  "+a.dept}</h1>
    </div>
  )
}

export default Arrayobj2
