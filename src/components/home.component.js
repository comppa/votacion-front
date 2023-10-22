import React, { Component } from "react";
import image from "../img/home-image.jpg"
import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="">
        <header>
        <div className="col-12 d-flex">
          <div className="col-xs-12 col-sm-10 col-md-7 mt-14 text-home">
              <h2>Blindaje de votos</h2>
              <p>Ingresa con tu usuario y contraseña</p>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-6 text-center mt-7">
            <img  src={image} height="50" className="img-fluid" alt="Logo Campaña" ></img>
          </div>
        </div>
        </header>
      </div>
    );
  }
}
 