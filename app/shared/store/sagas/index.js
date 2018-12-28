import { all } from 'redux-saga/effects'

import { postRootSaga } from './postSagas'

export default function* rootSaga() {
  yield all([
    postRootSaga()
  ])
}