import React from 'react';
import 'font-awesome/css/font-awesome.css'

class List extends React.Component {
render(){
  return(
  <div className="integrationist">
  <ul>
  <li><i className="fa fa-bolt fa-2x" aria-hidden="true"></i>FACEBOOK MESSANGER</li>
  <li><i className="fa fa-bolt fa-2x" aria-hidden="true"></i>SKYPE</li>
  <li><i className="fa fa-bolt fa-2x" aria-hidden="true"></i>SMS(TWILIO)</li>
  <li><i className="fa fa-bolt fa-2x" aria-hidden="true"></i>SMOOCH</li>
  <li><i className="fa fa-bolt fa-2x" aria-hidden="true"></i>ALEXA</li>
  <li><i className="fa fa-bolt fa-2x" aria-hidden="true"></i>LINE</li>
  <li><i className="fa fa-bolt fa-2x" aria-hidden="true"></i>SLACK</li>
  <li><i className="fa fa-bolt fa-2x" aria-hidden="true"></i>TELEGRAM</li>
  </ul>
  </div>
  )}
}

export default class Integrations extends React.Component {
    render() {
    return (<div className="integrationPage">
        <h3>INTEGRATIONS</h3>
         <List />
        </div>);
    }
}
