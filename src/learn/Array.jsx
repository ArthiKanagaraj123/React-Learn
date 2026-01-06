import React from 'react'
import Array1 from './Array1'
import Array2 from './Array2'
import Array3 from './Array3'

const Array = () => {
    const arr=["Arthi","Saran","Sandy"]
  return (
    <div>
      <Array1 x={arr[0]}/>
      <Array2 x={arr[1]}/>
      <Array3 x={arr[2]}/>
    </div>
  )
}

export default Array

