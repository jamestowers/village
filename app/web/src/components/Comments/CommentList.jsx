import React, { PureComponent } from 'react'
// import styled from 'styled-components'

import Comment from './Comment'

class Comments extends PureComponent {
  state = {}

  componentDidMount() {
    this.props.getComments()
  }

  render() {
    const { comments } = this.props
    if (!comments || !comments.length) {
      return null
    }

    return (
      comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
        />
      ))
    )
  }
}

export default Comments
