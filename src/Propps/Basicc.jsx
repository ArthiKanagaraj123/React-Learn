import React from 'react'
import Basicc1 from './Basicc1'

const Basicc = () => {
    // let x=10
    // const arr=[1,2,3]
    const person={
        id:123,
        name:"Arthi"
    }
  return (
    <div>
      <Basicc1 color="blue" x={person.name}/>
    </div>
  )
}

export default Basicc
