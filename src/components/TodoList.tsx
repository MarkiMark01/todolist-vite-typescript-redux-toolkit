import TodoItem from "./TodoItem";
import styles from '../styles/todolist.module.scss';

const TodoList = ({
  filteredTodos,
  handleToggleComplete,
  handleDeleteTodo,
}: {
  filteredTodos: { id: string; text: string; completed: boolean }[];
  handleToggleComplete: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}) => {
  if (filteredTodos.length === 0) return null;

  return (
    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={handleToggleComplete}
          onDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;

