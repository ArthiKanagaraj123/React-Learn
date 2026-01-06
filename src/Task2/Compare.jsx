import React from 'react'
import Avalue from './Avalue';
import Bvalue from './Bvalue';

const Compare = (props) => {
    const a=props.x;
    const b=props.y;
    if(a>b)
    {
      return <Avalue/>
    }
  return (
    <div>
      {/* {a>b?<Avalue/>:<Bvalue/>} */}
      <Bvalue/>
    </div>
  )
}

export default Compare
