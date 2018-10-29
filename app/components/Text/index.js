import { Text } from 'react-native'
import styled from 'styled-components'

const Body = styled.Text`
  font-family: ${props => props.theme.type.fonts.body};
  font-size: 18px;
  color: ${props => props.theme.palette.textBody};
  line-height: 28;
`

export const SmallText = styled(Body)`
  font-family: ${props => props.theme.type.fonts.light};
  font-size: 14px;
  color: ${props => props.theme.palette.textLight};
  line-height: 22;
`

export default Body
