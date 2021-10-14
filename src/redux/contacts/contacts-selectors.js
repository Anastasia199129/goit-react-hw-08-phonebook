import { createSelector } from 'reselect';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;
const getLoading = state => state.contacts.loading;

const getFiltredContacts = createSelector([getContacts, getFilter], (items, filter) => {
  return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
});

// const getFiltredContacts = state => {
//   const items = getContacts(state);
//   const filter = getFilter(state);
//   return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
// };

export default {
  getLoading,
  getFiltredContacts,
  getFilter,
  getContacts,
};
