import React, { Component } from 'react'
import "./modal.css"

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null;
    } else if (this.props.value === "sensor") {
      return (
        <div id="modal">
          <h1>Sensor Modal</h1>
          <button value='Close' onClick={this.props.close}>Close</button>
        </div>
      )
    } else if (this.props.value === "institution") {
      return (
        <div id="modal">
          <h1>Institution Modal</h1>
          <button value='Close' onClick={this.props.close}>Close</button>
        </div>
      )
    }
  }
}

export default Modal