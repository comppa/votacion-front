import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import FormService from "../../services/form.service";
import AuthService from "../../services/auth.service";


function EditVote() {

  const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Ingrese un voto!
        </div>
      );
    }
  };
  const requiredO = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          Ingrese el porque edito el voto!
        </div>
      );
    }
  };
  const [voteFields, setVoteFields] = useState([
    {}
  ]);
  const [error, setError] = useState('');
  const [voteReady, setVoteReady] = useState(false);
  const [observations, setObservations] = useState('');
  const [message, setMessage] = useState({
  });
  const [isChecked, setIsChecked] = useState(false);

  const [table, setTable] = useState({});
  const [usera, setUsera] = useState(false);
  const [total, setTotal] = useState();


  const navigate = useNavigate();
  const handleFormChange = (index, event) => {
    let data = [...voteFields];
    data[index][event.target.name] = event.target.value;
    var sum = 0;
    let inputs = document.querySelectorAll('[name^="cant"]');
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value !== "") {
        sum = sum + parseFloat(inputs[i].value);
      }
    }
    setVoteFields(data);
    setTotal(sum);
  };

  const handleObservationsChange = (event) => {
    const  data = event.target.value;
    setObservations(data);
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = evt => {
    const total = evt.target.value;
    // setTotal(total)
  }

  useEffect(() => {
      getCVotes();
  }, []);

  const getCVotes = async () => {
    const currentUser = await AuthService.getCurrentUser();
    if (!currentUser.role.includes("ROLE_TESTIGO")) {
      navigate("/");
    }
    setUsera(currentUser);
    await FormService.getVote(currentUser.local, currentUser.table).then(
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
    console.log(usera);
    const t = {local: currentUser.local, number: currentUser.table};
    setTable(t);
      
      // setVoteFields(candidas);
  }

  const EditVote = async (e) => {
    e.preventDefault();
    
    // console.log(voteFields);
    FormService.editVote(
      voteFields, table.number, table.local, total, observations, isChecked
    ).then(
      response => {
        setMessage({
          message: response.data.message,
          successful: true
        });
      }
      ).catch(error => setError(error.message));
    if (message.successful) {
       FormService.assingSend(true);

    }
    navigate("/vote");
  }
  
  function totalSum(total, datapoint) {
    return total + datapoint.cant
  }

  return (
    <div className="col-md-12">
      <div className="card card-container">
         <div className="title">
          <h2>Ingresar Votos Mesa {table.number}</h2>
            <p>{table.local}</p>
         </div>
         <div className="col-md-12 d-flex hidden-sm">
            <h5 className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">Candidato</h5>
            <h5 className="col-xs-6 col-sm-6 col-md-6 col-lg-6">Votos</h5>
         </div>
         {(
          <Form>
          {message.successful && <p className="text-danger">{message.message}</p>}
          {error && <p className="text-danger">{error}</p>}
            {voteFields.map((input, index) => {
              return (
                <div key={index}>
                  <div className="form-group d-flex">
                  <label className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                  {input.candidate}
                  </label>
                    <Input
                      name='name'
                      className="form-control vote hidden"
                      placeholder={input.candidate}
                      value={input.candidate}
                      onChange={event => handleFormChange(index, event)}
                      validations={[required]}
                    />
                    <Input
                      type="number"
                      name='cant'
                      className="form-control col-xs-12 col-sm-12 col-md-12 col-lg-12"
                      placeholder='Cantidad'
                      value={input.cant}
                      onChange={event => handleFormChange(index, event)}
                      validations={[required]}
                    />
                  </div>
                </div>

              )
            })
            }
            <div className="form-group">
              <label htmlFor="name">Observaciones</label>
              <Input
                type="text"
                className="form-control"
                name="observaciones"
                value={observations}
                onChange={event => handleObservationsChange(event)}
                validations={[requiredO]}
              />
            </div>
            <div className="form-group">
              <input
                className="mr-1"
                type="checkbox"
                id="topping"
                name="topping"
                value="isChecked"
                checked={isChecked}
                onChange={handleOnChange}
              />
              Hubo reconteo
            </div>
            <div className="form-group d-flex float-right">
              <label htmlFor="total" className="mr-3">Total Votos Mesa: <span className="span-total">{total}</span></label>

            </div>
            
        <button className="btn btn-primary btn-block" onClick={EditVote}>Editar</button>
      </Form>
         )}
          
      </div>
    </div>
  );
}

export default EditVote;