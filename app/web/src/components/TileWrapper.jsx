import styled from 'styled-components'

const TileWrapper = styled.div`
  background: ${props => props.theme.palette.background};
  border-radius: ${props => props.theme.borders.radius.small};
  border: 1px solid ${props => props.theme.colors.shade7};
  box-shadow: ${props => props.theme.boxShadow};
  display: flex;
  a{
    text-decoration: none;
    font-weight: ${props => props.theme.type.weights.bold};
    color: ${props => props.theme.palette.textBody};
  }
`

export default TileWrapper
