import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Hero from '../../components/Hero'
import { H1, H2 } from '../../components/Text/Headings'
import BodyText, { SmallText } from '../../components/Text'
import TileWrapper from '../../components/TileWrapper'
import Avatar from '../../components/Avatar'
import Comments from '../../components/Comments'
import CommentForm from '../../components/Comments/CommentForm'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.space3};
  margin-bottom: ${props => props.theme.spacing.space6};
`

const PostMeta = styled(TileWrapper)`
  padding: ${props => props.theme.spacing.space3};
  margin-bottom: ${props => props.theme.spacing.space3};
`

const PostBody = styled.div`
  margin-bottom: ${props => props.theme.spacing.space6};
`

const initialState = {}

class PostScreen extends React.PureComponent {

  state = initialState

  componentDidMount() {
    this.props.getPost()
  }

  render() {
    const { post } = this.props

    if (!post) {
      return null
    }

    return (
      <React.Fragment>
        <Hero image={post.image} />
        <Wrapper>
          <PostBody>
            <H1>{post.title}</H1>
            <Link to="edit">Edit</Link>
            <PostMeta>
              <Avatar src={post.author.image} size={40} />
              <div>
                <SmallText><a href="/">{post.author.firstName} {post.author.lastName}</a></SmallText>
                <SmallText>{post.publishedAt.timeAgo} - 4 min read</SmallText>
              </div>
            </PostMeta>

            <BodyText>{post.body}</BodyText>
          </PostBody>

          <H2>Comments</H2>
          <CommentForm postId={post.id} />
          <Comments postId={post.id} />

        </Wrapper>
      </React.Fragment>
    )
  }
}

export default PostScreen
