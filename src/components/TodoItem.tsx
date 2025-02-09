import { FC } from "react";
import styles from "../styles/todoitem.module.scss";

interface TodoItemProps {
  todo: { id: string; text: string; completed: boolean };
  onToggleComplete: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onDeleteTodo,
}) => {
  return (
    <li className={styles.list__item}>
      <section className={styles.list__item_tasks}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
          className={styles.list__item_input}
        />
        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "lightgreen" : "black",
          }}
        >
          {todo.text}
        </span>
      </section>
      <span
        onClick={() => onDeleteTodo(todo.id)}
        className={styles.list__item_croos}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;

