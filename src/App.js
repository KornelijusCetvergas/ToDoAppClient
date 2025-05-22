import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/todo/all")
      .then(res => res.json())
      .then((data) => {
        setTodos(data);
      })
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.description}</span>
              <button>{todo.isdone ? "Done" : "Pending"}</button>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;