import axios from 'axios';
import authHeader from './auth-header';

// const API_URL = 'https://bello.jpweb.com.co:8080/api/';
// const API_URL = "http://localhost:8080/api/";
// const API_URL = "https://caucasia.jpweb.com.co:8080/api/";
const API_URL = "https://barbosa.jpweb.com.co:8080/api/";




class UserService {
  getPublicContent() {
      return axios.get(API_URL + "all");
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
