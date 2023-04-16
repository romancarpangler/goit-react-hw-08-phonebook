import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectlsLoggedIn } from 'redux/selector';
import { refreshUser } from '../operations';
import { selectIsRefresh } from 'redux/selector';
import { PrivateRout } from './privateRout';
import { RestrictedRoute } from './restrictedRoute';
import Navigation from './navigation';
import Register from './register';
import Login from './login';
import WraperContacts from './wraperContacts';

export const App = () => {
  const dispath = useDispatch();

  const isLoggetIn = useSelector(selectlsLoggedIn);
  const isREfresh = useSelector(selectIsRefresh);

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return (
    <>
      <>
        <div style={{ display: 'flex' }}>
          <Navigation />
        </div>

        <Routes>
          {isLoggetIn && !isREfresh && (
            <Route
              path="/contacts"
              element={
                <PrivateRout
                  component={<WraperContacts />}
                  redirectTo="/login"
                />
              }
            ></Route>
          )}

          <Route
            path="/login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          ></Route>
          <Route path="*" element={<Register />}></Route>
        </Routes>
      </>
    </>
  );
};
