import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import FormService from "../../services/form.service";
import AuthService from "../../services/auth.service";




function RegisterVote() {
  const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  const [voteFields, setVoteFields] = useState([
    {}
  ]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState({
  });

  const [table, setTable] = useState({});
  const [total, setTotal] = useState();
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

  const handleChange = evt => {
    const total = evt.target.value;
    // setTotal(total)
  }

  useEffect(() => {
      getAllCandidates();
  }, []);

  const getAllCandidates = () => {
    // FormService.getCandidates().then(response =>{ 
    //   const candidas = response.data.data;
    //   setVoteFields(candidas);
    // }).catch(err => setError(err.message));

    // const currentUser = AuthService.getCurrentUser();

    // FormService.getTableByUser(currentUser.id).then(response =>{ 
    //   setTable(response.data);
    // }).catch(err => setError(err.message));

      const candidas = [{name: "Dario Gomez"}, {name: "Vicente Fernandez"}, {name: "Pepito Perez"}, {name: "Peso Pluma"}, {name: "El Charrito Negro"}, {name: "Voto en Blanco"}, {name: "Voto Nulo"}];
      const users = [{nit: '102547485', name:'Juan Mejia', phone:'3201144455', username: 'seitaj', role:'testigo', local: 'La Me', table: "1"},
                    {nit: '102458778', name:'Pedro Portela', phone:'3255658457', username: 'pedropor', role:'admin', local: '', table: ""},
                    {nit: '157858444', name:'Candidato 2', phone:'3269874522', username: 'candidateg', role:'candidate', local: '', table: ""},
                    {nit: '120121584', name:'Fernando Mre', phone:'3201144455', username: 'fernad', role:'testigo', local: 'La Me', table: "2"},
                    {nit: '120041257', name:'Dario Gomez', phone:'3204445454', username: 'dariogo', role:'testigo', local: 'La re', table: "1"},
                    {nit: '102477542', name:'Los inquietos', phone:'3247451211', username: 'losinqui', role:'testigo', local: 'La re', table: "2"},
                    {nit: '102545445', name:'Kaleth Morales', phone:'3204589865', username: 'kaleth', role:'testigo', local: 'La Me', table: "2"}];
      const currentUser = AuthService.getCurrentUser();
      const user = users.find((element) => element.username === currentUser.username);
      const t = {local: user.local, number: user.table};
      setTable(t);
      setVoteFields(candidas);
  }

  const navigate = useNavigate();

  const registerVote = (e) => {
    e.preventDefault();
    
    console.log(voteFields);
    // FormService.registerVote(
    //   voteFields, table.number, table.local, total
    // ).then(
    //   response => {
    //     setMessage({
    //       message: response.data.message,
    //       successful: true
    //     });
    //   }).catch(error => setError(error.message));
    FormService.registerVote(voteFields, table.number, table.local, total);
    navigate("/vote");
    window.location.reload();    
  }


  return (
    <div className="col-md-12">
      <div className="card card-container">
         <div className="title">
          <h2>Ingresar Votos Mesa {table.number}</h2>
            <p>{table.local}</p>
         </div>
         
          <Form>
          {message.successful && <p className="text-danger">{message.message}</p>}
          {error && <p className="text-danger">{error}</p>}
            {voteFields.map((input, index) => {
              return (
                <div key={index}>
                  <div className="form-group d-flex">
                    <Input
                      name='name'
                      className="form-control vote"
                      placeholder={input.name}
                      value={input.name}
                      onChange={event => handleFormChange(index, event)}
                      validations={[required]}
                    />
                    <Input
                      type="number"
                      name='cant'
                      className="form-control"
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
            <div className="form-group d-flex float-right">
              <label htmlFor="total" className="mr-3">Total: <span className="span-total">{total}</span></label>

            </div>
            
        <button className="btn btn-primary btn-block" onClick={registerVote}>Enviar</button>
      </Form>
      </div>
    </div>
  );
}

export default RegisterVote;



// export default class RegisterVote extends Component {
    
  
//     constructor(props) {
//       super(props);
//       this.handleRegisterVote = this.handleRegisterVote.bind(this);
//       this.onChangeNumber = this.onChangeNumber.bind(this);
      
//       this.state = {
//         candidates: [],
//         username: "",
//         cant: 0,
//         successful: false,
//         message: ""
//       };
    
//     }

    
//     componentDidMount(){
//       FormService.getCandidates().then(response =>{
//         this.setState ({
//           candidates: response.data.data
//         });
//       },
//         error => {
//           this.setState({
//             candidates:
//               (error.response &&
//                 error.response.data &&
//                 error.response.data.message) ||
//               error.message ||
//               error.toString()
//           });
//         }
//       );
//       const [voteFields, setVoteFields] = useState([
//         { candidate: '' , cant: 0 }
//       ]);
      

//     }


//     onChangeNumber(e) {
//       this.setState({
//         votes: e.target.value
//       });
//     }

  
//     handleRegisterVote(e) {
//       e.preventDefault();
  
//       this.setState({
//         message: "",
//         successful: false
//       });


  
//       this.form.validateAll();

//       console.log(this.state.votes);
  
//       if (this.checkBtn.context._errors.length === 0) {
//         // AuthService.register(
//         //   this.state.username,
//         //   this.state.password
//         // ).then(
//         //   response => {
//         //     this.setState({
//         //       message: response.data.message,
//         //       successful: true
//         //     });
//         //   },
//         //   error => {
//         //     const resMessage =
//         //       (error.response &&
//         //         error.response.data &&
//         //         error.response.data.message) ||
//         //       error.message ||
//         //       error.toString();
  
//         //     this.setState({
//         //       successful: false,
//         //       message: resMessage
//         //     });
//         //   }
//         // );
//       }
//     }

    
  
//     render() {
//       return (
//         <div className="col-md-12">
//           <div className="card card-container">
//           <div className="title">
//            <h2>Ingresar Votos</h2>
//           </div>
            
//             <Form
//               onSubmit={this.handleRegisterVote}
//               ref={c => {
//                 this.form = c;
//               }}
//             >
//               {!this.state.successful && (
//                 <div>
//                 {this.state.candidates.map((candidate, index) =>(
//                   <div key={index}> 
//                     <div className="form-group d-flex">
//                       <label className="col-md-10 vote" htmlFor={candidate.name}>{candidate.name}</label>
                      
//                       <Input
//                         type="number"
//                         className="form-control "
//                         name="cant"
//                         value={this.state.votes[index]}
//                         onChange={this.onChangeNumber}
//                         validations={[required]}
//                       />
//                     </div>   
//                   </div>
//                    ))

//                   }
  
//                   <div className="form-group">
//                     <button className="btn btn-primary btn-block">ENVIAR</button>
//                   </div>
//                 </div>
//               )}
  
//               {this.state.message && (
//                 <div className="form-group">
//                   <div
//                     className={
//                       this.state.successful
//                         ? "alert alert-success"
//                         : "alert alert-danger"
//                     }
//                     role="alert"
//                   >
//                     {this.state.message}
//                   </div>
//                 </div>
//               )}
//               <CheckButton
//                 style={{ display: "none" }}
//                 ref={c => {
//                   this.checkBtn = c;
//                 }}
//               />
//             </Form>
//           </div>
//         </div>
//       );
//     }
//   }
  