import styles from "./Logo.module.scss";
import { NavLink } from "react-router-dom";
import SvgTextLogo from "./SvgTextLogo";
import defaultLogo from "./logo.png";

export default function Logo() {
  const logo = defaultLogo;
  return (
    <NavLink to="diary">
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logo__img} />
        <div className={styles.logo__title}>
          <SvgTextLogo />
        </div>
      </div>
    </NavLink>
  );
}
