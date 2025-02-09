"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchTodos, toggleComplete, deleteTodo } from "../redux/todoOperations";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const dispatch = useDispatch<AppDispatch>();
  const { todos, loading, error } = useSelector((state: RootState) => state.todos);
  const [filter, setFilter] = useState(""); 

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleToggleComplete = (id: string) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };


  const filteredTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(filter.toLowerCase()) 
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos</p>;

  return (
  
    <div>
      <AddTodo/>
      <input
        type="text"
        placeholder="Filter tasks"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      
      <ul>
        {filteredTodos.length === 0 ? (
          <li>No tasks found</li> 
        ) : (
          filteredTodos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "lightgreen" : "black",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}>❌</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}