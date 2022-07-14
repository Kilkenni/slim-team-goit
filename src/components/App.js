import DiaryPageView from "../pages/DiaryPage/DiaryPageView";
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import MainPage from "../pages/MainPage/index";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CalculatorPage from "../pages/CalculatorPage"

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Routes>
      {!isFetchingCurrentUser && (
        <Route path="/" element={<Layout />}>
          <Route
            path=""
            element={isLoggedIn ? <DiaryPageView /> : <MainPage/>}
          />            
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/calculator" restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/calculator" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="calculator" element={<PrivateRoute> <CalculatorPage /></PrivateRoute>}/>
        </Route>
      )
      }
    </Routes>  
 );
}

export default App;