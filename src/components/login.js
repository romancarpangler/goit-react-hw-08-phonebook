import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../operations';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const dispath = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setemail(value);
        break;
      case 'password':
        setpassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispath(loginUser({ email: email, password: password }));
          e.currentTarget.reset();
        }}
        style={{ padding: 20 }}
      >
        <label style={{ display: 'block', margin: 20 }}>
          email
          <input
            name="email"
            onChange={handleChange}
            type="email"
            style={{ marginLeft: 20 }}
          ></input>
        </label>
        <label style={{ display: 'block', margin: 20, marginLeft: -6 }}>
          password
          <input
            name="password"
            onChange={handleChange}
            type="password"
            style={{ marginLeft: 20 }}
          ></input>
        </label>
        <button style={{ marginLeft: 200 }}>Login</button>
      </form>
    </div>
  );
};
export default Login;
