import React from 'react'

const Arrayobj4 = (props) => {
    const a=props.x;
  return (
    <div>
      <h1>{a[2].id+"  "+a[2].name+"  "+a[2].dept+"  "+a[1].id}</h1>
    </div>
  )
}

export default Arrayobj4
