import React, { useEffect, useState } from 'react'

const Fetch1 = () => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setdata(json);
      });
  }, []);

  return (
    <>
      {data && data.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </>
  );
};


export default Fetch1
