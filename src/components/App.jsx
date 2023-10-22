import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Loader } from './Loader/Loader';
import { MainDiv } from './App.styled.js';
import { GlobalStyle } from './GlobalStyle.js';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact } from 'redux/contact/operations';
import {
  selectContactItems,
  selectError,
  selectIsLoading,
} from 'redux/contact/selectors';

export const App = () => {
  const contacts = useSelector(selectContactItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  useEffect(() => {
    if (error === 'ERR_BAD_REQUEST') {
      return error;
    }
  });

  return (
    <MainDiv>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <Loader />}

      {contacts.length !== 0 ? (
        <>
          <Filter />

          <ContactList />
        </>
      ) : (
        <h1>
          There are no contacts in your phonebook. Please add your first
          contact!
        </h1>
      )}
    </MainDiv>
  );
};
