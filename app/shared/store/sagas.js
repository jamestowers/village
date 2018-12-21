import { put, call, select, takeEvery, all } from 'redux-saga/effects'

import api from './request'
import orm from './orm'
import { ormStateSelector } from './selectors'

function* updatePost(action) {
  yield put({ type: 'UPDATE_POST', payload: action.payload })
  const state = yield select(ormStateSelector)
  const session = orm.session(state)
  const { Post } = session
  const updatedPost = Post.withId(action.payload.id).toJSON()
  console.log('updatedPost', updatedPost)
  try {
    const data = yield call(api.updatePost, updatedPost)
    yield put({ type: 'UPDATE_POST_SUCCEEDED', data })
  } catch (error) {
    yield put({ type: 'UPDATE_POST_FAILED', error })
  }
}

function* watchUpdatePost() {
  yield takeEvery('REQUEST_UPDATE_POST', updatePost)
}

export default function* rootSaga() {
  yield all([
    watchUpdatePost()
  ])
}
