import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Routes from './routes/index'
import history from './routes/history'

const GlobalStyle = createGlobalStyle`
  html {
    background: ${props => props.theme.palette.backgroundAlt};
    font-size: 62%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.type.fonts.body};
    font-size: 1.6rem;
    color: ${props => props.theme.palette.textBody};
    line-height: 1.3;
  }
  input[type=text],
  input[type=password]
  input[type=tel],
  textarea{
    border: 1px solid ${props => props.theme.palette.formFieldBorder};
    padding: ${props => props.theme.spacing.space2};
    width: 100%;
  }
`
class App extends Component {

  render() {
    const { auth } = this.props
    return (
      <Router history={history}>
        <React.Fragment>
          <GlobalStyle />
          <Routes auth={auth} />
        </React.Fragment>
      </Router>
    )
  }
}

export default App
