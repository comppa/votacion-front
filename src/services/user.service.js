import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/';

class UserService {
  getPublicContent() {
      return axios.get("http://localhost:8080/api/all");
  }

  getUserBoard() {
    return axios.get(API_URL + 'testigo', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'candidato', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
