import React from 'react'
import styled from 'styled-components'

const AvatarWrapper = styled.div.attrs({
  style: ({ src }) => ({ backgroundImage: `url(${src})` })
})`
  background-color: ${props => props.theme.palette.backgroundAlt};
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 100%;
  overflow: hidden;
  float: left;
  margin-right: ${props => props.theme.spacing.space3};
  height: ${props => props.size}px;
  width: ${props => props.size}px
`

const Avatar = ({ src, size }) => {
  return (
    <AvatarWrapper src={src} size={size} />
  )
}

Avatar.defaultProps = {
  size: 60
}

export default Avatar;