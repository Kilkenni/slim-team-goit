import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { CircleLoader } from "react-spinners";
import styles from "./Layout.module.scss";
import Header from "../Header";

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
    </div>
  );
}

export default Layout;
