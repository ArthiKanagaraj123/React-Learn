import React from 'react'
import Object2 from './Object2'
import Object3 from './Object3'
import Object4 from './Object4'

const Object1 = () => {
    let person={
        id: 1,
        name:"Arthi",
        dept:"IT"
    }
  return (
    <div>
       <Object2 x={person.id}/>
       <Object3 x={person.name}/>
       <Object4 x={person.dept}/>
    </div>
  )
}

export default Object1
