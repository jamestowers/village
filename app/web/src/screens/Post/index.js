import { connect } from 'react-redux'

import { fetchPost } from '../../../../shared/store/actions/postsActions'
import { addComment } from '../../../../shared/store/actions/commentsActions'
import { postSelector } from '../../../../shared/store/selectors'

import Post from './Post'

const mapStateToProps = (state, ownProps) => {
  return {
    post: postSelector(state, ownProps.id),
  }
}

const mapDispatchToProps = dispatch => ({
  getPost: () => dispatch(fetchPost()),
  addComment: (payload) => dispatch(addComment(payload))
})

const ConnectedPost = connect(mapStateToProps, mapDispatchToProps)(Post)

export default ConnectedPost
