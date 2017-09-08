import React from 'react';
import {FormRow, BigButton} from './Forms';

class Category extends React.Component {
constructor(props){
     super(props);
     this.state={
      isOpen: false
      }
     this.handleClick = this.handleClick.bind(this)
     }

    handleClick(){
    this.setState({ isOpen : !this.state.isOpen})
    console.log(!this.state.isOpen)
  }
render(){
 const categoryStatus = this.state.isOpen ? "isopen" : "";
  return(
  <div className={categoryStatus} id="category">
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

class Accessory extends React.Component {
render() {
  return(
  <div className="botAccessory">
  <div className="firstContainer">
  <navbar><ul>
  {/* to be added */}
  <li id="one"><i className="fa fa-bolt fa-2x" aria-hidden="true"></i></li>
  <li id="two"><i className="fa fa-bolt fa-2x" aria-hidden="true"></i></li>
  <li id="three"><i className="fa fa-bolt fa-2x" aria-hidden="true"></i></li>
  </ul></navbar>
  </div>
  <div className="secondContainer"></div>
  </div>
  )}
}

class CreateBotForm extends React.Component {
     constructor(props){
     super(props);
     this.state={
      isOpen: false
      }
     this.handleClick = this.handleClick.bind(this)
     }

    handleClick(){
    this.setState({ isOpen : !this.state.isOpen})
  }
  
    render() {
    const botStatus = this.state.isOpen ? "isopen" : "";
    const categoryStatus = this.state.isOpen ? "isopen" : "";
    return (
    <div className={botStatus} id="botForm">
    <h2>MASTER INTENTS</h2>
    <input type="text" value="Add Intent" />
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
    }

    render() {
    const chatbots = this.state.chatbots.map((bot) => <Chatbot bot={bot} key={bot.id}/>);
    const botStatus = this.state.isOpen ? "isopen" : "";
    return (<div>
        <div className="botPage">
       
        <Category />
        <CreateBotForm className={botStatus} tenants={this.state.tenants} addChatbot={this.addBot} onClick={this.handleClick} />
        <Accessory />
        </div>
        </div>);
    }
}