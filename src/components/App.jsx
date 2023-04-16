import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../operations';
import { PrivateRout } from './privateRout';
import { RestrictedRoute } from './restrictedRoute';

const Navigation = lazy(() => import('./navigation'));
const Register = lazy(() => import('./register'));
const Login = lazy(() => import('./login'));
const WraperContacts = lazy(() => import('./wraperContacts'));

export const App = () => {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(refreshUser());
  }, [dispath]);

  return (
    <>
      <Suspense>
        <div style={{ display: 'flex' }}>
          <Navigation />
        </div>

        <Routes>
          <Route
            path="/contacts"
            element={
              <PrivateRout component={<WraperContacts />} redirectTo="/login" />
            }
          ></Route>

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
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};
// ya nastoyashiy dibil
