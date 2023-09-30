import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class FormService {

  registerVote(votes, table, local) {
    return axios.post(API_URL + "vote", {
      votes, table, local
    });
  }

  getCandidates() {
    return axios.get(API_URL + "candidates");
  }

  getTableByUser(user){
    return axios.get(API_URL + "getbyuser", {
      user
    });
  }
}

export default new FormService();
