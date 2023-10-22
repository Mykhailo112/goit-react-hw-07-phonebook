import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contact/operations.js';
import { Ul, Li, Button } from './ContactList.styled.js';
import { CgTrash } from 'react-icons/cg';
import { selectFilteredContact } from 'redux/contact/selectors.js';

export const ContactList = () => {
  const filteredContact = useSelector(selectFilteredContact);
  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <Ul>
      {filteredContact.map(({ id, name, number }) => (
        <Li key={id}>
          {name + ':' + number}
          {
            <Button type="button" onClick={() => removeContact(id)}>
              <CgTrash size={20} />
            </Button>
          }
        </Li>
      ))}
    </Ul>
  );
};
