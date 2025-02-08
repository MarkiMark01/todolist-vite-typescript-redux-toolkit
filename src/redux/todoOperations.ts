import {createAsyncThunk} from '@reduxjs/toolkit';

const API_URL = "https://65da2b69bcc50200fcdcaf20.mockapi.io/api/tasks";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const response = await fetch(API_URL);
    return response.json();
  });
  
  export const addTodo = createAsyncThunk("todos/addTodo", async (text: string) => {
    const newTodo = { text, completed: false };
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });
    return response.json();
  });
  
  export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id: string) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return id;
  });
  
  export const toggleComplete = createAsyncThunk(
    "todos/toggleComplete",
    async (id: string) => {
  
      const todoResponse = await fetch(`${API_URL}/${id}`);
      const todo = await todoResponse.json();
      const updatedTodo = { ...todo, completed: !todo.completed };
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTodo),
      });
  
      return response.json();
    }
  );