import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import FormService from "../../services/form.service";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

export default class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vote: {},
      voteReady: false,
      redirect: null
    };
  }

  componentDidMount() {
    const vote = FormService.getVote();
    console.log(vote);
    if (!vote) this.setState({ redirect: "/" });
    this.setState({ vote: vote, voteReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { vote } = this.state;

    return (
      <div className="container">
        {(this.state.voteReady) ?
       <div className="card card-container t">
        <div>
          <h3>Voto</h3>
        </div>
      <table className="table table-responsive"  aria-label="a dense table">
        <thead>
          <tr>
            <th>Votos</th>
            <th>Zona</th>
            <th>Mesa</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        <tr scope="row">
         <td>
         {this.state.vote.votes.map((row) => (
            <ul>
              <li>
                <span> candidato: {row.name} cantidad: {row.cant} </span>
              </li>  
            </ul>
          ))}
        </td>
          <td>{this.state.vote.local}</td>
          <td>{this.state.vote.table}</td>
          <td>{this.state.vote.total}</td>
          <td className="d-flex">
              <button className="btn btn-primary">Editar</button>
          </td>
        </tr>
        </tbody>
      </table> 
      </div>: null}
      </div>
    );
  }
}
