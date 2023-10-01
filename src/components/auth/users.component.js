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
      <Table className="table table-responsive"  aria-label="a dense table">
        <Thead>
          <Tr>
            <Th>Identificacion</Th>
            <Th>Nombre</Th>
            <Th>Telefono</Th>
            <Th>Usuario</Th>
            <Th>Rol</Th>
            <Th>Zona</Th>
            <Th>Mesa</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          
          {this.state.users.map((row) => (
            <Tr              key={row._id}
              scope="row"
            >
              <Td>{row.nit}</Td>
              <Td>{row.name}</Td>
              <Td>{row.phone}</Td>
              <Td>{row.username}</Td>
              <Td>{row.role }</Td>
              <Td>{row.local}</Td>
              <Td>{row.table}</Td>
              <Td className="d-flex">
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Eliminar</button>
              </Td>
            </Tr>
          ))}
          
        </Tbody>
      </Table>
      </div>

    );
  }
}