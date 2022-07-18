import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';


export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isNamePresent = useSelector(authSelectors.getUsername);
  const shouldRedirect =  isNamePresent&&restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}