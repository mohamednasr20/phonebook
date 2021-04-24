import axios from 'axios';
const baseUrl = '/api/persons';

const personsService = {
  getAll: () => {
    return axios.get(baseUrl);
  },

  create: (newObject) => {
    return axios.post(baseUrl, newObject);
  },

  deletePerson: (id) => {
    return axios.delete(`${baseUrl}/${id}`);
  },

  update: (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject);
  },
};

export default personsService;
