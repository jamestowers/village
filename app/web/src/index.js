import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from '../../shared/store'
import theme from '../../shared/theme'

import App from './App'

import './theme/reset.css'

import * as serviceWorker from './serviceWorker'

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </Provider>
    , document.getElementById('root')
  )
}

render(App)

// Hot reloading
if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default
      render(NextApp)
    })
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
