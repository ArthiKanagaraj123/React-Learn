import React, { useState, useEffect } from 'react'

const Task8 = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (show) {
        setTimeout(() => {
            setShow(false);
        }, 3000);
        }
    }, [show]);
  return (
    <div>
      <button onClick={() => setShow(true)}>Click</button>
      <br/><br/>
       {show&&<h2>Hello</h2>}
    </div>
  )
}

export default Task8
