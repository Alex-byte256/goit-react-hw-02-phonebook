import { Component } from 'react';
import PropTypes from 'prop-types';


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

ContactList.propTypes = {
  visContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string
  }))
}


export default ContactList;
