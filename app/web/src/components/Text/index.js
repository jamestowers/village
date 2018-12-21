import styled from 'styled-components'

const Body = styled.p`
  font-family: ${props => props.theme.type.fonts.body};
  font-size: ${props => props.theme.type.sizes.medium};
  color: ${props => props.theme.palette.textBody};
`

export const SmallText = styled(Body)`
  font-family: ${props => props.theme.type.fonts.light};
  font-size: ${props => props.theme.type.sizes.small};
  color: ${props => props.theme.palette.textLight};
`

export default Body
