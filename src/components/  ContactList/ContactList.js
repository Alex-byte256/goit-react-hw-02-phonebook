import { Component } from 'react';


class ContactList extends Component{


  render() {
    return(
      <ul>
        {this.props.visContacts.map(el => (
          <li key={el.id}>{el.name} - {el.number}
          <button type='button' onClick={()=> this.props.onDeleteContacts(el.id)}>Delete</button></li>
        ))}
      </ul>
    )
  }

}

export default ContactList;
