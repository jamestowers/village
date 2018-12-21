import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  border-radius: ${props => props.theme.borders.radius.};
  display: flex;
  flex-shrink: 0;
  margin: ${props => props.theme.spacing.space2} 0;
  width: 100%;
  .field{
    flex: 1;
    & > * {
      margin: 0;
    }
  }
`

const AddOn = styled.span`
  background: ${props => props.theme.colors.shade2};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.space1};
`

const FieldWithAddons = ({ prepend, append, children }) => {
  return (
    <StyledDiv>
      {prepend && <AddOn>{prepend}</AddOn>}
      <span className="field">{React.Children.only(children)}</span>
      {append && <AddOn>{append}</AddOn>}
    </StyledDiv>
  )
}

export default FieldWithAddons
