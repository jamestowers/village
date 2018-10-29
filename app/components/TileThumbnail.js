import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'

const Thumbnail = styled.View`
  border-radius: ${props => props.theme.spacing.space2};
  overflow: hidden;
  flexDirection: row;
  align-items: stretch;
  flex: ${props => props.width === '100%' ? '1' : `0 0 ${props.width}px`};
`

const imageStyle = {
  flex: 1,
  width: null,
  height: null
}

const TileThumbnail = (props) => {
  const { source, width } = props
  return (
    <Thumbnail width={width}>
      <Image source={ source } resizeMode="cover" style={imageStyle} />
    </Thumbnail>
  )
}

TileThumbnail.defaultProps = {
  width: '100%'
}
 
export default TileThumbnail
