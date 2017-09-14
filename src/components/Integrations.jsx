import React from 'react';
import facebook from '../facebook.png';
import Skype from '../Skype.png';
import SMS from '../SMS.png';
import SMOOCH from '../SMOOCH.png';
import ALEXA from '../ALEXA.png';
import LINE from '../LINE.png';
import SLACK from '../SLACK.png';
import TELEGRAM from '../TELEGRAM.png';
import 'font-awesome/css/font-awesome.css'

class List extends React.Component {
render(){
  return(
  <div className="integrationist">
  <ul>
      <li><img src={facebook} className="facebookImg" alt="facebook" />FACEBOOK MESSANGER</li>
      <li><img src={Skype} className="SkypeImg" alt="Skype" />SKYPE</li>
      <li><img src={SMS} className="SMSImg" alt="SMS" />SMS(TWILIO)</li>
      <li><img src={SMOOCH} className="SMOOCHImg" alt="SMOOCH" />SMOOCH</li>
      <li><img src={ALEXA} className="ALEXAImg" alt="ALEXA" />ALEXA</li>
      <li><img src={LINE} className="LINEImg" alt="LINE" />LINE</li>
      <li><img src={SLACK} className="SLACKImg" alt="SLACK" />SLACK</li>
      <li><img src={TELEGRAM} className="TELEGRAMImg" alt="TELEGRAM" />TELEGRAM</li>
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
