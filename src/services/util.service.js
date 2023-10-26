import axios from "axios";

// const API_URL = "https://bello.jpweb.com.co:8080/api/";
const API_URL = "http://localhost:8080/api/";


class UtilService {

 
  getVotes() {
    return axios.get(API_URL + "get-table-votes");
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
