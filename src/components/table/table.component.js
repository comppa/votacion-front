import React, { Component } from "react";
import Form from "react-validation/build/form";

import FormService from "../../services/form.service";



export default class Tables extends Component {
    constructor(props) {
      super(props);
      this.Card = this.Card.bind(this);
  
      this.state = {
        redirect: null,
        userReady: false,
        currentUser: { username: "" }
      };
    }
  
    componentDidMount() {

    }


    Card(props) {
      return (
        <div className="card">
          <div className="card__body">
            <h2 className="card__title">{props.title}</h2>
              <div className="d-flex">
                <p className="col-10 card__description">{props.vote1}</p>
                <h3 className="card__price">{props.cant1}</h3>
              </div>
              <div className="d-flex">
                <p className="col-10 card__description">{props.vote2}</p>
                <h3 className="card__price">{props.cant2}</h3>
              </div>
              <div className="d-flex">
                <p className="col-10 card__description">{props.vote3}</p>
                <h3 className="card__price">{props.cant3}</h3>
              </div>
              <div className="d-flex">
                <p className="col-10 card__description">{props.vote4}</p>
                <h2 className="card__price">{props.cant4}</h2>
              </div>
          </div>
        </div>
      )
    }
  
    render() {
  
      return (
        <div className="">
          <div>
          <h2> Barrio Lorem impsum </h2>
          <div className="wrapper">
      <this.Card
        title="MESA 1"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 2"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 3"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 4"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 5"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
    
      </div>
    </div>
    <div>
          <h2> Barrio Lorem impsum </h2>
          <div className="wrapper">
      <this.Card
        title="MESA 1"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 2"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 3"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 4"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 5"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />

    <this.Card
        title="MESA 6"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
      <this.Card
        title="MESA 7"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
    
      </div>
    </div>
    <div>
          <h2> Barrio Lorem impsum </h2>
          <div className="wrapper">
      <this.Card
        title="MESA 1"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 2"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 3"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 4"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 5"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />

    <this.Card
        title="MESA 6"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />

    <this.Card
        title="MESA 7"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
    
      </div>
    </div>
    <div>
          <h2> Barrio Lorem impsum </h2>
          <div className="wrapper">
      <this.Card
        title="MESA 1"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 2"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 3"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
       <this.Card
        title="MESA 4"
        vote1=  "Shawshank Redemtion"
        cant1 = "10"
        vote2 = 'Dario Gomez'
        cant2 = "2"
        vote3 = "Luis Alberto Posada"
        cant3 = "12"
        vote4 = "Vicente Fernandez"
        cant4 = "10"
      />
    
      </div>
    </div>
        </div>
      );
    }
  }
  