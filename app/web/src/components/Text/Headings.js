import styled from 'styled-components'

const headingStyles = ({ theme }) => {
  return `
    color: ${theme.palette.textHeading};
    font-family: ${theme.type.fonts.headings};
    font-weight: ${theme.type.weights.bold};
    align-self: flex-start;
  `
}

export const H1 = styled.h1`
  ${headingStyles}
  font-size: 5.2rem;
  letter-spacing: 0.1rem;
  margin-bottom: ${props => props.theme.spacing.space4};
  margin-top: ${props => props.theme.spacing.space6};
`

export const H2 = styled.h1`
  ${headingStyles}
  font-size: 1.8rem;
`

export const H3 = styled.h1`
  ${headingStyles}
  font-size: 1.2rem;
`
