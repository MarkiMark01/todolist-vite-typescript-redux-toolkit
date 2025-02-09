import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../redux/store";
import { addTodo } from "../redux/todoOperations";
import styles from "../styles/addtodo.module.scss";

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
    <form onSubmit={handleSubmit} className={styles.todoForm}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={styles.todoForm__input}
      />
      <button type="submit" className={styles.todoForm__btn}>
        Add Todo
      </button>
    </form>
  );
}
