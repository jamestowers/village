// @flow
import * as React from 'react'
import styled from 'styled-components'

const Notification = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.space3};
  color: ${props => props.theme.colors.shade4};
  font: ${props => props.theme.type.styles.xsmall};
  flex: 1;
`

type Props = {
  children: React.Node,
  message: string,
  size: number
}

const ErrorNotice = (props: Props) => (
  <Notification>
    <h1>{props.message}</h1>
    {props.children}
  </Notification>
)

ErrorNotice.defaultProps = {
  message: 'Sorry, an error occured',
  children: null,
  size: 60
}

export default ErrorNotice
