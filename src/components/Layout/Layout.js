import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader';
import styles from './Layout.module.scss';
import Header from '../Header';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={1500} position="top-center" />
    </div>
  );
}

export default Layout;
