import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      {isLoggedIn && (
        <div className={styles.navigation}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Щоденник
          </NavLink>
          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Калькулятор
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
