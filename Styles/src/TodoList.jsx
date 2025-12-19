
import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
  async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setTodos(data.slice(0,15));
  }
  fetchData();

    // cleanup function
    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      <h2>Todo List</h2>

      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodoList;
