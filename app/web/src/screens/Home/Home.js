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

const Tiles = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 600px;
`

const initialState = {
  commentText: ''
}

class HomeScreen extends React.PureComponent {

  state = initialState

  componentDidMount() {
    this.props.getPosts()
  }

  onTilePress = (id) => {
    console.log(id)
  }

  onCommentEnter = (e) => {
    const text = e.target.value
    this.setState({ commentText: text })
  }

  onButtonClick = () => {
    this.props.addComment({
      body: this.state.commentText,
      postId: 4,
      authorId: 3
    })
  }

  render() {
    const { posts } = this.props
    return (
      <Wrapper>
        <H1>Feed</H1>
        {posts && <Tiles>
          {posts.map(post =>
            <Tile
              key={post.id}
              post={post}
              author
              onPress={() => this.onTilePress(post.id)}
            />
          )}
        </Tiles>
        }
      </Wrapper>
    )
  }
}

export default HomeScreen
