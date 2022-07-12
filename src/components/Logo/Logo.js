import styles from "./Logo.module.scss";
import { NavLink } from "react-router-dom";
import defaultLogo from "./logo.png";

export default function Logo() {
  const logo = defaultLogo;
  return (
    <NavLink to="diary">
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logo__img} />
        <div className={styles.logo__title}>
          <span className={styles.logo__slim}>Slim</span>
          <span className={styles.logo__mom}>Mom</span>
        </div>
      </div>
    </NavLink>
  );
}
