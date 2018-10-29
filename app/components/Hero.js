import React from 'react'
import { Image, View } from 'react-native'
import styled from 'styled-components'

const Thumbnail = styled.View`
  overflow: hidden;
  flexDirection: row;
  align-items: stretch;
  flex: 1;
  min-height: 360px;
`

const imageStyle = {
  flex: 1,
  width: null,
  height: null
}

const Hero = (props) => {
  const { source } = props
  return (
    <Thumbnail>
      <Image source={source} resizeMode="cover" style={imageStyle} />
    </Thumbnail>
  )
}

export default Hero
