import { put, call, select, takeEvery } from 'redux-saga/effects'

import orm from '../orm'
import { postActions } from '../actions/postsActions'
import {
  fetchPost,
  fetchPosts,
  persistPost
} from '../request'
import { ormStateSelector } from '../selectors'

function* fetchPostSaga(action) {
  try {
    const response = yield call(fetchPost, action.id)
    yield put({ type: `${postActions.FETCH_POST}_SUCCEEDED`, payload: response.data })
  } catch (error) {
    yield put({ type: `${postActions.FETCH_POST}_FAILED`, error })
  }
}

function* fetchPostsSaga(action) {
  try {
    const response = yield call(fetchPosts)
    yield put({ type: `${postActions.FETCH_POSTS}_SUCCEEDED`, payload: response.data })
  } catch (error) {
    yield put({ type: `${postActions.FETCH_POSTS}_FAILED`, error })
  }
}

/**
 * @name updatePost
 * @description Update a post in the orm database frdt then senf the updated post 
 * to the server to persist
 * @param {Object} action 
 */
function* updatePostSaga(action) {
  yield put({
    type: postActions.PERSIST_POST,
    payload: action.payload
  })
  const state = yield select(ormStateSelector)
  const session = orm.session(state)
  const { Post } = session
  const updatedPost = Post.withId(action.payload.id).toJSON()

  try {
    // console.log('updatedPost', updatedPost)
    const response = yield call(persistPost, updatedPost)
    console.log(response.data)
    yield put({
      type: `${postActions.PERSIST_POST}_SUCCEEDED`,
      payload: response.data
    })
  } catch (error) {
    yield put({
      type: `${postActions.PERSIST_POST}_FAILED`,
      error
    })
  }
}

export function* postRootSaga() {
  yield takeEvery(postActions.FETCH_POST, fetchPostSaga)
  yield takeEvery(postActions.FETCH_POSTS, fetchPostsSaga)
  yield takeEvery(postActions.REQUEST_UPDATE_POST, updatePostSaga)
}
