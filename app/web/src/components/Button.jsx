import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const sizes = (props) => {
  if (props.large) {
    return `
      font-size: ${props.theme.type.sizes.default};
      font-family: ${props => props.theme.type.fonts.headings};
      text-transform: uppercase;
      padding: ${props.theme.spacing.space4} ${props.theme.spacing.space6};
    `
  }
  else if (props.small) {
    return `
      font-size: ${props.theme.type.sizes.small};
      padding: calc(${props.theme.spacing.space1} * 0.75) ${props.theme.spacing.space1};
    `
  }
  else {
    return `
      font-size: ${props.theme.type.sizes.small};
      padding: ${props.theme.spacing.space3} ${props.theme.spacing.space4};
    `
  }
}

const colors = ({ theme, primary, secondary }) => {
  if (primary) {
    return `
      background: ${theme.palette.primary};
      border-color: ${darken(0.2, theme.palette.primary)};
      &:hover{
        background: ${darken(0.2, theme.palette.primary)};
      }
    `
  }

  else if (secondary) {
    return `
      background: ${theme.palette.secondary};
      border-color: ${darken(0.1, theme.palette.secondary)};
      &:hover{
        background: ${darken(0.1, theme.palette.secondary)};
      }
    `
  }

  else {
    return `
      background: ${theme.colors.white};
      border-color:${theme.colors.shade5};
      &:hover{
        background: ${theme.colors.shade7};
      }
    `
  }
}

const StyledButton = styled.button`
  ${colors}
  border-width: 1px;
  border-style: solid;
  border-radius: ${props => props.theme.borders.radius.large};
  color: ${props => (props.primary ? props.theme.colors.white : props.theme.palette.text)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: inline-block;
  font-weight: ${props => props.theme.type.weights.bold};
  line-height: 1;
  text-align: center;
  opacity: ${props => (props.disabled ? '0.4' : '1')};
  outline: none;
  ${sizes}
  transition: background 0.2s ease-out;
`

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
}

export default Button