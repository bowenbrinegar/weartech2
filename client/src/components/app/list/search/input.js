import React, { Component } from 'react'


class Input extends Component {
  render() {
    return (
      <div>
        <input className={this.props.className}
               value={this.props.value}
               onChange={this.props.onChange}
               name={this.props.name}/>
        <button id='searchButton'
                onClick={this.props.onClick}
        >
          Search
        </button>
      </div>
    )
  }
}

export default Input