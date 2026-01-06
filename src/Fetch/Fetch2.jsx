import React, { useEffect, useState } from 'react'

const Fetch2 = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => setTodo(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Single Todo</h2>

      {todo && (
        <>
          <p>ID: {todo.id}</p>
          <p>Title: {todo.title}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </>
      )}
    </div>
  );
};

export default Fetch2
