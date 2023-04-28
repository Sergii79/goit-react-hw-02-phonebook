import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";

import { ContactForm } from "./ContactForma/ContactForma";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  addContact = newContact => {
    const newNames = this.state.contacts.map(item => item.name);

    if (newNames.some(name => name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState({ contacts: [...this.state.contacts, newContact] });
    }
  };

  filterContacts = value => {
    console.log(value);
    this.setState({ filter: value });
  };

  render() {
    return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      
        <ContactForm />
        <ContactList contacts={this.filterContacts} />
      <GlobalStyle />
    </div>
  );
  }  
};
