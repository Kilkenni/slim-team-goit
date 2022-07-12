import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import styles from "./Layout.module.scss";
import Header from "../Header";

function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
