import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./css/style.css";
import Logo from './newlogo.png';

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/auth/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import RegisterVote from "./components/vote/register-vote.component";
import Users from "./components/auth/users.component";
import Graphics from "./components/chart/graphics.component";
import Tables from "./components/table/table.component";
import Vote from "./components/vote/vote.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.role.includes("ROLE_CANDIDATE"),
        showTestigoBoard: user.role.includes("ROLE_TESTIGO"),
        showAdminBoard: user.role.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showTestigoBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showTestigoBoard, showAdminBoard } = this.state;

    return (
      <div>
    
     {currentUser ? (
      <div>
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
          <div className="position-sticky">

              <div className="list-group list-group-flush mx-3 mt-4">
                {showAdminBoard && (
                  <li className="list-group-item list-group-item-action py-2 ripple">
                    <Link to={"/graphics"} className="list-group-item list-group-item-action py-2 border0 ripple" aria-current="true">
                     <i className="fas fa-tachometer-alt fa-fw me-3"></i> <span>Votacion</span>
                    </Link>
                    <Link to={"/Tables"} className="list-group-item list-group-item-action border0 py-2 ripple">
                    <i className="fas fa-tachometer-alt fa-fw me-3"></i><span> Mesas</span>
                    </Link>
                    <a href="/users" className="list-group-item list-group-item-action border0 py-2 ripple"><i
                    className="fas fa-users fa-fw me-3"></i><span>Usuiarios</span></a>
                  </li>
                )}
                {showModeratorBoard && (
                  <li className="list-group-item list-group-item-action py-2 ripple">
                    <Link to={"/graphics"} className="list-group-item list-group-item-action py-2 border0 ripple" aria-current="true">
                     <i className="fas fa-tachometer-alt fa-fw me-3"></i> <span>Votacion</span>
                    </Link>
                  </li>
                  
                )}
                {showTestigoBoard && (
                  <div>
                    <a href="/addvote" className="list-group-item list-group-item-action py-2 border  0 ripple">
                    <i className="fas fa-chart-area fa-fw me-3"></i><span> Agregar Voto</span></a>
                  </div>
                )}

                {/* <li className="nav-item has-submenu">
                  <a className="nav-link" href="#"> Submenu links</a>
                  <ul className="submenu collapse">
                    <li><a className="nav-link" href="#">Submenu item 1 </a></li>
                    <li><a className="nav-link" href="#">Submenu item 2 </a></li>
                    <li><a className="nav-link" href="#">Submenu item 3 </a></li>
                  </ul>
                </li>
                <li className="nav-item has-submenu">
                  <a className="nav-link" href="#">More menus</a>
                  <ul className="submenu collapse">
                    <li><a className="nav-link" href="#">Submenu item 4 </a></li>
                    <li><a className="nav-link" href="#">Submenu item 5 </a></li>
                    <li><a className="nav-link" href="#">Submenu item 6 </a></li>
                    <li><a className="nav-link" href="#">Submenu item 7 </a></li>
                  </ul>
                </li> */}
                {/* <a className="dropdown ">
                  <a className=" dropdown-toggle hidden-arrow list-group-item list-group-item-action py-2 ripple" href="#" id="navbarDropdownMenuLink"
                    data-mdb-toggle="dropdown" aria-expanded="true"> <i className="fas fa-building fa-fw me-3"></i><span>Gobernacion</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenu">
                    <li>
                      <a className="dropdown-item" href="#">Testigos</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Escrutinio</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Resultados</a>
                    </li>
                  </ul>
                </a> */}
                {/* <a className="dropdown ">
                  <a className=" dropdown-toggle hidden-arrow list-group-item list-group-item-action py-2 ripple" href="#" id="navbarDropdownMenuLink"
                    data-mdb-toggle="dropdown" aria-expanded="false"> <i className="fas fa-building fa-fw me-3"></i><span>Asamblea</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="#">Testigos</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Escrutinio</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Resultados</a>
                    </li>
                  </ul>
                </a> */}
               
                  
                {/* <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                    className="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                    className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                  <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                    className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                    className="fas fa-globe fa-fw me-3"></i><span>International</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                    className="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                    className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
                <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
                    className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a> */}
              </div>
          </div>
        </nav>

        <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
         <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>

          <a className="navbar-brand" href="/">
            <img src={Logo} height="50" alt="Logo"
              loading="lazy" />
          </a>
          
          <ul className="navbar-nav ms-auto d-flex flex-row">
            {/* <li className="nav-item dropdown">
              <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
                role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">Some news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Another news</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li> */}
            <div className="user-options d-flex">
              <a href="/" className="line-logout" onClick={this.logOut}>
                <i className="fas fa-sign-out fa-fw me-1"></i><span>Salir</span>
                </a>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="/"
                  id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp" height="30" alt="Logo"
                  loading="lazy" fluid />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                  <Link to={"/profile"} className="dropdown-item">
                    {currentUser.username}
                   </Link>
                  </li>
                </ul>
              </li>
            </div>

            </ul>
          
        
         </div>
        </nav>
        </div>
        ) : (
          <div>
            <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top" >
              <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={Logo} width="50" alt="Logo"
                  loading="lazy" fluid />
              </a>
                <ul className="navbar-nav ms-auto d-flex flex-row">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      <i className="fas fa-sign-in fa-fw me-1"></i><span>Ingresar</span>
                    </Link>
                  </li>
                </ul>
              </div>
           </nav>
          </div>
          )}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Graphics />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/singup" element={<Register />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/addvote" element={<RegisterVote />} /> 
            <Route path="/users" element={<Users />} />
            <Route path="/graphics" element={<Graphics />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/vote" element={<Vote />} />

          </Routes>
        </div>
      </div>

    );
  }
}

export default App;

