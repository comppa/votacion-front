import React, { Component } from "react";
import image from "../persona.jpg"
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
        <header>
          <div className="box">
            <img src={image} alt="Logo Campaña" ></img>
          </div>
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
 