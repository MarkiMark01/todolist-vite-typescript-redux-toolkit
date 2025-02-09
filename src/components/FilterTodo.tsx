import styles from "../styles/filter.module.scss";

const FilterTodo = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (value: string) => void;
}) => (
  <section className={styles.filterBox}>
    <input
      type="text"
      placeholder="Filter tasks"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className={styles.filterBox__filter}
    />
  </section>
);
export default FilterTodo;
