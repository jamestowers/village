import { Text } from 'react-native'
import styled from 'styled-components'

const Heading = styled.Text`
  color: ${props => props.theme.palette.textHeading};
  font-family: ${props => props.theme.type.fonts.headings};
  font-weight: ${props => props.theme.type.weights.bold};
  align-self: flex-start;
`

export const H1 = styled(Heading)`
  font-size: 36px;
  margin-bottom: ${props => props.theme.spacing.space4};
  margin-top: ${props => props.theme.spacing.space6};
`

export const H2 = styled(Heading)`
  font-size: 18px;
`

export const H3 = styled(Heading)`
  font-size: 12px;
`
