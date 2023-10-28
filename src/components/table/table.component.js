import React, { Component } from "react";
import Form from "react-validation/build/form";

import { Navigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

// import FormService from "../../services/form.service";
import UtilService from "../../services/util.service";
import {useNavigate} from 'react-router-dom';




export default class Tables extends Component {
    constructor(props) {
      super(props);
      this.Card = this.Card.bind(this);
  
      this.state = {
        results: [], 
        redirect: null,
        userReady: false,
        currentUser: { username: "" }
      };
    }
  
    async componentDidMount() {
    const currentUser = await AuthService.getCurrentUser();
    try {
      UtilService.getVotes(currentUser.username).then(
        response => {
          this.setState({
            results: response.data.data
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
    } catch (error) {
      <Navigate to="/"/>
    }
      
      // console.log(this.state.locals);
    }


    Card(props) {
      return (
        <div className="card t">
          <div className="card__body">
            <h2 className="card__title">{props.title}</h2>
            {props.votes ? (
            <div>
            {props.votes.map((vote, index) => (
              <div key={index}>
                <div className="d-flex">
                  <p className="col-10 card__description">{vote.candidate}</p>
                  <h3 className="card__price">{vote.cant}</h3>
                </div>
              </div>
              ))}
              <div className="d-flex">
                  <p className="col-10 card__description">TOTAL</p>
                  <h3 className="card__price">{(props.votes.reduce( function totalSum(total, datapoint) {
        return total + datapoint.cant
      }, 0))}</h3>
                </div>
            </div>
            ): (
              <div className="d-flex">
                <p className="col-10 card__description"> aún no hay votos, espera a que cargue</p>
              </div>
            ) }
          </div>
        </div>
      )
    }
  
    render() {
      function totalSum(total, datapoint) {
        return total + datapoint.cant
      }
      if (this.state.results) {
        console.log(this.state.results);
      }

      const {results}= this.state 
  
      return (
        <div className="t-reponsive">
        {results.map((local, index) => (
            <div key={index}>
            <h2> {local.local}</h2>
              <div className="wrapper t">
              {local.tables.sort((a, b) => a.number - b.number).map((table, jindex) => (
                  <this.Card
                      title= {"MESA " + table.number}
                      votes= {table.votes}
                      total={table.tvotes}
                    />
                ))}
              </div>    
            </div>
          ))}
          <div>
          
    
    
      </div>
    </div>
      );
    }
  }
  