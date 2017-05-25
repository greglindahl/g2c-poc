import React from 'react';

class AddContactForm extends React.Component {
  createContact(event) {
    event.preventDefault();
    console.log('Gonna add a contact!');
    const contact = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      phone: this.phone.value
    };
    this.props.addContact(contact);
    this.contactForm.reset();
  }

  render() {
    return (
      <form ref={input => this.contactForm = input} onSubmit={e => this.createContact(e)}>
        <p className="help-block">Add a New Contact</p>
        <div className="form-group">
          <div className="col-md-12">
            <input className="form-control" ref={input => this.firstName = input} type="text" placeholder="First Name" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input className="form-control" ref={input => this.lastName = input} type="text" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input className="form-control" ref={input => this.email = input} type="text" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-12">
            <input className="form-control" ref={input => this.phone = input} type="text" placeholder="Phone" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">+ Add Contact</button>
      </form>
    );
  }
}

export default AddContactForm;
