import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";

import { ContactForm } from "./ContactForma/ContactForma";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Title, Subject } from "./App.styled";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],    
    filter: '',
  }

  addContact = newContact => {    
    const newNames = this.state.contacts.map(item => item.name);

    if (newNames.some(name => name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState({ contacts: [...this.state.contacts, newContact] });
    }
  };

  changeFilter = value => {    
    this.setState({ filter: value.currentTarget.value });
  }; 

  // функция возвращающая новый массив контактов, отфильтрованных на основе значения фильтра.
  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contact => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.name !== contact),
    }));
  };

  render() {
    return (
    <Container
    >
      <Title>Phonebook</Title>
      <ContactForm
        onSave={this.addContact}
      />
      <Subject>Contacts</Subject>
      <Filter
        onFilter={this.changeFilter}        
      />
      <ContactList        
        filterContacts={this.filterContacts}
        deleteContact={this.deleteContact}
      />
      <GlobalStyle />
    </Container>
  );
  }  
};
