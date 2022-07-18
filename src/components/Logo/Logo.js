import styles from './Logo.module.scss';
import { NavLink } from 'react-router-dom';
import defaultLogo from './logo.png';
import sprite from './slim-mom.svg';
import { authSelectors } from '../../redux/auth';
import { useMediaQuery } from '../../js/hooks';
import { useSelector } from 'react-redux';

export default function Logo({ ...DOMprops }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const tabletSize = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--breakpoint-tablet');
  const isMobile = useMediaQuery(`(max-width: ${tabletSize})`);
  const logo = defaultLogo;
  return (
    <NavLink to="/" {...DOMprops}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" className={styles.logo__img} />
        <div className={styles.logo__title}>
          <svg alt="logo title" width="106" height="16">
            <use href={`${sprite}#icon-SlimMom`}></use>
          </svg>
        </div>
        {isLoggedIn && isMobile && (
          <div className={styles.logo__title_mob}>
            <svg alt="logo title" width="106" height="16">
              <use href={`${sprite}#icon-SlimMom`}></use>
            </svg>
          </div>
        )}
      </div>
    </NavLink>
  );
}
