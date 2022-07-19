import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { CircleLoader } from 'react-spinners';
import { authOperations, authSelectors } from '../redux/auth';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RegisterRoute from './RegisterRoute';
import './App.module.scss'; //required for usable CSS variables on first render with React lazy()
import Loader from './Loader/Loader';

// import MainPage from "../pages/MainPage/index";
// import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";
// import CalculatorPage from "../pages/CalculatorPage"
// import DiaryPageView from "../pages/DiaryPage";
const MainPage = lazy(() =>
  import('../pages/MainPage' /* webpackChunkName: "MainPage" */)
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage' /* webpackChunkName: "LoginPage" */)
);
const RegisterPage = lazy(() =>
  import('../pages/RegisterPage' /* webpackChunkName: "RegisterPage" */)
);
const CalculatorPage = lazy(() =>
  import('../pages/CalculatorPage' /* webpackChunkName: "CalculatorPage" */)
);
const DiaryPageView = lazy(() =>
  import('../pages/DiaryPage' /* webpackChunkName: "DiaryPage" */)
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Routes>
      {!isFetchingCurrentUser ? (
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              // isLoggedIn ? <DiaryPageView /> : <MainPage />
              <PublicRoute redirectTo="/diary" restricted>
                <MainPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <RegisterRoute redirectTo="/login" restricted>
                <RegisterPage />
              </RegisterRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/diary" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="diary"
            element={
              <PrivateRoute>
                <DiaryPageView />
              </PrivateRoute>
            }
          />
          <Route
            path="calculator"
            element={
              <PrivateRoute>
                <CalculatorPage />
              </PrivateRoute>
            }
          />
        </Route>
      ) : (
        <Route path="*" element={<Loader />}></Route>
      )}
    </Routes>
  );
}

export default App;
