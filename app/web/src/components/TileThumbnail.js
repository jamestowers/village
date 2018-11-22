import React from 'react'
import styled from 'styled-components'

const Thumbnail = styled.div`
  background-size: cover;
  background-position: 50% 50%;
  border-radius: ${props => props.theme.spacing.space2};
  overflow: hidden;
  flexDirection: row;
  align-items: stretch;
  flex: ${props => props.width === '100%' ? '1' : `0 0 ${props.width}px`};
`

const TileThumbnail = (props) => {
  const { source, width } = props
  return (
    <Thumbnail width={width} style={{ backgroundImage: `url(${source})` }} />
  )
}

TileThumbnail.defaultProps = {
  width: '100%'
}

export default TileThumbnail
