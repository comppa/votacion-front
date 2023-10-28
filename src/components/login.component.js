import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import image from '../img/ava6.webp';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import { withRouter } from '../common/with-router';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        Este campo es obligatorio
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      username: "",
      password: "",
      success: false,
      message: "",
      type: 'password',
      icon: eyeOff
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleToggle(e) {
    if (this.state.type==='password'){
      this.setState({
        icon: eye,
        type: 'text'
      });
    } else {
      this.setState({
        icon: eyeOff,
        type: 'password'
      });
    }
 }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      success: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.router.navigate("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            success: false,
            message: resMessage
          });
        }
      );
      // AuthService.login(this.state.username, this.state.password);
      // this.props.router.navigate("/profile");
      // window.location.reload();
    } else {
      this.setState({
        success: false
      });
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src={image}
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Usuario</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <Input
                type={this.state.type}
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
                
              />
              <span class="d-flex justify-right items-center" onClick={this.handleToggle}>
                  <Icon class="absolute mb-4 mr-2" icon={this.state.icon} size={25}/>
              </span>
            </div>

            <div className="form-group">
              <button
                className="btn btn-block btn-grad  "
                disabled={this.state.success}
              >
                {this.state.success && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Ingresar</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
