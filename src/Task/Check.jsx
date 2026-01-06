import React from 'react'
import Login from './Login';
import Logout from './Logout';

const Check = (props) => {
    const a=props.x;
  return (
    <div>
      {a=="true"?<Login/>:<Logout/>}
    </div>
  )
}

export default Check
