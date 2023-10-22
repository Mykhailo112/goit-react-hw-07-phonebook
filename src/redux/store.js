import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contact/contactsSlice';
import { filtersSlice } from './filter/filtersSlice';

export const store = configureStore({
  reducer: { contact: contactReducer, filter: filtersSlice.reducer },
});
