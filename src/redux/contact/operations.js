import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'servises/api';

export const fetchContact = createAsyncThunk(
  'contact/getContact',
  async (_, thunkAPI) => {
    try {
      const contactItems = await api.getContact();
      return contactItems;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const saveContact = createAsyncThunk(
  'contact/adsContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const contactToAdd = await api.addContact({ name, number });
      return contactToAdd;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (id, thunkAPI) => {
    try {
      const contactToDelete = await api.deleteContact(id);
      return contactToDelete;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
