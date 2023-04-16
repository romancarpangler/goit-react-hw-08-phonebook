import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/selector';
import { logoutUser } from '../operations';

const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispath = useDispatch();

  return (
    <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 30 }}>
      <p> Helo ! {userEmail}</p>
      <button
        onClick={() => {
          dispath(logoutUser());
        }}
        style={{
          width: 50,
          height: 25,
          marginTop: 'auto',
          marginLeft: 15,
          marginBottom: 'auto',
          padding: 3,
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
