import React from 'react';

class Contacts extends React.Component {
  render() {
    return (
      <div>
        <h2>My Contacts</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jon</td>
              <td>Smith</td>
              <td>jon@acme.com</td>
              <td>333-333-3333</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
