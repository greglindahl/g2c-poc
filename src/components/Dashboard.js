/**
* Dashboard.js
* Renders the different components, (Authentication, GetData, PostData)
* that will execute the different API calls to render your data
* Please set your Cloud Elements User and Org tokens, as well as, your Salesforce
* connected app configurations (api key and secret)
*/

import React from 'react';
import Authentication from './Authentication';
import PostData from './PostData';
import GetData from './GetData';

class Dashboard extends React.Component {
  constructor() {
    super();

    // the initial state
    this.state = {
      // Cloud Element authentication tokens
      orgToken: '${INSERT_CE_ORG_SECRET}',
      userToken: '${INSERT_CE_USER_SECRET}',
      // Vendor specific values, these come from your registered application
      vendorApiKey: '${INSERT_SFDC_API_KEY}',
      vendorSecret: '${INSERT_SFDC_API_SECRET}'
    }
  }

  // Helper Function
  setElementToken(token) {
    this.setState({
      elementToken: token
    })
  }

  render () {
    let { userToken, orgToken, elementToken, vendorSecret, vendorApiKey} = this.state;
    return (
    <div className="container-fluid">
    <div className="row">
      <nav className="col-sm-3 col-md-2 d-none d-sm-block bg-faded sidebar">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">Dashboard <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Invoices</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Analytics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Export</a>
          </li>
        </ul>
      </nav>

    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3 float-main" role="main">
      <h1>Invoices</h1>
      <section className="row text-center placeholders marginBtn">
        <Authentication orgToken={orgToken} userToken={userToken} vendorApiKey={vendorApiKey} vendorSecret={vendorSecret} setElementToken={ token => this.setElementToken(token)}/>
      </section>
      <section className="row text-center placeholders marginBtn">
        <GetData orgToken={orgToken} userToken={userToken} elementToken={elementToken}/>
      </section>
      <section className="row text-center placeholders">
        <PostData orgToken={orgToken} userToken={userToken} elementToken={elementToken}/>
      </section>
    </main>
  </div>
</div>

    );
  }
}

export default Dashboard;
