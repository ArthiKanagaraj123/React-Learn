import React, { useEffect, useState } from 'react';

const Task1 = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [res, setRes] = useState(false);

  useEffect(() => {
    if (res) {
      setMessage("Loading...");

      const timer = setTimeout(() => {
        setMessage(`Hello ${name}`);
        setRes(false);
      }, 3000);
    }
  }, [res, name]);

  return (
    <div>
      <input  type="text" onChange={(e) => setName(e.target.value)} />
      <br/><br/>
      <button onClick={() => setRes(true)}>Show</button>

      <h3>{message}</h3>
    </div>
  );
};

export default Task1;

