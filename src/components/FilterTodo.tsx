import styles from './todos.module.scss';

const FilterTodo = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (value: string) => void;
}) => (
  <input
    type="text"
    placeholder="Filter tasks"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  />
);
export default FilterTodo;
