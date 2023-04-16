import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from 'operations';

const Register = () => {
  const [name, setname] = useState('');
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
      case 'name':
        setname(value);
        break;
      default:
        return;
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Registration</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispath(signupUser({ name: name, email: email, password: password }));
          e.currentTarget.reset();
        }}
        style={{ padding: 20 }}
      >
        <label style={{ display: 'block', margin: 20 }}>
          name
          <input
            name="name"
            onChange={handleChange}
            type="text"
            style={{ marginLeft: 20 }}
          ></input>
        </label>
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
        <button style={{ marginLeft: 200 }}>Signup</button>
      </form>
    </div>
  );
};
export default Register;
