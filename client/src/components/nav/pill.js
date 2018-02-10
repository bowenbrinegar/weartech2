import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Pill extends Component {
  render() {
    return(
        <NavLink className='navLink'
                 activeClassName='active'
                 to={this.props.link}>
          {this.props.name}
        </NavLink>
    )
  }
}

export default Pill