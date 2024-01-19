import axios from "axios";
import authHeader from './auth-header';

// const API_URL = "https://bello.jpweb.com.co:8080/api/";
// const API_URL = "http://localhost:8080/api/";
// const API_URL = "https://caucasia.jpweb.com.co:8080/api/";
// const API_URL = "https://barbosa.jpweb.com.co:8080/api/";
const API_URL = "https://taraza.jpweb.com.co:8080/api/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "auth/signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  // login(username, password) {

  //   const users = [{_id: "45444545", username: "pedropor", role: "ROLE_ADMIN", accessToken: "TashdfsdRRUYGbjkabRkjJKjka" },
  //                 {_id: "412104121", username: "seitaj", role: "ROLE_TESTIGO", accessToken: "TuigasdiyatTASDHASDSsssss" },
  //                 {_id: "478484589", username: "candidateg", role: "ROLE_CANDIDATE", accessToken: "TasdasTahsdafcCCFklkkkk" },
  //                 {_id: '120121584', username: 'fernad', role:'ROLE_TESTIGO', accessToken: "TuigasdiyatTASDHASDSsssss"},
  //                 {_id: '120041257', username: 'dariogo', role:'ROLE_TESTIGO', accessToken: "TuigasdiyatTASDHASDSsssss"},
  //                 {_id: '102477542', username: 'losinqui', role:'ROLE_TESTIGO', accessToken: "TuigasdiyatTASDHASDSsssss"},
  //                 {_id: '102545445', username: 'kaleth', role:'ROLE_TESTIGO', accessToken: "TuigasdiyatTASDHASDSsssss"}
  //               ];

  //   // console.log(users.find);
  //   const user = users.find((element) => element.username === username);
  //   if (user) {
  //     localStorage.setItem("user", JSON.stringify(user));
  //   }
  //   console.log(user);
  //   return user;      
  // }


  logout() {
    let current = JSON.parse(localStorage.getItem('user'));
      return axios
      .get(API_URL + "auth/logout", {
        params: {
          username: current.username
        }
      })
      .then(response => 
        {localStorage.removeItem("user");
        localStorage.clear();})
      .catch(error => {
          console.error('Error:', error);
      });
  }

  register(nit, name, phone, username, password, local, table, role) {
    return axios.post(API_URL + "auth/signup", {
      nit,
      name,
      phone,
      username,
      password,
      local,
      table,
      role
    });
  }

  getUsers(){
    return axios.get(API_URL + "users");
  }
  getUsersCo(local){
    return axios.get(API_URL + "usersco", {
      params: {
        local: local
      }
    });
  }

  getCurrentUser() {
    let current = JSON.parse(localStorage.getItem('user'));
    try {
      if (!current.sign) {
        localStorage.removeItem("user");
        return;
      }
      if (current) {
        console.log(current);
        return axios
        .get(API_URL + "auth/user", {
          params: {
            username: current.username
          }
        })
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return JSON.parse(localStorage.getItem('user'));
        });
      } 
    } catch (error) {
      localStorage.removeItem("user");
      localStorage.clear();
      return;
    }
    
  }


}

export default new AuthService();
