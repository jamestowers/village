import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Routes from './routes/index'
import history from './routes/history'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62%;
  }
  body {
    margin: 0;
    padding: 0;
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
