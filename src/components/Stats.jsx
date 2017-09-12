import React from 'react';
import {Line} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';

const newUserData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
  datasets: [
    {
      label: 'New Users',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30,40,45,50,55,50,60,60,56,58,61,55]
    }
  ]
};

const totalUser = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
  datasets: [
    {
      label: 'New Users',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30,40,45,50,55,50,60,60,56,58,61,55]
    }
  ]
};

const totalConversation = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
  datasets: [
    {
      label: 'New Users',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30,40,45,50,55,50,60,60,56,58,61,55]
    }
  ]
};

const totalMessage = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
  datasets: [
    {
      label: 'New Users',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30,40,45,50,55,50,60,60,56,58,61,55]
    }
  ]
};

const totalMessageReceived = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
  datasets: [
    {
      label: 'New Users',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30,40,45,50,55,50,60,60,56,58,61,55]
    }
  ]
};

const handover= {
  labels: [
    'Question completed',
    'Question incompleted',
    'Handover to human'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};


class Analytics extends React.Component {
  constructor(props){
  super(props);
  this.state ={
  width: 200,
  height: 100
  }
  }

  render(){
  return(<div className="analytics">
    <h2 className="analyticsTitle">ANALYTICS</h2>
     <ul>
        <li> <div className="newData">
    <Line id="newUserData" data ={newUserData} height={this.state.height} width={this.state.width} />
    </div></li>
        <li> <div className="newData">
    <Line id="newUserData" data ={totalUser} height={this.state.height} width={this.state.width} />
    </div></li>
        <li><div className="newData">
    <Line id="newUserData" data ={totalConversation} height={this.state.height} width={this.state.width} />
    </div></li>
        <li> <div className="newData">
    <Line id="newUserData" data ={totalMessage} height={this.state.height} width={this.state.width} />
    </div></li>
        <li> <div className="newData">
    <Line id="newUserData" data ={totalMessageReceived} height={this.state.height} width={this.state.width} />
    </div></li>
        <li>   <Pie data={handover} /></li>
     </ul>
          </div>
    )
  }
}


function Fallback(prop){
  return( <div className="fallback">
  <h2 className="fallbackTitle">Fallback - NonConfigured</h2>
  <ul>
      <li> Total Handover Requests</li>
      <li> Agents Available</li>
      <li> Agents Unavailable</li>
      <li> API Calls</li>
  </ul>
  </div>
  )
}

function TwylaBotButton(props){
    return(<button className="TwylaBotButton">Download TwylaBot Transcripts</button>);
}


export default class Stats extends React.Component {
    render() {
    return (<div className="Stats"> 
    <Analytics />
    <Fallback />
    <TwylaBotButton />
    </div>);
    }
}