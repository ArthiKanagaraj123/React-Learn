import React, { useState, useEffect } from 'react'

const Task7 = () => {
    const [text, setText] = useState("");
    const [res, setRes] = useState("");
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (start) {
        setTimeout(() => {
            setRes(text.toUpperCase());
            setStart(false);
        }, 2000);
        }
    }, [start]);

  return (
    <div>
      <input type="text"  onChange={(e) => setText(e.target.value)}/>
        <br/><br/>
      <button onClick={() => setStart(true)}>Convert</button>
      <br/><br/>
       <h2>{res}</h2>
    </div>
  )
}

export default Task7
