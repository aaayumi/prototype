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
      backgroundColor: 'rgba(177, 58, 201,0.4)',
      borderColor: 'rgba(177, 58, 201,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(109, 28, 125,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(177, 58, 201,1)',
      pointHoverBorderColor: 'rgba(109, 28, 125,1)',
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
      label: 'Total User',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(177, 58, 201,0.4)',
      borderColor: 'rgba(177, 58, 201,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(109, 28, 125,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(177, 58, 201,1)',
      pointHoverBorderColor: 'rgba(109, 28, 125,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [300,340,400,450,500,560,600,650,700,750,800,900]
    }
  ]
};

const totalConversation = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
  datasets: [
    {
      label: 'Total Conversation',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(177, 58, 201,0.4)',
      borderColor: 'rgba(177, 58, 201,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(109, 28, 125,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(177, 58, 201,1)',
      pointHoverBorderColor: 'rgba(109, 28, 125,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30,60,65,70,80,90,95,100,103,105,110,112]
    }
  ]
};

const totalMessage = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
  datasets: [
    {
      label: 'Total Message Sent',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(177, 58, 201,0.4)',
      borderColor: 'rgba(177, 58, 201,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(109, 28, 125,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(177, 58, 201,1)',
      pointHoverBorderColor: 'rgba(109, 28, 125,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [50,70,90,100,120,130,140,160,186,200,210,300]
    }
  ]
};

const totalMessageReceived = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
  datasets: [
    {
      label: 'Total Message Received',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(177, 58, 201,0.4)',
      borderColor: 'rgba(177, 58, 201,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(109, 28, 125,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(177, 58, 201,1)',
      pointHoverBorderColor: 'rgba(109, 28, 125,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [102,100,130,134,110,100,111,123,120,125,130,123]
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
    '#B13AC9',
    '#33B86F',
    '#F4EB32'
    ],
    hoverBackgroundColor: [
    '#B13AC9',
    '#33B86F',
    '#F4EB32'
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
     <ul className="dataList">
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
  <ul className="fallbackList">
      <li> Total Handover Requests  0</li>
      <li> Agents Available 0</li>
      <li> Agents Unavailable 10</li>
      <li> API Calls 10</li>
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