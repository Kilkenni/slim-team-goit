import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';



function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  
  return (
    <Routes>
      {!isFetchingCurrentUser &&
        <Route path="/" element={<Layout />}>
        
        <Route path="register" element={<PublicRoute ><RegisterPage /></PublicRoute>} />
        <Route path="login" element={<PublicRoute ><LoginPage /></PublicRoute>} />       
        
        </Route>
      }
    </Routes>  

    
  );
}

export default App;
