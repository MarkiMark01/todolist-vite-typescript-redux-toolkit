const TodoItem = ({
  todo,
  onToggleComplete,
  onDeleteTodo,
}: {
  todo: { id: string; text: string; completed: boolean };
  onToggleComplete: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "lightgreen" : "black",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)}>❌</button>
    </li>
  );
};
export default TodoItem;
