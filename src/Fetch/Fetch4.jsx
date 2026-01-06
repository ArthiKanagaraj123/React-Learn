import React, { useEffect, useState } from 'react'

const Fetch4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  return (
    <div>
      <h2>Post Data</h2>

      {data[0] && (
        <>
          <p>ID: {data[0].id}</p>
          <p>Title: {data[0].title}</p>
          <p>Body: {data[0].body}</p>
        </>
      )}
    </div>
  );
}


export default Fetch4
