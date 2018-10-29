import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'

import { AppLoading, Asset, Font, Icon } from 'expo'
import AppNavigator from './navigation/AppNavigator'

import store from './store'
import theme from './theme'

const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.palette.background};
`
export default class App extends React.PureComponent {
  state = {
    isLoadingComplete: false,
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.onLoadingError}
          onFinish={this.onFinishLoading}
        />
      )
    } else {
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Wrapper>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <AppNavigator />
            </Wrapper>
          </ThemeProvider>
        </Provider>
      )
    }
  }

  loadResourcesAsync = async () => {
    return Promise.all([
      /* Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]), */
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
        'Lora-regular': require('./assets/fonts/Lora-Regular.ttf'),
      }),
    ])
  }

  onLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  onFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}
