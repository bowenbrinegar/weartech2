import React, { Component } from 'react'
import Input from './input';

class Search extends Component {
  render() {
    return (
      <div id="search">
        <Input {...this.props}/>
      </div>
    )
  }
}

export default Search