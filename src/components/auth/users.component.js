import React, { Component } from "react";


import AuthService from "../../services/auth.service";

export default class Users extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }


  componentDidMount() {
    // AuthService.getUsers().then(response => {
    //     this.setState({
    //             users: response.data.data
    //         });
    //   },
    //   error => {
    //     this.setState({
    //         users:
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString()
    //     });
    //   }
    // );
    // console.log(this.state.users);
        this.setState({
                users: [{nit: '102547485', name:'Juan Mejia', phone:'3201144455', username: 'seitaj', role:'testigo', local: 'La Me', table: "1"},
                        {nit: '102458778', name:'Pedro Portela', phone:'3255658457', username: 'pedropor', role:'admin', local: '', table: ""},
                        {nit: '157858444', name:'Candidato 2', phone:'3269874522', username: 'candidateg', role:'candidate', local: '', table: ""},
                        {nit: '120121584', name:'Fernando Mre', phone:'3201144455', username: 'fernad', role:'testigo', local: 'La Me', table: "2"},
                        {nit: '120041257', name:'Dario Gomez', phone:'3204445454', username: 'dariogo', role:'testigo', local: 'La re', table: "1"},
                        {nit: '102477542', name:'Los inquietos', phone:'3247451211', username: 'losinqui', role:'testigo', local: 'La re', table: "2"},
                        {nit: '102545445', name:'Kaleth Morales', phone:'3204589865', username: 'kaleth', role:'testigo', local: 'La Me', table: "2"}]
            });
  }

  
  render() {
    return (
      <div className="card card-container t">
        <div>
          <div className="text-right">
              <a href="/singup" className="btn btn-success">Agregar Usuario</a>
            </div>
          <h3>Usuarios</h3>
          
          <br/>
          
        </div>
      <table className="table"  aria-label="a dense table">
        <thead>
          <tr>
            <th>Identificacion</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Zona</th>
            <th>Mesa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          
          {this.state.users.map((row) => (
            <tr
              key={row._id}
              scope="row"
            >
              <td>{row.nit}</td>
              <td>{row.name}</td>
              <td>{row.phone}</td>
              <td>{row.username}</td>
              <td>{row.role }</td>
              <td>{row.local}</td>
              <td>{row.table}</td>
              <td className="d-flex">
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
      </div>

    );
  }
}