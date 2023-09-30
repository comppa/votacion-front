import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useState } from "react";
import AuthService from "../../services/auth.service";
import UtilService from "../../services/util.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is requ ired!
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vname = value => {
  if (value.length < 3 || value.length > 30) {
    return (
      <div className="alert alert-danger" role="alert">
        El nombre debe estar entre 3 y 30 caracteres.
      </div>
    );
  }
};

const vnit = value => {
  if (value.length < 7 || value.length > 14) {
    return (
      <div className="alert alert-danger" role="alert">
        El nit debe estar entre 7 y 14 numeros.
      </div>
    );
  }
};



const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};




export default class Register extends Component {
  
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNit = this.onChangeNit.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeTable = this.onChangeTable.bind(this);
    this.onChangeLocal = this.onChangeLocal.bind(this);
    
    this.state = {
      nit: "",
      name: "",      
      username: "",
      phone: "",
      role: "",
      locals: ["Zona 0", "Zona 1", "Zona 2", "Zona 3", "Zona $"],
      local: "",
      tables:  [0],
      table: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  componentDidMount(){
    // UtilService.getLocals()
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
  
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeLocal(e) {
    this.setState({
      local: e.target.value
    })

    if (this.state.local === "") {
      this.setState({
        tables: []
      });
    }

    if (this.state.local === "Zona 0") {
      this.setState({
        tables: [1,2,4,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      });
    }
    if (this.state.local === "Zona 1") {
      this.setState({
        tables: [1,2,4,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      });
    }
    if(this.state.local == "Zona 2"  || this.state.local == "Zona 3" || this.state.local == "Zona $"){
      this.setState({
        tables: [1,2,4,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
      });
    }
  }
  onChangeTable(e) {
    this.setState({
      table: e.target.value
    });
  }

  onChangeNit(e) {
    this.setState({
      nit: e.target.value
    });
  }


  onChangeRole(e){
    this.setState({
      role: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    // if (this.checkBtn.context._errors.length === 0) {
    //   AuthService.register(
    //     this.state.username,
    //     this.state.password
    //   ).then(
    //     response => {
    //       this.setState({
    //         message: response.data.message,
    //         successful: true
    //       });
    //     },
    //     error => {
    //       const resMessage =
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString();

    //       this.setState({
    //         successful: false,
    //         message: resMessage
    //       });
    //     }
    //   );
    // }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
              <div className="form-group">
                  <label htmlFor="username">Cedula</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="nit"
                    value={this.state.nit}
                    onChange={this.onChangeNit}
                    validations={[required, vnit]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Nombre</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    validations={[required, vname]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Telefono</label>
                  <Input
                    type="number"
                    className="form-control"
                    name="name"
                    value={this.state.phone}
                    onChange={this.onChangePhone}
                    validations={[required, vname]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Usuario</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Contraseña</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                <label htmlFor="role">Escoge un rol: </label>
                  <select className="form-control" name="role" id="role" value={this.state.role}  onChange={this.onChangeRole}>
                    <option  value="admin">Administrador</option>
                    <option  value="testigo">Testigo</option>
                    <option  value="candidato">Candidato</option>
                    <option  value="coordinador">Coordinador</option>
                    <option  value="escrutador">Escrutador</option>
                  </select>
                  
                </div>

                { this.state.role == "testigo" && (
                  <div>
                  <div className="form-group">
                    <label htmlFor="local">Zona Asignada</label>
                    <select className="form-control" name="local" value={this.state.local} onChange={this.onChangeLocal}>
                         <option  value=""></option>
                        {this.state.locals.map((local, index)=> {
                          return(
                            <option  value={local}>{local}</option>
                          )
                          })
                        }
                    </select>

                  </div>
                  <div className="form-group">
                    <label htmlFor="table">Número de Mesa</label>
                    <select className="form-control" name="local" value={this.state.table} onChange={this.onChangeTable}>
                        {this.state.tables.map((table, index)=> {
                          return(
                            <option  value={table}>{table}</option>
                          )
                          })
                        }
                    </select>
                  </div>
                </div>
                )}

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Registrarse</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
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
