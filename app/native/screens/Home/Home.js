import React from 'react';
import { ScrollView, View } from 'react-native'
import styled from 'styled-components'

import Tile from '../../components/Tile'
import { H1 } from '../../components/Text/Headings'

const Wrapper = styled.View`
  background: #EFF1F3;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0 ${props => props.theme.spacing.space3};
`

const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: props => {
    return {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
})``

const Tiles = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    header: null,
  }

  componentDidMount() {
    this.props.getPosts()
  }

  onTilePress = (id) => {
    const { navigate } = this.props.navigation
    navigate('Article', { id })
  }

  render() {
    const { posts, authors } = this.props
    return (
      <Wrapper>
        <Scroll>
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
        </Scroll>
      </Wrapper>
    )
  }
}

export default HomeScreen
