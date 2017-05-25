import React from 'react';
import AddContactForm from './AddContactForm';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>Add Contact</h2>
        <AddContactForm addContact={this.props.addContact} />
      </div>
    )
  }
}

export default Contact;
