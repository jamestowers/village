import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.div.attrs({
  style: ({ image }) => ({ backgroundImage: `url(${image})` })
})`
  background-size: cover;
  background-position: 50% 50%;
  margin-bottom: ${props => props.theme.spacing.space4};
  height: 60vh;
  max-height: 500px;
  width: 100%;
`

const Hero = ({ image }) => {
  return (
    <HeroWrapper image={image} />
  )
}

export default Hero
