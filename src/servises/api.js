import axios from 'axios';
axios.defaults.baseURL = `https://65352414c620ba9358ec32bd.mockapi.io`;

export const getContact = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

export const addContact = async ({ name, number }) => {
  const response = await axios.post(`/contacts`, { name, number });
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
