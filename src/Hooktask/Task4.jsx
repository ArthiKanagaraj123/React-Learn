import React, { useState, useEffect } from "react";

const Task4=()=> {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    if (disable) {
      setTimeout(() => {
        setDisable(false); 
      }, 3000);
    }
  }, [disable]);

  return (
    <div>
      <button onClick={() => setDisable(true)} disabled={disable}>{disable ? "Please wait..." : "Click Me"}
      </button>
    </div>
  );
}


export default Task4
