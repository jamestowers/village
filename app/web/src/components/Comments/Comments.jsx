import React, { PureComponent } from 'react'
// import styled from 'styled-components'

class Comments extends PureComponent {
  state = {}

  componentDidMount() {
    // this.props.getComments()
  }

  render() {
    const { comments } = this.props
    if (!comments || !comments.length) {
      return null
    }

    return (
      comments.map(comment => (
        <p>{comment.body}</p>
      ))
    )
  }
}

export default Comments
