import React from 'react';
import AddContactForm from './AddContactForm';
import Authentication from './Authentication';
import GetData from './GetData';

class Dashboard extends React.Component {
  constructor() {
    super();

    this.addContact = this.addContact.bind(this);
    // the initial state
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
      contacts: {}
    }
  }

  // Helper Function
  setElementToken(token) {
    this.setState({
      elementToken: token
    })
  }

    addContact(contact) {
      //update our state
      const contacts = {...this.state.contacts};
      // add in our new contact
      const timestamp = Date.now();
      contacts[`contact-${timestamp}`] = contact;
      // set state
      this.setState({ contacts });
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
            <a className="nav-link" href="#">Contacts</a>
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
      <h1>Contacts</h1>
      <AddContactForm />
      <section className="row text-center placeholders">
        <div className="col-6 col-sm-3 placeholder">
          <Authentication />
        </div>
      </section>

      <h2>Current Contacts</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Jon</td>
              <td>Smith</td>
              <td>jon@acme.com</td>
              <td>303-333-3333</td>
            </tr>
          </tbody>
        </table>
        <GetData />
      </div>
    </main>
  </div>
</div>

    );
  }
}

export default Dashboard;
