import React, { Component } from 'react';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  // Authentication tokens for connecting to cloud elements
  // This tokens are specific to the current user
  // In this case will just hard code these values as an example user
  // You can find these values under the secrets tab in the console
  this.state = {
    // Cloud Element authentication tokens
    orgToken: '8c53799e32dc9049433484222497de30',
    userToken: '1HDpuHACu7Pf/lr7SUuPkydNUccqTz8ZiRxV7r9jRFs=',
    // Vendor specific values, these come from your registered application
    vendorApiKey: '3MVG9A2kN3Bn17huqpbZ.99EPdkUmCs6Jb_o5vU9PAPaGLfJc3HKOgNhyjmhsAHKQQW2vVY_qIvgav693Asqi',
    vendorSecret: '4139043620968081718',
    // Token used to access the create element instance
    // No need to set this, it will be set dynamically
    elementToken: '',
  }
}

// Helper Function
setElementToken(token) {
  this.setState({
    elementToken: token
  })
}
  render() {
    let { userToken, orgToken, elementToken, vendorSecret, vendorApiKey} = this.state;
    return (
      <div className="App">
        <Nav />
        <Dashboard />
      </div>
    );
  }
}

export default App;
