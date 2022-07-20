import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { authOperations, authSelectors } from '../redux/auth';
import { Navigate } from 'react-router-dom';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import RegisterRoute from './RegisterRoute';
import './App.module.scss'; //required for usable CSS variables on first render with React lazy()

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

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const accentColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--accent-main');
  const loaderCSSOverride = {
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <Routes>
      {!isFetchingCurrentUser ? (
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              isLoggedIn ? (
                <Navigate to={'/diary'} replace={true} />
              ) : (
                <MainPage />
              )
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
              <PublicRoute redirectTo="/" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="calculator"
            element={
              <PrivateRoute redirectTo="/login">
                <CalculatorPage />
              </PrivateRoute>
            }
          />
          <Route
            path="diary"
            element={
              <PrivateRoute redirectTo="/login">
                <DiaryPageView />
              </PrivateRoute>
            }
          />
        </Route>
      ) : (
        <Route
          path="*"
          element={
            <CircleLoader
              color={accentColor}
              size={150}
              cssOverride={loaderCSSOverride}
            />
          }
        ></Route>
      )}
    </Routes>
  );
}

export default App;
