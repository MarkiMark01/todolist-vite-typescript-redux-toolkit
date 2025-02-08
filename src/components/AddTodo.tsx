"use client";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTodo } from "../redux/todoOperations";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}