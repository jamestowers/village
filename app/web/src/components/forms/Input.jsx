import styled from 'styled-components'

const StyledInput = styled.input`
  background: ${props => props.theme.palette.background};
  border-radius: ${props => props.theme.borders.radius.small};
  border: 1px solid ${props => props.theme.colors.shade7};
  box-shadow: ${props => props.theme.boxShadow};
  font-size: ${props => props.theme.type.sizes.default};
	padding: ${props => props.theme.spacing.space3};
  margin: ${props => props.theme.spacing.space2} 0;
  width: 100%;
  ::-webkit-input-placeholder {
    color: ${props => props.theme.colors.shade3};
  }
  ::-moz-placeholder {
    color: ${props => props.theme.colors.shade3};
  }
  :-ms-input-placeholder {
    color: ${props => props.theme.colors.shade3};
  }
  :-moz-placeholder {
    color: ${props => props.theme.colors.shade3};
  }
`

export default StyledInput 
