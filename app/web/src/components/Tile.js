import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { H2 } from './Text/Headings'
import WrapperStyle from './TileWrapper'
import TileThumbnail from './TileThumbnail'
import Avatar from './Avatar'
import { SmallText } from './Text'

const Wrapper = styled(Link)`
  display: flex;
  text-decoration: none;
  width: 100%;
`
const InnerWrapper = styled(WrapperStyle)`
  flex-direction: row;
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 100%;
  margin-bottom: ${props => props.theme.spacing.space3};
  text-decoration: none;
`

const TileBody = styled.div`
  flex: 1;
  padding: ${props => props.theme.spacing.space4};
`

const Tile = ({ post }) => (
  <Wrapper to={`posts/${post.id}`}>
    <InnerWrapper>
      <TileThumbnail width={160} source={post.image} />
      <TileBody>
        <H2>{post.title}</H2>
        <Avatar src={post.author.image} size={30} />
        <SmallText>by {post.author.firstName} {post.author.lastName}</SmallText>
        <SmallText>{post.publishedAt.timeAgo}</SmallText>
      </TileBody>
    </InnerWrapper>
  </Wrapper>
)

export default Tile;