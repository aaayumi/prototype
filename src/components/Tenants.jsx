import React from 'react';
import {FormRow, BigButton} from './Forms';

class NewTenantForm extends React.Component {

    constructor(props) {
    super(props);
    this.state = {user: '', email: '', password:'', label_error: ''};
    this.labelChanged = this.labelChanged.bind(this);
    this.newTenant = this.newTenant.bind(this);
    }

    labelChanged(e) {
    this.setState({user: e.target.value,
                   email: e.target.value,
                   password: e.target.value});
    }

    newTenant(e) {
    e.preventDefault();
    
    };

    render() {
    return (
        <div className="tenantPage container">
          <form className="form-signin">
        <FormRow fieldType={"text"}
             value={this.state.user}
             onChange={this.labelChanged}
             error={this.state.label_error}
             placeholder={"Add User"}/>

        <FormRow fieldType={"text"}
             value={this.state.email}
             onChange={this.labelChanged}
             error={this.state.label_error}
             placeholder={"Add Email"}/>

        <FormRow fieldType={"text"}
             value={this.state.password}
             onChange={this.labelChanged}
             error={this.state.label_error}
             placeholder={"Add Password"}/>

        <BigButton text="Create tenant" onClick={this.newTenant} />

          </form>
    </div>);
    }

}

function Tenant(props) {
    return (<li>
        <p> {props.tenant.user} created on {props.tenant.created}</p>
        </li>);
}

export default class Tenants extends React.Component {

    constructor(props) {
    super(props);
    this.state = {tenants: []};
    this.addTenant = this.addTenant.bind(this);
    }

    componentDidMount() {

    };

    addTenant(tenant) {
    var existing = this.state.tenants;
    existing.unshift(tenant);
    this.setState({tenants: existing});
    }

    render() {
        const tenants = this.state.tenants.map((tenant) => <Tenant tenant={tenant} key={tenant.id.toString()} />);
    return (<div>
        <NewTenantForm  addTenant={this.addTenant}/>
        <ul> {tenants} </ul>
        </div>);
    }
}