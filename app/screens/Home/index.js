import { connect } from 'react-redux'

import { fetchPosts } from '../../store/actions/postsActions'

import Home from './Home'

const mapStateToProps = state => ({
  posts: state.posts.items,
  authors: state.users.items
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts())
})

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export default ConnectedHome
