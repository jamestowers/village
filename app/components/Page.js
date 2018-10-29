import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'

const Wrapper = styled.View`
  background: ${props => props.theme.palette.background};
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: ${props => props.padding ? `0 ${props => props.theme.spacing.space3}` : '0'};
`

const Page = ({ padding, children }) => (
  <Wrapper padding={padding}>
    {children}
  </Wrapper>
)

Page.defaultProps = {
  padding: true
}
 
export default Page
