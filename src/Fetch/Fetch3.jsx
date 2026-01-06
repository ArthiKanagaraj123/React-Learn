import React, { useState } from 'react'

const Fetch3 = () => {

  const [id, setId] = useState("");
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState("");

  const fetchTodo = () => {
    if (!id) {
      setError("Please enter an ID");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Data not found");
        }
        return response.json();
      })
      .then((data) => {
        setTodo(data);
        setError("");
      })
      .catch(() => {
        setTodo(null);
        setError("Invalid ID");
      });
  };

  return (
    <div>
      <h2>Search Todo by ID</h2>

      <input
        type="number"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={fetchTodo}>Search</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {todo && (
        <div>
          <p><b>ID:</b> {todo.id}</p>
          <p><b>Title:</b> {todo.title}</p>
          <p><b>Status:</b> {todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
      )}
    </div>
  );
};

export default Fetch3
