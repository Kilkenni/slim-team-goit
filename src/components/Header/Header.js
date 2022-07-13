import React from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import styles from "./Header.module.scss";
import Logo from "../Logo";
import Navigation from "../Navigation";
import AuthNavigation from "../AuthNavigation";
import UserMenu from "../UserMenu";

export default function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.container}>
      <Logo />
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}
