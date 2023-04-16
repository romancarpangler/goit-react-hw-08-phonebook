import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectlsLoggedIn, selectIsRefresh } from 'redux/selector';

export const PrivateRout = ({ component, redirectTo }) => {
  const isLoggetIn = useSelector(selectlsLoggedIn);
  const isREfresh = useSelector(selectIsRefresh);
  const showContact = !isLoggetIn && !isREfresh;
  return showContact ? <Navigate to={redirectTo} /> : component;
};
