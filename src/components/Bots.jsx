import React from 'react';
import {FormRow, BigButton} from './Forms';
import 'font-awesome/css/font-awesome.css'

class Category extends React.Component {
constructor(props) {
     super(props);
     this.state={ isOpen: false };
     this.handleClick = this.handleClick.bind(this);
     }

    handleClick() {
    this.setState({ isOpen : !this.state.isOpen })
    console.log(!this.state.isOpen)
  }
render() {
const categoryStatus = this.state.isOpen ? "isopen" : "";
return(
<div>
   <div className="categoryContainer">
        <h3>CATEGORIES</h3>
        <button onClick={this.handleClick}><i className="slideinButton fa fa-reply fa-2x" aria-hidden="true"></i></button>
 </div>
  <div className={categoryStatus} id="category">
  <input className="categoryInput" type="text" value="Add Category" placeholder="Add Category" />
  <ul>
      <li>Greetings</li>
      <li>Main Switchboard</li>
      <li>Interjections</li>
      </ul>
  </div>
  </div>
  )}
}

class Accessory extends React.Component {
constructor(props) {
     super(props);
     this.state={ isOpen: false };
     this.handleClick = this.handleClick.bind(this);
     }

    handleClick() {
    this.setState({ isOpen : !this.state.isOpen})
    console.log(!this.state.isOpen)
  }
render() {
const accessoryStatus = this.state.isOpen ? "isopen" : "";
  return(
  <div className="accessoryContainer">
  <div className="accessoryButton">
      <button onClick={this.handleClick}><i className="slideoutButton fa fa-share fa-2x" aria-hidden="true"></i></button>
  </div>
  <div className={accessoryStatus} id="accessory">
  <div className="firstContainer">
      <navbar>
      <ul>
          <li id="one"><i className="fa fa-bolt fa-2x" aria-hidden="true"></i></li>
          <li id="two"><i className="fa fa-bolt fa-2x" aria-hidden="true"></i></li>
          <li id="three"><i className="fa fa-bolt fa-2x" aria-hidden="true"></i></li>
      </ul>
      </navbar>
  </div>
  <div className="secondContainer">
  </div>
  </div>
  </div>
  )}
}

class CreateBotForm extends React.Component {
    constructor(props) {
     super(props);
     this.state={ isOpen: false };
     this.handleClick = this.handleClick.bind(this);
     }

    handleClick() {
    this.setState({ isOpen : !this.state.isOpen })
    console.log(!this.state.isOpen)
    }
    render() { 
    const botStatus = !this.state.isOpen ? "isopen" : "";
    return (
    <div>
    <div className={botStatus} id="bot">
        <h2>MASTER INTENTS</h2>
        <input type="text" value="Add Intent" />
    </div>
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
    this.setState({ chatbots: existing });
    }

    componentDidMount() {
  
    }

    handleClick(){
    this.setState({ isOpen : !this.state.isOpen })
    }

    render() {
    const chatbots = this.state.chatbots.map((bot) => <Chatbot bot={bot} key={bot.id}/>);
    const botStatus = !this.state.isOpen ? "isopen" : "";
    const accessoryStatus = this.state.isOpen ? "isopen" : "";
    const categoryStatus = this.state.isOpen ? "isopen" : "";
    return (<div>
        <div className="botPage">
        <Category className={categoryStatus} />
        <CreateBotForm onClick={this.handleClick} tenants={this.state.tenants} addChatbot={this.addBot} />
        <Accessory className={accessoryStatus} />
        </div>
        </div>);
    }
}