import React from 'react';
import Integrations from './Integrations';
import Bots from './Bots';
import Stats from './Stats';
import Tenants from './Tenants';
import 'font-awesome/css/font-awesome.css'

const components = {
    integrations: Integrations,
    bots: Bots,
    stats: Stats,
    tenants: Tenants
}

function Logo(props){
  return(<div className="navbar-brand"><a href="#">Twyla</a></div>);
}

function User(props){
  return(<div className="tenantName"><i className="fa fa-address-book fa-1x" aria-hidden="true"></i>DPD TwylaBot Demo</div>);
}


function NavBar(props) {
   return (<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
        <ul className="navbar-nav mr-auto">
             <li className={"nav-item" + (props.active == "bots" ? " active" : "")}>
             <a className="nav-link" onClick={props.onChatbots}><i className="fa fa-comments fa-2x" aria-hidden="true"></i></a>
             </li>
             <li className={"nav-item" + (props.active == "stats" ? " active" : "")}>
             <a className="nav-link" onClick={props.onStats}><i className="fa fa-line-chart fa-2x" aria-hidden="true"></i></a>
             </li>
             <li className={"nav-item" + (props.active == "tenants" ? " active" : "")}>
             <a className="nav-link" onClick={props.onTenants}><i className="fa fa-user fa-2x" aria-hidden="true"></i>
             </a>
             </li>
             <li className={"nav-item" + (props.active === "integrations" ? " active" : "")}>
             <a className="nav-link" onClick={props.onIntegrations}><i className="fa fa-bolt fa-2x" aria-hidden="true"></i></a>
             </li>
        </ul>
          </nav>);
}

export default class Dashboard extends React.Component {

    constructor(props) {
    super(props);
    this.state = { tab: 'stats' };
    this.onChatbots = this.onChatbots.bind(this);
    this.onStats = this.onStats.bind(this);
    this.onTenants = this.onTenants.bind(this);
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

    onTenants(e) {
    this.setState({tab: 'tenants'});
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
    <NavBar active={currentTab} onChatbots={this.onChatbots} onStats={this.onStats} onTenants={this.onTenants}  onIntegrations={this.onIntegrations}  />
    <div className="container"><TabComponent /></div>
    </div>
   </div>);
    }
}
