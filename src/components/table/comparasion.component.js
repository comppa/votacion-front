import React, { Component } from "react";
import Form from "react-validation/build/form";

// import FormService from "../../services/form.service";
import UtilService from "../../services/util.service";



export default class Comparasion extends Component {
    constructor(props) {
      super(props);
      this.Card = this.Card.bind(this);
  
      this.state = {
        results: [], 
        cleveros: [],
        redirect: null,
        userReady: false,
        currentUser: { username: "" }
      };
    }
  
    componentDidMount() {
      UtilService.getVotes().then(
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

      UtilService.getClaveros().then(
        response => {
          this.setState({
            cleveros: response.data.data
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
  