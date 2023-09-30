import React, { Component } from "react";

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
      <div className="container">
        <header className="jumbotron">
          <div className="center-image">
            <img src="https://piedepagina.mx/wp-content/uploads/2021/03/Va-por-mexico_campesino.jpg" alt="Logo Campaña" ></img>
          </div>
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
 