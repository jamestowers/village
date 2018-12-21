import styled from 'styled-components'

const headingStyles = ({ theme }) => {
  return `
    color: ${theme.palette.textHeading};
    font-family: ${theme.type.fonts.headings};
    font-weight: ${theme.type.weights.bold};
    line-height: 1.3;
    align-self: flex-start;
  `
}

export const H1 = styled.h1`
  ${headingStyles}
  font-size: 5.2rem;
  letter-spacing: 0.05rem;
  margin-bottom: ${props => props.theme.spacing.space4};
`

export const H2 = styled.h2`
  ${headingStyles}
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.space3};
`

export const H3 = styled.h3`
  ${headingStyles}
  font-size: 1.6rem;
  margin-bottom: ${props => props.theme.spacing.space2};
`
