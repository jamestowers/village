import React from 'react';
import styled from 'styled-components'

import Tile from '../../components/Tile'
import { H1 } from '../../components/Text/Headings'

const Wrapper = styled.div`
  background: #EFF1F3;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 0 ${props => props.theme.spacing.space3};
`

const initialState = {
  commentText: ''
}

class PostScreen extends React.PureComponent {

  state = initialState

  componentDidMount() {
    this.props.getPost()
  }

  onCommentEnter = (e) => {
    const text = e.target.value
    this.setState({ commentText: text })
  }

  /* onButtonClick = () => {
    this.props.addComment({
      body: this.state.commentText,
      postId: this.props.id,
      authorId: 3
    })
  } */

  render() {
    const { post } = this.props
    return (
      <Wrapper>
        <H1>{post.title}</H1>
        <Tile
          key={post.id}
          post={post}
          author
          onPress={() => this.onTilePress(post.id)}
        />
      </Wrapper>
    )
  }
}

export default PostScreen
