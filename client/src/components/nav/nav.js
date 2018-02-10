import React, { Component } from 'react'
import Pill from './pill';
import './nav.css'


class Nav extends Component {
  render() {
    return (
      <div id="navBar">
        <div id="pillContainer">
          <Pill link="/home"
                name="home"
          />
          <Pill link="/app"
                name="app"
          />
          <Pill link="/team"
                name="team"
          />
          <Pill link="/contact"
                name="contact"
          />
          <Pill link="/populate"
                name="pop"
          />
        </div>
      </div>
    )
  }
}

export default Nav