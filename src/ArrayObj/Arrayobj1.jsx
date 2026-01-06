import React from 'react'
import Arrayobj2 from './Arrayobj2'
import Arrayobj3 from './Arrayobj3'
import Arrayobj4 from './Arrayobj4'

const Arrayobj1 = () => {
    const arr=[{id:1,name:"Arthi",dept:"IT"},
        {id:2,name:"Saran",dept:"ECE"},
        {id:3,name:"Pranev",dept:"MECH"}
    ];
  return (
    <div>
      <Arrayobj2 x={arr[0]}/>
      <Arrayobj3 x={arr[1].name}/>
      <Arrayobj4 x={arr}/>
    </div>
  )
}

export default Arrayobj1
