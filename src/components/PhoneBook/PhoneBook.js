import { Component } from 'react';


class PhoneBook extends Component{



      render() {

        return(
          <>
            <form onSubmit={this.props.onSubmit}>
              <input
                value={this.props.textValue}
                onChange={this.props.onChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
             <button type={'submit'}>Добавити контакт</button>
            </form>
          </>
        )
      }
}

export default PhoneBook;
