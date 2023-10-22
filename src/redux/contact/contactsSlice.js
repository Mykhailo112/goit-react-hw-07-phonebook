import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContact, saveContact, deleteContact } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(saveContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

const extraActions = [fetchContact, saveContact, deleteContact];

const getActions = type => extraActions.map(action => action[type]);

export const contactReducer = contactSlice.reducer;
