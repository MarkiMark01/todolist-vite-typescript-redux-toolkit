import TodoItem from "./TodoItem";

const TodoList = ({
  filteredTodos,
  handleToggleComplete,
  handleDeleteTodo,
}: {
  filteredTodos: { id: string; text: string; completed: boolean }[];
  handleToggleComplete: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
}) => {
  return (
    <ul>
      {filteredTodos.length === 0 ? (
        <li>No tasks found</li>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={handleToggleComplete}
            onDeleteTodo={handleDeleteTodo}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
