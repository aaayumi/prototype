import React from 'react';

class NewIntegrationForm extends React.Component {

    constructor(props) {
    super(props);
    this.state = {verification_token: '',
              app_secret: '',
              page_access_token: ''};

    this.fieldChanged = this.fieldChanged.bind(this);
    this.createIntegration = this.createIntegration.bind(this);
    }

    fieldChanged(fieldName, e) {
    this.setState({[fieldName]: e.target.value});
    }

    createIntegration(e) {
    var data = Object.assign({}, this.state);
    console.log(this.state);
    data.integration_type = 'fbmessenger';
    var self = this;
    e.preventDefault();
    }


    render() {
    return (
        <form className="form-signin">
              <input type="text"
                 name="verificationToken"
             value={this.state.verification_token}
             onChange={(e) => this.fieldChanged('verification_token', e)}
             placeholder="Verification Token" />

              <input type="text"
                 name="appSecret"
             value={this.state.app_secret}
             onChange={(e) => this.fieldChanged('app_secret', e)}
             placeholder="App Secret" />

              <input type="text"
                 name="pageAccessToken"
             value={this.state.page_access_token}
             onChange={(e) => this.fieldChanged('page_access_token', e)}
             placeholder="Page Access Token" />

          <input type="submit" value="Submit" onClick={this.createIntegration} />
        </form>
    );
    }
}

function Integration(props) {
    return (<li>
        <p>Integration for {props.integration.integration_type}</p>
        <p>created on {props.integration.created}</p>
        <p>Hook url: {props.integration.hook_url}</p></li>);

}

export default class Integrations extends React.Component {

    constructor(props) {
    super(props);
    this.state = {integrations: []};
    }

    addIntegration(integration) {
    var existing = self.state.integrations;
    existing.push(integration);
    this.setState({integrations: existing});
    }

    componentDidMount() {
    self = this;
    axios.get('/integration')
        .then(function(response) {
        self.setState({integrations: response.data.integrations});
        }).catch(function(error) {
        console.log(error);
        });
    }

    render() {
        const integrationItems = this.state.integrations.map((integration) => <Integration integration={integration} key={integration.id.toString()} />);
    return (<div>
        <h3>Integrations</h3>
        <NewIntegrationForm addIntegration={this.addIntegration}/>
        <h4>Existing integrations</h4>
        <ul>{integrationItems}</ul>
        </div>);
    }
}
