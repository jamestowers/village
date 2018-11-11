import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

// The order of these middleware is important!
const middleware = [
  promiseMiddleware()
]

let composedMiddleware = applyMiddleware(...middleware)

if (process.env.NODE_ENV !== 'production') {
  composedMiddleware = composeWithDevTools(composedMiddleware)
}

const persistedState = {}

const store = createStore(rootReducer, persistedState, composedMiddleware)

export default store
