
import styles from "../styles/header.module.scss";

const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <span className={styles.header__title}>
        Todo List
      </span>
    </header>
  );
};

export default Header;