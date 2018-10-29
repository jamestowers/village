import { connect } from 'react-redux'

import { fetchPosts } from '../../store/actions/postsActions'

import Home from './Home'

const mapStateToProps = state => ({
  feed: state.posts.items
})

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts())
})

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export default ConnectedHome
