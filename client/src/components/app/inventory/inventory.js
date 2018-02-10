import React, { Component } from 'react'
import "./inventory.css"

class Inventory extends Component {
  render() {
    if (!this.props.show) { return null; }

    return (
      <div className={this.props.container}>
        <h1>Inventory</h1>
      </div>
    )
  }
}

export default Inventory