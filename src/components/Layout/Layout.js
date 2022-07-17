import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { CircleLoader } from "react-spinners";
import styles from "./Layout.module.scss";
import Header from "../Header";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue("--accent-main");
  const loaderCSSOverride = {
    marginTop: "100px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={<CircleLoader color={accentColor} size={150} cssOverride={loaderCSSOverride} />}>
        <Outlet />
      </Suspense>
       <ToastContainer autoClose={1500} position="top-center" />
    </div>
  );
}

export default Layout;
