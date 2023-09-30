import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class UtilService {

 
  getLocals() {
    return axios.get(API_URL + "");
  }

}

export default new UtilService();
