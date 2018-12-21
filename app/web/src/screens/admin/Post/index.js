import { connect } from 'react-redux'

import { fetchPost, updatePost } from '../../../../../shared/store/actions/postsActions'
import { postSelector } from '../../../../../shared/store/selectors'

import Post from './Post'

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  return {
    id: id,
    post: postSelector(state, id),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getPost: () => dispatch(fetchPost(ownProps.match.params.id)),
  updatePost: (payload) => dispatch(updatePost(payload))
})

const ConnectedPost = connect(mapStateToProps, mapDispatchToProps)(Post)

export default ConnectedPost
