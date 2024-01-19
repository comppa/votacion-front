import React, {Component} from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import {Bar, Pie} from 'react-chartjs-2';
import FormService from '../../services/form.service';
import UtilService from '../../services/util.service';
import { useState, useEffect } from 'react';
import { render } from '@testing-library/react';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import AuthService from "../../services/auth.service";
import {useNavigate} from 'react-router-dom';





function Graphics() {
  
const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
  datasets: [{  
    axis: 'x',
    label: 'Votos',
    data: [18, 20, 6, 9, 12, 3],
    fill: false,
    backgroundColor: [  
      '#bf00bf',  
      'rgba(54, 162, 235, 0.2)',
      '#ff0000',
      '#0000ff',  
      '#00bfbf',
      '#00bfbf',
      '#00bfbf'
    ],
    borderColor: [
      'rgba(255, 26, 104, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(0, 0, 0, 1)'
    ],
    borderWidth: 1
  }]
};
  
const config = {
  type: 'bar',
  data,
  indexAxis: 'y',
  responsive: true,
  scales: {
    xAxes: {
        max: 8000
    } 
  },
  plugins:{
    datalabels: {
      display: true,
      font: {
        size: 14,
        weight: 'bold',
      },
      color:  (value, context)=>{
              if (value.dataset.data[value.dataIndex] > 1000) {
                return "white";
              }else{
                return "black";
              }
      },
      formatter: (value, context) =>{
        // let total = 0;
        const datapoints = context.dataset.data;
        function totalSum(total, datapoint) {
          return total + datapoint
        }
        const totalValue = datapoints.reduce(totalSum, 0)
        const percentageValue = (value / totalValue * 100).toFixed(1)
        // console.log(percentageValue);
        let display = [`0, 0%`];
        if (value != undefined) {
           display = [`${value}, ${percentageValue}%`];
        }
        return display;
      },
      
      anchor: "end",
      offset: (value, context) =>{
        if (value.dataset.data[value.dataIndex] < 500){
          return -60;
        }

        if (1000 > value.dataset.data[value.dataIndex] > 500) {
          return -30;
        }

        if(value.dataset.data[value.dataIndex] > 1000){
          return 10;
        }
      },
      align: "start"
    },
    legend: {
      display:false,
      position: 'right',
    },
    title: {
      display: true,  
      text: 'Votos Elecciones 2023',
    },
    
  }
};

const dataPie = {
  labels: ['Mesas Escrutadas', 'Mesas Por Escrutar'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const configPie = {
  responsive: true,
  plugins: {
    title: {
      display: true,  
      text: 'Mesas Escrutadas',
    },
    datalabels: {
      display: true,
      font: {
        size: 18,
        weight: 'bold',
      },
      color: 'grey'
    }
  },
};

  const [candidate, setCandidate] = useState([]);
  const [pie, setPie] = useState([]);
  const [scrit, setScrit] = useState([]);
  const [nscrit, setNscrit] = useState([]);
  const navigate = useNavigate();


  //put the setinterval for this and out the request awit from useEffect method
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    // console.log(currentUser);
      FormService.getCandidatesAndVotes().then(response => {
        // console.log(response.data.data);
        setCandidate(response.data.data);
        })
        .catch(error => {
          // Handle errors
        });
        UtilService.getPie().then(response => {
          // console.log(response.data.data);
          setPie(response.data.data);
          })
          .catch(error => {
            // Handle errors
          });
  
        UtilService.getScrti().then(response => {
          // console.log(response.data.data);
          setScrit(response.data.data);
          })
          .catch(error => {
            // Handle errors
          });
  
        UtilService.getNScrti().then(response => {
          console.log(response.data.data);
          setNscrit(response.data.data);
          })
          .catch(error => {
            // Handle errors
          });

  }, []);

  if (candidate.length !== 0) { 
      var can = [];
      var t = [];
      for (let i = 0; i < candidate.length; i++) {
        can[i] = candidate[i].name;
        t[i] = candidate[i].total;
      }
      // console.log(can);
      data.labels = can;
      data.datasets[0].data = t;  
      dataPie.datasets[0].data = pie;
      console.log(scrit);
      console.log(nscrit);
  }
  
    return (
      <div>
      {candidate.length !== 0 ? (
      <div>
      <div className="d-flex">
        <div className="chartBox card col-md-12">
          <div >
            <Bar data={data} plugins={[ChartDataLabels]} options={config}/>
          </div>
        </div>
        <div className=" card col-md-2 custom-heigh pie-grep">
          <div >
            <Pie data={dataPie} plugins={[ChartDataLabels]} options={configPie}/>
          </div>
        </div>
      </div>
        <div className='d-flex'>
          <div className='card card-container col-md-6'>
          <div>
            <h3>Mesas Escrutadas</h3>
          </div>
          <table className="table table-responsive"  aria-label="a dense table">
          <thead>
            <tr>
              <th>Numero de Mesa</th>
              <th>Puesto de Votacion</th>
            </tr>
          </thead>
          <tbody>
            {scrit.map((row) => (
              <tr              key={row._id}
              >
                <td>{row.number}</td>
                <td>{row.local.name}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
        </div>
        <div className='card card-container col-md-6'>
        <div>
          <h3>Mesas por Escrutar</h3>
        </div>
        <table className="table table-responsive"  aria-label="a dense table">
        <thead>
          <tr>
            <th>Numero de Mesa</th>
            <th>Puesto de Votacion</th>
          </tr>
        </thead>
        <tbody>
          {nscrit.map((row) => (
            <tr              key={row._id}
              scope="row"
            >
             <td>{row.number}</td>
             <td>{row.local.name}</td>
            </tr>
          ))}
          
        </tbody>
      </table>
      </div>
        </div>
      </div>
      ) : (
            <div>Loading...</div>
      )}
    </div>

      
    );
  }

  export default Graphics;


