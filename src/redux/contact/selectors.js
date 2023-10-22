import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValue } from 'redux/filter/selectors';

export const selectContactItems = state => state.contact.items;
export const selectIsLoading = state => state.contact.isLoading;
export const selectError = state => state.contact.error;

export const selectFilteredContact = createSelector(
  [selectContactItems, selectFilterValue],
  (contactItems, filter) => {
    return contactItems.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
