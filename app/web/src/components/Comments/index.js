import { connect } from 'react-redux'

import { fetchComments, addComment } from '../../../../shared/store/actions/commentsActions'
// import { commentsSelector } from '../../../../shared/store/selectors'

import Comments from './Comments'

const mapStateToProps = (state, ownProps) => {
  return {
    // comments: commentsSelector(state, ownProps.match.params.id),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  // getComments: () => dispatch(fetchComments(ownProps.match.params.id)),
  addComment: (payload) => dispatch(addComment(payload))
})

const ConnectedComments = connect(mapStateToProps, mapDispatchToProps)(Comments)

export default ConnectedComments
