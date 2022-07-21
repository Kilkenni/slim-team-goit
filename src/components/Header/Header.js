import React from 'react';
import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { useMediaQuery } from '../../js/hooks';
import styles from './Header.module.scss';
import Logo from '../Logo';
import Navigation from '../Navigation';
import AuthNavigation from '../AuthNavigation';
import UserMenu from '../UserMenu';
import ModalHeader from '../ModalHeader';
import sprite from './sprite.svg';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [showModal, setShowModal] = useState(false);

  const desktopSize = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--breakpoint-desktop');
  const isDesktop = useMediaQuery(`(min-width: ${desktopSize})`);

  const tabletSize = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--breakpoint-tablet');
  const isMobile = useMediaQuery(`(max-width: ${tabletSize})`);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className={styles.container}>
      <div className={styles.top}>
        <Logo />
        {isLoggedIn && isDesktop && <Navigation />}
        {isLoggedIn ? !isMobile && <UserMenu /> : <AuthNavigation />}
        {!isDesktop && isLoggedIn && (
          <button type="button" className={styles.button} onClick={toggleModal}>
            <svg alt="menu icon" width="24" height="24" className={styles.icon}>
              <use href={`${sprite}#icon-burger-menu`}></use>
            </svg>
          </button>
        )}
      </div>
      {isMobile && isLoggedIn && (
        <div className={styles.bottom}>
          <UserMenu />
        </div>
      )}

      {showModal && <ModalHeader onClose={toggleModal} />}
    </header>
  );
}
