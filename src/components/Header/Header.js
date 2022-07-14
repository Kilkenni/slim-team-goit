import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { useMediaQuery } from '../../js/hooks';
import styles from './Header.module.scss';
import Logo from '../Logo';
import Navigation from '../Navigation';
import AuthNavigation from '../AuthNavigation';
import UserMenu from '../UserMenu';
import Modal from '../Modal';
import sprite from './sprite.svg';

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [showModal, setShowModal] = useState(false);
  const desktopSize = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--breakpoint-desktop');
  const isDesktop = useMediaQuery(`(min-width: ${desktopSize})`);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <header className={styles.container}>
      <Logo />
      {isDesktop && <Navigation />}
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      {!isDesktop && isLoggedIn && (
        <button type="button" className={styles.button} onClick={toggleModal}>
          <svg alt="menu icon" width="24" height="24" className={styles.icon}>
            <use href={`${sprite}#icon-burger-menu`}></use>
          </svg>
        </button>
      )}
      {showModal && (
        <Modal onClose={toggleModal}>
          <Navigation />
        </Modal>
      )}
    </header>
  );
}
