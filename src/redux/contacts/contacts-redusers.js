import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  changeFilter,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contasts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => [...payload],
  [addContactSuccess]: (state, { payload }) => {
    const findName = state.find(({ name }) => name === payload.name);
    if (findName !== undefined) {
      toast(`${payload.name} already exists`);
      return;
    }
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
