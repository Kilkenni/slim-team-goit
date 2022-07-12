import styles from "./AuthNavigation.module.scss";
import { NavLink } from "react-router-dom";

function AuthNavigation() {
  return (
    <nav>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Зареєструватися
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? styles.active : styles.link)}
      >
        Увійти
      </NavLink>
    </nav>
  );
}

export default AuthNavigation;
