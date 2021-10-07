import axios from 'axios';

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

const addContacts = () => {
  return axios.post('/contacts').then(({ data }) => data);
};

const deleteContacts = contactId => {
  return axios.delete(`/contacts${contactId}`);
};

const ubdateContact = (contactId, update) => {
  axios.patch(`/contacts${contactId}`, update).then(({ data }) => data);
};

export default { fetchContacts, addContacts, deleteContacts, ubdateContact };
