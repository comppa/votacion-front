import axios from "axios";
import authHeader from './auth-header';

// const API_URL = "https://bello.jpweb.com.co:8080/api/";
const API_URL = "http://localhost:8080/api/";


class FormService {

  registerVote(votes, table, local, total) {
    const vote = {votes: votes, table: table, local: local, total: total};
    localStorage.setItem("vote", JSON.stringify(vote));
    return axios.post(API_URL + "vote", {
      votes, table, local, total
    } , { headers: authHeader() });
    
  }
  assingSend(username) {
    return axios.post(API_URL + "assing", {
        username
    });
  }

  addEscruter(votes, local, table, total, observations, ischecked){
    return axios.post(API_URL +  "addescruter", {
      votes, local, table, total, observations, ischecked
    }) 
  }

  getVote(local, number) {
    // console.log(local, number);
    return axios.get(API_URL + "votes", {
      params: { 
        number: number, 
        local: local
      }
    });
    // console.log(vote);
    // localStorage.setItem("vote", JSON.stringify(vote));
    // return JSON.parse(localStorage.getItem('vote'));;
  }

  editVote(votes, table, local, total, observations, ischecked) {
    const vote = {votes: votes, table: table, local: local, total: total};
    localStorage.setItem("vote", JSON.stringify(vote));
    return axios.put(API_URL + "editvotes", {
      votes, table, local, total, observations, ischecked
    });
  }

  getCandidateTotal(candidate) {
    return axios.get(API_URL + "get-votes", {
      params: {
        candidate: candidate
      }
    });
    // console.log(vote);
    // localStorage.setItem("vote", JSON.stringify(vote));
    // return JSON.parse(localStorage.getItem('vote'));;
  }


  getCandidates() {
    return axios.get(API_URL + "candidates");
  }

  getCandidatesAndVotes() {
    return axios.get(API_URL + "get-votes");
  }
  
  getTableByUser(user){
    return axios.get(API_URL + "getbyuser", {
      user
    });
  }
}

export default new FormService();
