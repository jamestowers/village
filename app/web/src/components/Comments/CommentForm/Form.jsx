import React, { PureComponent } from 'react'
import styled from 'styled-components'

import Input from '../../../components/forms/Input'
import Button from '../../../components/Button'

const CommentFormWrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.space3};
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
        <Input
          as="textarea"
          placeholder="Add a comment"
          onChange={this.onCommentEnter}
        />
        <Button
          primary
          onClick={this.onButtonClick}
        >Comment</Button>
      </CommentFormWrapper>
    )
  }
}

export default CommentForm
