import React from 'react'

const Sum = (props) => {
    const a=props.x;
    let count=0;
    for(let i=1;i<=a;i++)
    {
        count+=i
    }
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Sum
