import React, { Component } from "react";

import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import AuthService from "../../services/auth.service";

export default class Users extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const currentUser =  await AuthService.getCurrentUser();
    
    if (currentUser.role.includes('ROLE_ADMIN')) {
      AuthService.getUsers().then(response => {
        this.setState({
                users: response.data.data
            });
      },
      error => {
        this.setState({
            users:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
    }

    if (currentUser.role.includes("ROLE_COORDINADOR")) {
      AuthService.getUsersCo(currentUser.local).then(response => {
        this.setState({
                users: response.data.data
            });
      },
      error => {
        this.setState({
            users:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
    }
    
  }

  
  render() {
    return (
      <div className="card card-container t">
        <div>
          <div className="text-right">
              {/* <a href="/singup" className="btn btn-success">Agregar Usuario</a> */}
            </div>
          <h3>Usuarios</h3>
          
          <br/>
          
        </div>
      <table className="table table-responsive"  aria-label="a dense table">
        <thead>
          <tr>
            <th>Identificacion</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Zona</th>
            <th>Mesa</th>
          </tr>
        </thead>
        <tbody>
            {this.state.users.map((row, index) => (
            <tr key={index}
              scope="row"
            >
              <td>{row.nit}</td>
              <td>{row.name}</td>
              <td>{row.phone}</td>
              <td>{row.username}</td>
              <td>{row.role }</td>
              <td>{row.local }</td>
              <td>{row.table }</td>
            </tr>
          ))}
          
          
        </tbody>
      </table>
      </div>

    );
  }
}