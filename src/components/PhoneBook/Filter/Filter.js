import { Component } from 'react';


class Filter extends  Component{

  render() {
    return(
      <label>Find Contacts by name
        <input name="filter" type='text' value={this.props.value} onChange={this.props.onChange}/>
      </label>
    )
  }
}

export default Filter;
