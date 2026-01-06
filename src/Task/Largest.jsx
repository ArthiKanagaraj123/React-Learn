import React from 'react'

const Largest = (props) => {
    const a=props.x;
    const lar=Math.max(...a)
  return (
    <div>
      <h1>{lar}</h1>
    </div>
  )
}

export default Largest
