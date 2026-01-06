import React from 'react'

const Negativenumber = (props) => {
    const a=props.x;
    let count=0;
    for(let i=0;i<a.length;i++)
    {
        if(a[i]<0){
            count++
        }
    }
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Negativenumber
