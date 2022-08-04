import axios from "axios";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

async function getFilms(page) {
  return await axios.get(`${REACT_APP_BASE_URL}/${page}`);
}

async function postFilms() {
  return await axios.post(`${REACT_APP_BASE_URL}/`, {});
}

const api = {
  getFilms,
  postFilms,
};
export default api;
