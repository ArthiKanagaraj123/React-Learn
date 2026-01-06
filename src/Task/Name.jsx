import React from 'react'

const Name = (props) => {
  const a=props.x;
  let ele=[];
  for(let i=0;i<a.length;i++)
  {
     ele.push(<p>{a[i]}</p>)
  }
  return (
    <div>
      <h1>{ele}</h1>
    </div>
  )
}

export default Name
