import React, { PureComponent } from 'react'
import styled from 'styled-components'

const CommentFormWrapper = styled.div`
  
`

const initialState = {
  commentText: ''
}

class CommentForm extends PureComponent {
  state = initialState

  onCommentEnter = (e) => {
    const text = e.target.value
    this.setState({ commentText: text })
  }

  onButtonClick = () => {
    this.props.addComment({
      body: this.state.commentText,
      postId: this.props.postId,
      authorId: 1
    })
  }

  render() {
    return (
      <CommentFormWrapper>
        <textarea
          placeholder="Add a comment"
          onChange={this.onCommentEnter}
        ></textarea>
        <button
          onClick={this.onButtonClick}
        >Comment</button>
      </CommentFormWrapper>
    )
  }
}

export default CommentForm;