import { fetchContact } from 'operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormAddcontacts from 'components/form';
import Contacts from 'components/contacts';
import Filter from 'components/filter';

const WraperContacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <FormAddcontacts></FormAddcontacts>
      <Filter></Filter>
      <Contacts></Contacts>
    </>
  );
};
export default WraperContacts;
