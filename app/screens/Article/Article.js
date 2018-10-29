import React from 'react'
import { ScrollView, View } from 'react-native'
import styled from 'styled-components'

import Page from '../../components/Page'
import Hero from '../../components/Hero'
import { H1 } from '../../components/Text/Headings'
import BodyText from '../../components/Text'

const Content = styled.View`
  padding: 0 ${props => props.theme.spacing.space3};
`

const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: props => {
    return {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }
})``


class ArticleScreen extends React.PureComponent {
  static navigationOptions = {}

  render() {
    const { post: { attributes } } = this.props
    return (
      <Page padding={false}>
        <Scroll>
          <Hero source={{ uri: attributes.image }} />
          <Content>
            <H1>{attributes.title}</H1>
            <BodyText>{attributes.body}</BodyText>
          </Content>
        </Scroll>
      </Page>
    )
  }
}

export default ArticleScreen
