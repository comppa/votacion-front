import React, {Component} from 'react';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import {Bar, Pie} from 'react-chartjs-2';


const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
  datasets: [{  
    axis: 'y',
    label: 'Votos',
    data: [18, 20, 6, 9, 12, 3, 9, 18, 20, 6, 9, 12, 3, 9],
    fill: false,
    backgroundColor: [  
      'rgba(255, 26, 104, 0.2)',  
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',  
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(0, 0, 0, 0.2)'
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
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,  
      text: 'Votos Elecciones 2023',
    },
  },
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
  },
};
  
export default class Graphics extends Component {
  render() {
    return (
      <div class="d-flex">
        <div class="chartBox card col-md-8">
          <div >
            <Bar data={data} options={config}/>
          </div>
        </div>
        <div class=" card col-md-3 custom-heigh">
          <div >
            <Pie data={dataPie} options={configPie}/>
          </div>
        </div>
      </div>
      
    );
  }
} 

