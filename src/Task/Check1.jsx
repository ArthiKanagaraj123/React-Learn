import React from 'react'
import Pass from './Pass';
import Fail from './Fail';

const Check1 = (props) => {
    const a=props.x;
  return (
    <div>
      {a>=50?<Pass/>:<Fail/>}
    </div>
  )
}

export default Check1
