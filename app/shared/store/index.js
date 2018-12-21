import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import rootSaga from './sagas'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

// The order of these middleware is important!
const middleware = [
  thunk,
  sagaMiddleware,
  promiseMiddleware()
]

let composedMiddleware = applyMiddleware(...middleware)

if (process.env.NODE_ENV !== 'production') {
  composedMiddleware = composeWithDevTools(composedMiddleware)
}

const persistedState = {}

const store = createStore(rootReducer, persistedState, composedMiddleware)

sagaMiddleware.run(rootSaga)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducers', () => {
    const nextReducer = require('./reducers');
    store.replaceReducer(nextReducer);
  });
}

export default store
