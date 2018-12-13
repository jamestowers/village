import { connect } from 'react-redux'

import { fetchComments, addComment } from '../../../../shared/store/actions/commentsActions'
import { commentsSelector } from '../../../../shared/store/selectors'

import CommentList from './CommentList'

const mapStateToProps = (state, ownProps) => {
  return {
    comments: commentsSelector(state, ownProps.postId),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  getComments: () => dispatch(fetchComments(ownProps.postId)),
  addComment: (payload) => dispatch(addComment(payload))
})

const ConnectedComments = connect(mapStateToProps, mapDispatchToProps)(CommentList)

export default ConnectedComments
