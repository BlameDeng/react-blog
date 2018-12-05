import React, { Component } from 'react'
import './svg'

class Icon extends Component {
  render() {
    return (
      <span className="icon-wrapper" style={this.props.style}>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref={`#icon-${this.props.icon}`} />
        </svg>
      </span>
    )
  }
}

export default Icon
