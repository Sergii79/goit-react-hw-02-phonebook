import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";

import { ContactForm } from "./ContactForma/ContactForma";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
    filter: '',
  }

  addContact = newContact => {
    console.log(newContact);
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
    >
      <h1>Phonebook</h1>
      <ContactForm onSave={this.addContact} />
      <Filter filter={this.filterContacts} />
      <ContactList items={this.state.contacts} />
      <GlobalStyle />
    </div>
  );
  }  
};
