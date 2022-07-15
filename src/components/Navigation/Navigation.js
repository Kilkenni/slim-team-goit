import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className={styles.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Щоденник
        </NavLink>
        <NavLink
          to="/calculator"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Калькулятор
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
