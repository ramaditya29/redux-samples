import React, { Component, PropTypes } from 'react'
import ListContainer from './list-container'

export default class extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  handleSubmit = (e) => {
    const { onSubmit } = this.props

    e.preventDefault()

    onSubmit()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <ListContainer />
      </form>
    )
  }
}
