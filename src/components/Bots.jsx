import React from 'react';
import {FormRow, BigButton} from './Forms';
import 'font-awesome/css/font-awesome.css'

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
    this.state = {chatbots: [], tenants: [] , caOpen: false , acOpen: false, show: true, firstShow: false, secondShow: false };
    this.addBot = this.addBot.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clickHandle = this.clickHandle.bind(this);
    this.show = this.show.bind(this);
    this.firstShow = this.firstShow.bind(this);
    this.secondShow = this.secondShow.bind(this);
    }

    addBot(bot) {
    var existing = this.state.chatbots;
    existing.unshift(bot);
    this.setState({ chatbots: existing });
    }

    componentDidMount() {
  
    }

    handleClick(){
    this.setState({ caOpen : !this.state.caOpen })
    }

    clickHandle() {
    this.setState({ acOpen : !this.state.acOpen })
    }

    show() {
    this.setState({ show: !this.state.show })
     console.log("show" + this.state.show)
    }

    firstShow() {
    this.setState({ firstShow: !this.state.firstShow })
    console.log("firstshow" + this.state.firstShow)
    }

    secondShow() {
    this.setState({ secondShow: !this.state.secondShow })
   console.log("secondShow" + this.state.secondShow)
    }

    render() {
    const chatbots = this.state.chatbots.map((bot) => <Chatbot bot={bot} key={bot.id}/>);
    const categoryStatus = this.state.caOpen ? "caOpen" : "";
    const categoryContainer = this.state.caOpen ? "caOpen" : "";
    const accessoryStatus = this.state.acOpen ? "acOpen" : "";
    const accessoryButton = this.state.acOpen ? "acOpen" : "";
    const botStatus = !this.state.isOpen ? "isopen" : "";
    const botInput = this.state.caOpen && !this.state.acOpen ? "caOpen" : ( this.state.acOpen && !this.state.caOpen ? "acOpen" : ( this.state.caOpen && this.state.acOpen? "allOpen" : ""));
    const greeting = this.state.caOpen && !this.state.acOpen ? "caOpen" : ( this.state.acOpen && !this.state.caOpen ? "acOpen" : ( this.state.caOpen && this.state.acOpen? "allOpen" : ""));
    const greetingList = !this.state.show ? "show" : "";
    const greetingMenu = !this.state.show ? "active" : "";
    const mainSwitchboard = !this.state.firstShow ? "firstShow" : "";
    const mainSwitchboardMenu = !this.state.firstShow ? "active" : "";
    const interjections  = this.state.secondShow ? "secondShow" : "";
    const interjectionsMenu = !this.state.secondShow ? "active" : "";

    return (<div>
        <div className="botPage">
        <div>

        <div className="categoryContainer">
        <div className={categoryContainer}>
        <h3>CATEGORIES</h3>
        </div>
        <button onClick={this.handleClick}>
       {this.state.caOpen
       ? <i className="slideinButton fa fa-share fa-2x" aria-hidden="true"></i>
       : <i className="slideinButton fa fa-reply fa-2x"  aria-hidden="true"></i>
       }
       </button>

       </div>
      
       <div className={categoryStatus} id="category">
       <input className="categoryInput" type="text" placeholder="Add Category" />
      <ul>
          <li id="greetingMenu" className={greetingMenu} onClick={this.show}>Greetings</li>
          <li id="mainSwitchboardMenu" className={mainSwitchboardMenu} onClick={this.firstShow}>Main Switchboard</li>
          <li id="interjectionsMenu" className={interjectionsMenu} onClick={this.secondShow}>Interjections</li>
      </ul>
      </div>
      </div>

       <div>
       <div className={botStatus} id="bot">
       <h2>MASTER INTENTS</h2>
      <input id="botInput" className={botInput} type="text" placeholder="Add Intent" />

       <ul className={greetingList} id="greetingList">
      <li className={greeting} id="greeting">Greetings</li>
      <li className={greeting} id="greeting">Hi, FB name, welcome to the DPD Support Center. My name is Otto, DPD's virtual assistant.</li>
      <li className={greeting} id="greeting">How can I help you today?</li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      <li className={greeting} id="greeting"></li>
      </ul>
       </div>
       </div>

      <div className="accessoryContainer">
      <div className={accessoryButton} id="accessoryButton">
      <button onClick={this.clickHandle}>{this.state.acOpen
    ? <i className="slideoutButton fa fa-reply fa-2x" aria-hidden="true"></i>
    : <i className="slideoutButton fa fa-share fa-2x" aria-hidden="true"></i>
  }</button>
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
      </div>
      </div>);
    }
}