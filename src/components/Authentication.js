import React, { Component } from 'react';
import queryString from 'query-string';

class Authentication extends Component {

  // Set up values for authentication
  // The API key and secret are specific to the application that was registered with the vendor/.
  // In order to get the api key and secret, follow to the endpoint setup directions for salesforce
  // The callback url is a url that you provide to the endpoint
  constructor(props) {
    super(props);
    this.state = {
      // The callback url should point to the endpoint in your system that received the OAuth Grant Code
      // In this case its
      vendorCallbackUrl: process.env.NGROK
    }
  }

  // Helper function for Step 1
  getRedirectUrl() {
    let {vendorSecret, vendorApiKey} = this.props;
    let {vendorCallbackUrl} = this.state;
    // The base url for all calls against CE
    let baseUrl = 'https://api.cloud-elements.com/elements/api-v2';
    // The path to get the redirect url for salesforce
    // The key sfdc refers to the salesforce element
    let path= 'elements/sfdc/oauth/url';
    // The query parameters with the api key, api secret, and callback url.
    let queryParams =`apiKey=${vendorApiKey}&apiSecret=${vendorSecret}&callbackUrl=${vendorCallbackUrl}`;
    fetch(`${baseUrl}/${path}?${queryParams}`, )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          // The redirect url is where you should send your customers to log into salesforce
          "redirectUrl": responseJson.oauthUrl,
        })
    })
  }

  // Helper function for step 2
  authenticateInstance(grantCode) {
    // Get the required parameters to send to cloud elements
    let { userToken, orgToken, vendorSecret, vendorApiKey} = this.props;
    let { vendorCallbackUrl} = this.state;
    let baseUrl = 'https://api.cloud-elements.com/elements/api-v2';
    let path= 'instances';
    // The Rest call required to authenticate and Element Instance
    let config = {
      method: 'POST',
      headers: {
        'Authorization': `User ${userToken}, Organization ${orgToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "element": {
          "key": "sfdc"
        },
        "providerData": {
          "code": grantCode
        },
        "configuration": {
          "oauth.callback.url": `${vendorCallbackUrl}`,
          "oauth.api.key": `${vendorApiKey}`,
          "oauth.api.secret": `${vendorSecret}`
        },
        "tags": [
          "demo app"
        ],
        "name": "Demo App Instance"
      })
    }
    // Excecute the REST Call
    fetch(`${baseUrl}/${path}`, config)
      .then(response => response.json())
      .then(responseJson => {
        this.props.setElementToken(responseJson.token);
      })
  }

  componentWillMount() {
    let queryParams = queryString.parse(location.search);
    // Step 1: Send the user to salesforce to login to their account
    // This will return an access grant code
    if(!queryParams.code) {
      this.getRedirectUrl();
    }
    // Step 2: Send a the grant code to Cloud Elements to create the instance
    else{
      this.authenticateInstance(queryParams.code);
    }
  }

  // This is the html code that renders in the browser
  render() {
    let { redirectUrl } = this.state;
    let { elementToken } = this.props;
    return(
      <div>
        <button className="btn btn-primary" onClick={function() {
          window.location = redirectUrl
        }}>
        Add salesforce integration
        </button>
      </div>
    )
  }

}

export default (Authentication);
