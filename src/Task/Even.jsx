import React from 'react'

const Even = (props) => {
    const a=props.x;
    let count=0;
    for(let i=1;i<=a;i++)
    {
        if(i%2===0)
        {
            count++;
        }
    }
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Even
