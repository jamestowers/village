import styled from 'styled-components'

const Body = styled.p`
  font-family: ${props => props.theme.type.fonts.body};
  font-size: 1.8rem;
  color: ${props => props.theme.palette.textBody};
`

export const SmallText = styled(Body)`
  font-family: ${props => props.theme.type.fonts.light};
  font-size: 1.4rem;
  color: ${props => props.theme.palette.textLight};
`

export default Body
