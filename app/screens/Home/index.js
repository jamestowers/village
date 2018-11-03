import { connect } from 'react-redux'

import { postsSelector } from '../../store/selectors'
import { fetchPosts } from '../../store/actions/postsActions'

import Home from './Home'

const mapStateToProps = state => {
  const posts = postsSelector(state)
  console.log(posts)
  return {
    feed: posts
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts())
})

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)

export default ConnectedHome
