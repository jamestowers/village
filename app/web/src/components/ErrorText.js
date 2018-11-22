// @flow
import * as React from 'react'
import styled from 'styled-components'

const Text = styled.span`
  color: ${props => props.theme.colors.danger};
  font-size: ${props => props.theme.type.sizes.small};
`

const ErrorText = ({ children, ...rest }: {children: React.Node }) => (
  <Text {...rest}>{children}</Text>
)

export default ErrorText
