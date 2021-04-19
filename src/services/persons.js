import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

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
