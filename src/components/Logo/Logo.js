import styles from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import defaultLogo from './logo.png';
import sprite from './slim-mom.svg';

export default function Logo() {
  const logo = defaultLogo;
  return (
    <NavLink to="/">
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logo__img} />
        <div className={styles.logo__title}>
          <svg alt="logo title" width="106" height="16">
            <use href={`${sprite}#icon-SlimMom`}></use>
          </svg>
        </div>
      </div>
    </NavLink>
  );
}
