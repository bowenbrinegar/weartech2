import React, { Component } from 'react'
import './listItem.css'

class ListItem extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}
           className='listItem'>
        <h3 dataId={this.props.institutionId}>{this.props.name}</h3>
      </div>
    )
  }
}

export default ListItem