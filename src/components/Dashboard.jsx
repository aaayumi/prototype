import React from 'react';
import Integrations from './Integrations';
import Bots from './Bots';
import Stats from './Stats';
import twyla from '../twyla-logo.png';
import client from '../client.png';
import lighting from '../lighting-white.png';
import analytics from '../analytics-white.png';

import 'font-awesome/css/font-awesome.css';

const components = {
    integrations: Integrations,
    bots: Bots,
    stats: Stats
}

function Logo(props){
  return(<div className="navbar-brand"> <img src={twyla} className="twylaImg" alt="twyla" /></div>);
}

function User(props){
  return(<div className="tenantName"><img src={client} className="clientImg" alt="client" />DPD TwylaBot Demo</div>);
}

function NavBar(props) {
   return (<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
        <ul className="navbar-nav mr-auto">
             <li className={"nav-item" + (props.active == "bots" ? " active" : "")}>
             <a className="nav-link" onClick={props.onChatbots}><i className="fa fa-comments fa-1x menuImg" aria-hidden="true"></i></a>
             </li>
             <li className={"nav-item" + (props.active == "stats" ? " active" : "")}>
             <a className="nav-link" onClick={props.onStats}><img src={analytics} className="analythicsImg" alt="analytics" /></a>
             </li>
             <li className={"nav-item" + (props.active === "integrations" ? " active" : "")}>
             <a className="nav-link" onClick={props.onIntegrations}><i className="fa fa-bolt fa-1x lightingImg" aria-hidden="true"></i></a>
             </li>
        </ul>
          </nav>);
}

export default class Dashboard extends React.Component {

    constructor(props) {
    super(props);
    this.state = { tab: 'bots' };
    this.onChatbots = this.onChatbots.bind(this);
    this.onStats = this.onStats.bind(this);
    this.onIntegrations = this.onIntegrations.bind(this);
    }

    onChatbots(e) {
    this.setState({ tab: 'bots' });
    e.preventDefault();
    }

    onStats(e) {
    this.setState({ tab: 'stats'});
    e.preventDefault();
    }

    onIntegrations(e) {
    this.setState({tab: 'integrations'});
    e.preventDefault();
    }


    render() {
    const currentTab = this.state.tab;
    const TabComponent = components[currentTab];
    return (
    <div>
    <Logo />
    <User />
    <div className="navBarContainer">
    <NavBar active={currentTab} onChatbots={this.onChatbots} onStats={this.onStats} onIntegrations={this.onIntegrations}  />
    <div className="container"><TabComponent /></div>
    </div>
   </div>);
    }
}
