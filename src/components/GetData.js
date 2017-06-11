/**
* GetData.js
* Renders the GetData component which makes the GET /MyContact API call
* This call makes a request to Salesforce pulling current contacts in the system
*/

import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class GetData extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.listResources = this.listResources.bind(this);
  }

  listResources() {
    let {userToken, orgToken, elementToken} = this.props;
    let baseUrl = 'https://api.cloud-elements.com/elements/api-v2';
    let path= 'MyContact';
    // The b
    let config = {
      method: 'GET',
      headers: {
        'Authorization': `User ${userToken}, Organization ${orgToken}, Element ${elementToken}`,
        'Content-Type': 'application/json'
      }
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
    let columns = [{Header: 'FirstName', accessor: 'FirstName' },
     {Header: 'LastName', accessor: 'LastName' },
     {Header: 'email', accessor: 'email' }
    ];
    return(
      <div>
        <div>
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="thumbnail">
                  <div className="caption">
                    <h4>Retrieve Contacts</h4>
                    <p>Once you have added the Salesforce Integration, you can pull your contacts.</p>
                    <button className="btn btn-warning" onClick={this.listResources}> Pull Contacts </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { resources ?
          <ReactTable className='table' data={data} columns={columns} />
          :
        <div> </div>
        }
      </div>
    )
  }

}

export default (GetData);
