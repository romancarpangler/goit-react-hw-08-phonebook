import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../operations';
import { selectContacts } from '../redux/selector';

const FormAddcontacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState(0);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const checkingContacts = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = event => {
    event.preventDefault();
    const isContactsInclude = checkingContacts(name);

    if (isContactsInclude) {
      alert(`${name} is alredy in contacts.`);
      return;
    }

    dispatch(addContact(data));

    event.currentTarget.reset();
  };

  const data = {
    name: name,
    number: number,
  };

  return (
    <div style={{ padding: 20, paddingBottom: 0 }}>
      <h1>Phonebook</h1>

      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', margin: 20 }}>
          Name
          <input
            style={{ marginLeft: 10 }}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="ivan vasulovuch"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label style={{ display: 'block', margin: 20, marginLeft: 5 }}>
          Number
          <input
            style={{ marginLeft: 10 }}
            onChange={handleChange}
            type="tel"
            name="number"
            placeholder="111-111-11-11"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button style={{ marginLeft: 150 }}>Added contact</button>
      </form>
    </div>
  );
};
export default FormAddcontacts;
