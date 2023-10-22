import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import FormService from "../../services/form.service";
import AuthService from "../../services/auth.service";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import {useNavigate} from 'react-router-dom';


function Vote() {
  

  const [error, setError] = useState('');
  const [voteReady, setVoteReady] = useState(false);
  const [voteFields, setVoteFields] = useState(
    {}
  );
  const [current, setCurrent] = useState({});
  const [total, setTotal] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    getVotes();
  }, []);

const getVotes = async () => {
    const currentUser = await AuthService.getCurrentUser();
    if (!currentUser.role.includes("ROLE_TESTIGO")) {
      navigate("/");
    }
    setCurrent(currentUser);
    FormService.getVote(currentUser.local, currentUser.table).then(
      response => {
        setVoteFields(response.data.data);   
        setVoteReady(true);
      }
    ).catch(err => setError(err.message));

    if (voteReady) {
      function totalSum(total, datapoint) {
        return total + datapoint.cant
      }
      const totalValue = voteFields.reduce(totalSum, 0);
  
      setTotal(totalValue);
    }
  }

  function totalSum(total, datapoint) {
    return total + datapoint.cant
  }

    return (
      <div className="container">
        {(voteReady) ?
       <div className="card card-container t">
        <div>
          <h3>Voto</h3>
        </div>
      <table className="table  table-striped-columns table-responsive votes"  aria-label="a dense table">
        <thead>
          <tr>
            <th>Votos</th>
            <th>Zona</th>
            <th>Mesa</th>
            <th>Total Votos Mesa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        <tr className="votes" scope="row">
         <td className='td-votes'>
         <ul>
         {voteFields.map((row, index) => (
            <li key={index}>
              <span>{row.candidate} </span> <span> VOTOS: {row.cant}</span>
            </li>  
            
          ))}
        </ul>
        </td>
         <td>{current.local}</td>
          <td>{current.table}</td>
          <td>{(total) ? (total) : (voteFields.reduce(totalSum, 0))}</td> 
          <td className="d-flex">
              <a className="btn btn-primary" href="/editvote">Editar</a>
          </td>
        </tr>
        </tbody>
      </table> 
      </div>: null}
      </div>
    )
  }

export default Vote;