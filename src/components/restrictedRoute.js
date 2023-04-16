import { useSelector } from 'react-redux';
import { selectlsLoggedIn } from 'redux/selector';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component, redirectTo }) => {
  const isLoggedIn = useSelector(selectlsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};
