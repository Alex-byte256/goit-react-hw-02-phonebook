import ContactForm from './PhoneBook/ContactForm ';
import { Component } from 'react';
import { nanoid } from 'nanoid'
import Filter from './PhoneBook/Filter/Filter';
import ContactList from './  ContactList/ContactList';


class  App extends Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      contacts: [...this.state.contacts,
        { name:event.target.name.value,number:event.target.number.value, id: nanoid(10) }
      ]});

  }

  changeFilter = (e) => {
    this.setState({filter: e.currentTarget.value})
  }



  render() {

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(el=>el.name.toLowerCase().includes(normalizedFilter))

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit}  />
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <h2>Contacts </h2>
        <ContactList visContacts={visibleContacts} />
      </div>
    );
  }
};

export default App;
