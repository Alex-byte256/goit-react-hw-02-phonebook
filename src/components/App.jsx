import PhoneBook from './PhoneBook/PhoneBook';
import { Component } from 'react';
import { nanoid } from 'nanoid'

class  App extends Component{
  state = {
    contacts: [],
    name: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      contacts: [...this.state.contacts,
        { name:this.state.name, id: nanoid(10) }
      ],name: ""});
  }

  handleOnChange = (e) => {
    console.log(e.target.value)
    this.setState( ({
      name: e.target.value
    }))
  }

  render() {
    return (
      <div>
        <h2>Phone book</h2>
        <PhoneBook onSubmit={this.handleSubmit} textValue={this.state.name} onChange={this.handleOnChange}/>
        <h2>Contacts </h2>
        <ul>
          {this.state.contacts.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      </div>
    );
  }
};

export default App;
