import { useDispatch } from 'react-redux';
import { searchContacts } from '../redux/slice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20, paddingBottom: 0 }}>
      <h1>Contacts</h1>
      <label>
        Find contacts by name
        <input
          style={{ marginLeft: 10 }}
          type="text"
          name="filter"
          onChange={e => {
            dispatch(searchContacts(e.target.value.toLowerCase()));
          }}
        ></input>
      </label>
    </div>
  );
};
export default Filter;
