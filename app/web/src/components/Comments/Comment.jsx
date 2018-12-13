import React from 'react'
import styled from 'styled-components'

import Avatar from '../Avatar'
import { H2 } from '../Text/Headings'

const CommentWrapper = styled.div`
  background: ${props => props.theme.palette.background};
  border-radius: ${props => props.theme.spacing.space1};
  padding: ${props => props.theme.spacing.space2};
  margin-bottom: ${props => props.theme.spacing.space2};
`

const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
`

const Comment = ({ comment }) => {
  return (
    <CommentWrapper>
      {comment.author &&
        <CommentAuthor>
          <Avatar src={comment.author.image} size={40} />
          <H2>{comment.author.firstName} said</H2>
        </CommentAuthor>
      }
      {comment.body}
    </CommentWrapper>
  )
}

export default Comment;