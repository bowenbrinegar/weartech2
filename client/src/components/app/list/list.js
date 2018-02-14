import React, { Component } from 'react'
import ListItem from './listItem/listItem';
import './list.css'
import Search from './search/';
import DB from '../../../utils/DB'

class List extends Component {
  state = {
    searchInput: '',
    institutions: []
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({[name]: value})
  };

  submitChange = () => {
    DB.findAllInstitutionsByName(this.state.searchInput)
      .then(res => this.setState({institutions: res.data}))
  };

  componentDidMount() {
    DB.getInstitutions()
      .then(res => {
        this.setState({institutions: res.data})
        console.log(this.state.institutions)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div id="list">
          <Search className="searchInput"
                  value={this.state.searchInput}
                  onChange={this.handleChange.bind(this)}
                  name="searchInput"
                  onClick={this.submitChange.bind(this)}
          />
          <div id="institutionContainer">
            {this.state.institutions ? this.state.institutions.map(obj => {
              return (
                <ListItem name={obj.institution} institutionId={obj._id} onClick={this.props.onClick}/>
              )
            }) : (<h1>No results</h1>)}
          </div>
      </div>
    )
  }
}

export default List