import { NavLink } from "react-router-dom";
import styles from '../styles/nopage.module.scss';

const NotFoundPage = () => {

  return (
    <div className={styles.nopage}>
      <p>Oops, something went wrong... Error 404🕵️</p>
      <section className={styles.nopageLink}>
        <NavLink to="/todos">Go to Todo list</NavLink>
      </section>
    </div>
  );
};

export default NotFoundPage;