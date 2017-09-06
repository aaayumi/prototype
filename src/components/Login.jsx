import React from 'react';
import {FormRow} from './Forms';

export default class LoginForm extends React.Component {

    constructor(props) {
    super(props);
    this.state = {email: '',
              email_error: '',
              password_error: '',
              password: ''};

    this.emailChanged = this.emailChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.login = this.login.bind(this);
    }


    login(e) {
    e.preventDefault();

     }

    emailChanged(e) {
    console.log('error');
    this.setState({email: e.target.value});
    }

    passwordChanged(e) {
    this.setState({password: e.target.value});
    }

    validateInput() {
    var valid = true;
    if (!this.state.email) {
        this.setState({email_error: "Please enter your email"});
        valid = false;
    } else {
        this.setState({email_error: ""});
    }

    if (!this.state.password) {
        this.setState({password_error: "Please enter your password"});
        valid = false;
    } else {
        this.setState({password_error: ""});
    }
    return valid;
    }

    render() {
    return (
        <div className="container">
          <form className="form-signin">
        <h2 className="form-signin-heading">Twyla Client Application</h2>
        <FormRow fieldType={"email"}
             placeholder={"Email"}
             value={this.state.email}
             onChange={this.emailChanged}
             error={this.state.email_error}
             autoFocus={true} />
        <FormRow fieldType={"password"}
             placeholder={"Password"}
             value={this.state.password}
             error={this.state.password_error}
             onChange={this.passwordChanged} />
        <input className="btn btn-lg btn-primary btn-block"
               value="Log in"
               type="submit" onClick={this.login} />
          </form>
        </div>
    );

    }
}