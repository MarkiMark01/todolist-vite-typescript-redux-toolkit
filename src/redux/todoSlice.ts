'use client';
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/todo";

const API_URL = "https://65da2b69bcc50200fcdcaf20.mockapi.io/api/tasks";

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

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


const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load todos";
      })
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<string>) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(toggleComplete.fulfilled, (state, action: PayloadAction<Todo>) => {
        const updatedTodo = action.payload;
        const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
        if (index !== -1) {
          state.todos[index] = updatedTodo;
        }
      });
  },
});

export default todoSlice.reducer;