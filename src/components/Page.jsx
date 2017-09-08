import React from 'react';

import Dashboard from './Dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class TwylaPage extends React.Component {


    render() {
    return(
     <MuiThemeProvider>
    <Dashboard />
     </MuiThemeProvider>
    )
}
};