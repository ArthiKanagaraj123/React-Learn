import React from 'react'
import Eligible from './Eligible';
import Noteligible from './Noteligible';

const Eli = (props) => {
    const a=props.x;
    if(a>=18)
    {
      return <Eligible/>
    }
  return (
    <div>
      {/* {a>=18?<Eligible/>:<Noteligible/>} */}
      <Noteligible/>
    </div>
  )
}

export default Eli
