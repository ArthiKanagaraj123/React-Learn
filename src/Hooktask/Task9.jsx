import React, { useState, useEffect } from "react";

const Task9 = () => {
  const [start, setStart] = useState(false);
  const [bg, setBg] = useState("lightgray");

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setBg("green");
        setStart(false);
      }, 2000);
    }
  }, [start]);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => setStart(true)}>
        Change Background
      </button>

      <div
        style={{
          marginTop: "20px",
          width: "250px",
          height: "120px",
          backgroundColor: bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px"
        }}
      >
         Box
      </div>
    </div>
  )
}

export default Task9
