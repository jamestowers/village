import { connect } from 'react-redux'

import { postsWithAuthor } from '../../store/selectors'
import { fetchPosts } from '../../store/actions/postsActions'

import Home from './Home'

const mapStateToProps = state => ({
  posts: postsWithAuthor(state)
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts())
})

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export default ConnectedHome
