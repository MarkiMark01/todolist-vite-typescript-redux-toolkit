"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import {
  fetchTodos,
  toggleComplete,
  deleteTodo,
} from "../redux/todoOperations";
import AddTodo from "./AddTodo";
import FilterTodo from "./FilterTodo";
import TodoList from "./TodoList";
import styles from '../styles/todos.module.scss';

const Todos = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
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

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos</p>;

  return (
    <section className={styles.mainContainer}>
      <AddTodo />
      <FilterTodo filter={filter} setFilter={setFilter} />
      <TodoList
        handleToggleComplete={handleToggleComplete}
        handleDeleteTodo={handleDeleteTodo}
        filteredTodos={filteredTodos}
      />
    </section>
  );
};
export default Todos;
