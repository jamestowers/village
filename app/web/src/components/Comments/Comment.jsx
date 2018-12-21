import React from 'react'
import styled from 'styled-components'

import TileWrapper from '../TileWrapper'
import Avatar from '../Avatar'
import { SmallText } from '../Text'

const CommentWrapper = styled(TileWrapper)`
  align-items: center;
  padding: ${props => props.theme.spacing.space4};
  margin-bottom: ${props => props.theme.spacing.space2};
`

const CommentBody = styled.div`
  
`

const Comment = ({ comment }) => {
  return (
    <CommentWrapper>
      <Avatar src={comment.author.image} size={40} />
      <CommentBody>
        <SmallText>{comment.author.firstName}</SmallText>
        {comment.body}
      </CommentBody>
    </CommentWrapper>
  )
}

export default Comment
