import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { H2 } from './Text/Headings'
import TileThumbnail from './TileThumbnail'
import BodyText, { SmallText } from './Text'

const TileWrapper = styled(Link)`
  background: ${props => props.theme.palette.background};
  border-radius: ${props => props.theme.spacing.space3};
  display: flex;
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
  <TileWrapper to={`posts/${post.id}`}>
    <TileThumbnail width={160} source={post.image} />
    <TileBody>
      <H2>{post.title}</H2>
      <BodyText>by {post.author.firstName}</BodyText>
      <SmallText>{post.publishedAt.timeAgo}</SmallText>
    </TileBody>
  </TileWrapper>
)

export default Tile;