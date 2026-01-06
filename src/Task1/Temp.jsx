import React from 'react'
import Hot from './Hot';
import Normal from './Normal';

const Temp = (props) => {
    const a=props.x;
    if(a>30)
    {
      return <Hot/>
    }
  return (
    <div>
      {/* {a>30?<Hot/>:<Normal/>} */}
      <Normal/>
    </div>
  )
}

export default Temp
