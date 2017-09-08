import React from 'react';
import {FormRow, BigButton} from './Forms';

class Category extends React.Component {
render(){
  return(
  <div className="category">
  <div><h3>CATEGORIES</h3></div>
  <input className="categoryInput" type="text" value="Add Category" />
  <ul>
  <li>Greetings</li>
  <li>Main Switchboard</li>
  <li>Interjections</li>
  </ul>
  </div>
  )}
}

function Accessory(prop){
  return(
  <div className="botAccessory">
  <div><h3>Accessory</h3></div>

  </div>
  )
}

class CreateBotForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {tenant: '', 
                  bot_name: '', 
                  name_error: '', 
                  tenant_error: '',
                  isOpen : false
                  };
    this.tenantChanged = this.tenantChanged.bind(this);
    this.nameChanged = this.nameChanged.bind(this);
    this.createBot = this.createBot.bind(this);
    this.handleClick = this.handleClick.bind(this)
    }

    nameChanged(e) {
    this.setState({bot_name: e.target.value});
    }

    tenantChanged(e) {
    this.setState({tenant: e.target.value});
    }

    createBot(e) {
    e.preventDefault();
    
    }

    handleClick() {
    this.setState({ isOpen : !this.state.isOpen})
    console.log(!this.state.isOpen)
    }

    render() {
    const tenants = [{id: -1, value:'', label:'Tenant'}].concat(this.props.tenants);
    const options = tenants.map((tenant) => <option key={tenant.id} value={tenant.label}>{tenant.label}</option>);
    const botStatus = this.state.isOpen ? "isopen" : "";
    return (
        <div className={botStatus} id="botForm">
          <form className="form-signin">
        <div className={this.state.tenant_error? "form-group has-danger": "form-group"} >
          <select type="text"
              name="tenant"
              className="form-control"
              value={this.state.tenant}
              onChange={this.tenantChanged}>
            {options}
          </select>
          <div className="form-control-feedback">{this.state.tenant_error}</div>
        </div>
        <FormRow fieldType={"text"}
             value={this.state.name}
             onChange={this.nameChanged}
             error={this.state.name_error}
             placeholder={"Bot name"}/>

        <BigButton text="Create bot" onClick={this.createBot} />
        <button onClick={this.handleClick}>Click</button>
          </form>
    </div>);
    }

}

function Chatbot(props) {
    return (<li className="list-group-item">
              <button type="button" className="btn btn-primary btn-sm"> Edit </button>
              <button type="button" className="btn btn-danger btn-sm"> Delete </button>
          Bot created on {props.bot.created}: {props.bot.bot_name}
        </li>);
}

export default class Bots extends React.Component {
    constructor(props) {
    super(props);
    this.state = {chatbots: [], tenants: [] , isOpen: false };
    this.addBot = this.addBot.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }

    addBot(bot) {
    var existing = this.state.chatbots;
    existing.unshift(bot);
    this.setState({chatbots: existing});
    }

    componentDidMount() {
   
    }

    handleClick(){
    this.setState({ isOpen : !this.state.isOpen })
    console.log(!this.state.isOpen)
    }

    render() {
    const chatbots = this.state.chatbots.map((bot) => <Chatbot bot={bot} key={bot.id}/>);
    const botStatus = this.state.isOpen ? "isopen" : "";
    return (<div>
        <div className="botPage">
       
        <Category />
        <CreateBotForm className={botStatus} tenants={this.state.tenants} addChatbot={this.addBot} />
        <Accessory />
        </div>
        </div>);
    }
}