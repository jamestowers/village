import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'

import { H2 } from './Text/Headings'
import TileThumbnail from './TileThumbnail'
import BodyText, { SmallText } from './Text'

const TileWrapper = styled.TouchableOpacity`
  background: ${props => props.theme.palette.background};
  border-radius: ${props => props.theme.spacing.space3};
  flex-direction: row;
  margin-bottom: ${props => props.theme.spacing.space3};
  flex-shrink: 0;
  flex-grow: 1;
  flex-basis: 100%;
`

const TileBody = styled.View`
  flex: 1;
  padding: ${props => props.theme.spacing.space4};
`

const Tile = ({ post, onPress }) => (
  <TileWrapper onPress={onPress}>
    <TileThumbnail width={80} source={{ uri: post.attributes.image }} />
    <TileBody>
      <H2>{post.attributes.title}</H2>
      <SmallText>{post.attributes.publishedAtFormatted}</SmallText>
    </TileBody>
  </TileWrapper>
)

export default Tile;