import React from 'react';
import Bots from './Bots';
import Stats from './Stats';
import Tenants from './Tenants';

const components = {
    bots: Bots,
    stats: Stats,
    tenants: Tenants
}

function Logo(props){
  return(<div className="navbar-brand"><a href="#">Twyla</a></div>);
}

function NavBar(props) {
   return (<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
        <ul className="navbar-nav mr-auto">
          <li className={"nav-item" + (props.active === "bots" ? " active" : "")}>
            <a className="nav-link" onClick={props.onChatbots}>Bots</a>
          </li>
          <li className={"nav-item" + (props.active === "stats" ? " active" : "")}>
            <a className="nav-link" onClick={props.onStats}>Stats</a>
          </li>
          <li className={"nav-item" + (props.active === "tenants" ? " active" : "")}>
            <a className="nav-link" onClick={props.onTenants}>Tenants</a>
          </li>
          <li className={"nav-item" + (props.active === "integrations" ? " active" : "")}>
          <a className="nav-link" onClick={props.onIntegrations}>Integrations</a>
          </li>
          </ul>
            </nav>);
}

function LogoutButton(props) {
    return(<button>Logout</button>);
}


export default class Dashboard extends React.Component {

    constructor(props) {
    super(props);
    this.state = {tab: 'stats'
                   };
    this.onChatbots = this.onChatbots.bind(this);
    this.onStats = this.onStats.bind(this);
    this.onTenants = this.onTenants.bind(this);
    }


    onChatbots(e) {
    this.setState({tab: 'bots'});
    e.preventDefault();
    }

    onStats(e) {
    this.setState({tab: 'stats'});
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
    <div className="navBarContainer">
    <NavBar active={currentTab} onChatbots={this.onChatbots} onStats={this.onStats} onTenants={this.onTenants} onIntegrations={this.onIntegrations} />
    <div className="container"><TabComponent /></div>
    </div>
   </div>);
    }
}
