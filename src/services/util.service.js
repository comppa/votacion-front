import axios from "axios";
import authHeader from './auth-header';


// const API_URL = "https://bello.jpweb.com.co:8080/api/";
// const API_URL = "http://localhost:8080/api/";
// const API_URL = "https://caucasia.jpweb.com.co:8080/api/";
const API_URL = "https://barbosa.jpweb.com.co:8080/api/";




class UtilService {

 
  getVotes(username) {
    return axios.get(API_URL + "get-table-votes" );
  }

  getPie(){
    return axios.get(API_URL + "getPie");
  }

  getScrti(){
    return axios.get(API_URL + "getscrutinizedtables");
  }
  getNScrti(){
    return axios.get(API_URL + "getnoscrutinizedtables");
  }

}

export default new UtilService();
