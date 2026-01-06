import React, { useState, useEffect } from "react";

const Task10 = () => {
      const [start, setStart] = useState(false);
      const [btnText, setBtnText] = useState("Click Me");

    useEffect(() => {
        if (start) {
        setTimeout(() => {
            setBtnText("Clicked!");
            setStart(false); 
        }, 2000);
        }
    }, [start]);
  return (
    <div>
      <button onClick={() => setStart(true)}>{btnText}</button>
    </div>
  )
}

export default Task10
