import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectlsLoggedIn } from '../redux/selector';
import UserMenu from './userMenu';

const Navigation = () => {
  const isLogin = useSelector(selectlsLoggedIn);
  return (
    <>
      <div style={{ marginTop: 15 }}>
        {!isLogin && (
          <>
            <span style={{ marginRight: 15, marginLeft: 10 }}>
              <NavLink to="/register">register</NavLink>
            </span>
            <span style={{ marginRight: 15 }}>
              <NavLink to="/login">login</NavLink>
            </span>
          </>
        )}
        {isLogin && (
          <span style={{ marginLeft: 15 }}>
            <NavLink to="/contacts">contacts</NavLink>
          </span>
        )}
      </div>
      {isLogin && <UserMenu />}
    </>
  );
};

export default Navigation;
