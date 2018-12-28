import { connect } from 'react-redux'

import { fetchPosts } from '../../../../shared/store/request'
import { addComment } from '../../../../shared/store/actions/commentsActions'
import { postsSelector, usersSelector } from '../../../../shared/store/selectors'

import Home from './Home'

const mapStateToProps = state => {
  return {
    posts: postsSelector(state),
    users: usersSelector(state),
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts()),
  addComment: (payload) => dispatch(addComment(payload))
})

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export default ConnectedHome
