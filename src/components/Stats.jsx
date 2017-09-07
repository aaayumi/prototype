import React from 'react';

function Analytics(prop){
    return(
     <div className="analytics">
    <h2>ANALYTICS</h2>
    <ul>
    <li> New Users</li>
    <li> Total Users</li>
    <li> Total Conversations</li>
    <li> Total Messages Sent</li>
    <li> Total Messages Received</li>
    <li> Handover Requests</li>
 </ul>
  </div>
    )
}

function Fallback(prop){
  return(
  <div className="fallback">
<h2>Fallback - NonConfigured</h2>
<ul>
<li> Total Handover Requests</li>
<li> Agents Available</li>
<li> Agents Unavailable</li>
<li> API Calls</li>
 </ul>
  </div>
  )
}


export default class Stats extends React.Component {
    
    render() {
    return (
    <div> 
    <Analytics />
    <Fallback />
    </div>);
    }
}