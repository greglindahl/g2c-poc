/**
* PostData.js
* Renders the PostData component which executes the POST /MyContact api to
* Salesforce via the form component
*/

import React, { Component } from 'react';

class PostData extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.postResource = this.postResource.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    });
  }

  postResource(event) {
    event.preventDefault();
    let {userToken, orgToken, elementToken} = this.props;
    let baseUrl = 'https://api.cloud-elements.com/elements/api-v2';
    let path= 'MyContact';
    // The b
    let config = {
      method: 'POST',
      headers: {
        'Authorization': `User ${userToken}, Organization ${orgToken}, Element ${elementToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify (
        {
          FirstName: this.state.FirstName,
          LastName: this.state.LastName,
          email: this.state.email
        }
      )
    }
    fetch(`${baseUrl}/${path}`, config)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          resources: responseJson,
        })
      })
  }

  render() {
    let { resources } = this.state;
    let data = resources ? resources : {};
    return(
      <form onSubmit={this.postResource}>
        <p className="help-block marginBtn">Add a new Invoice</p>
        <div className="form-group">
          <div className="col-md-4">
            <input className="form-control" value={this.state.FirstName} name="FirstName" onChange={this.handleChange} type="text" placeholder="First Name" />
          </div>
          <div className="col-md-4">
            <input className="form-control" value={this.state.LastName} name="LastName" onChange={this.handleChange} type="text" placeholder="Last Name" />
          </div>
          <div className="col-md-4">
            <input className="form-control" value={this.state.email} name="email" onChange={this.handleChange} type="text" placeholder="Email" />
          </div>
        </div>
        <input type="submit" value="Add Invoice" className="btn btn-primary marginBtn" />
      </form>
    )
  }

}

export default (PostData);
