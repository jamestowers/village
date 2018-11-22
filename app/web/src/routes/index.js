// @flow
import React, { Suspense } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import routes from './routes'
import { Error404 } from './RouteComponents'
import ErrorBoundary from '../components/ErrorBoundary'

import type { AUTH_TYPE } from 'Types/auth'
import type { ROUTE_OBJECT_TYPE } from 'Types/routes'

import ScrollToTop from './ScrollToTop'


const PrivateRoute = (
  { component: Component, ...routeProps }: { component: Function }
) => (
    <Route
      {...routeProps}
      // TODO: type should be ContextRouter but that is not working right now
      render={(props: Object) => (
        routeProps.isAuthenticated === true
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location } // eslint-disable-line react/prop-types
          }}//  state: { referrer: props.location }
          />
      )}
    />
  )


type Props = {
  auth: AUTH_TYPE,
}


class AppRouter extends React.PureComponent<Props> {

  /**
   * @name nestedRoutes
   * @description Loop through all the app's routes and render a `Route` component, if a route
   * requires the user to be logged in (`route.auth` is not falsy) the render the private route
   * component.
   * If a route also has child routes then render those as well.
   * @param {Array} appRoutes array of routes and their child routes
   * @param {String} base Current path to append the route to, only used for child routes - root
   * routes have a `base` of '', if a child route is being rendered then its base will the path of
   * the parent route. eg: '/categories/finance' has a base of 'categories'
   * @return Renders a series of `Route` components
   */
  nestedRoutes(appRoutes: $ReadOnlyArray<ROUTE_OBJECT_TYPE> = routes, base: string = '') {
    const output = []
    appRoutes.map((route) => {
      /**
       * Prefetch the route components if needed
       */
      if (route.prefetch != null) {
        // $FlowFixMe
        route.component.load()
      }

      /**
       * If route requires Auth then show the PrivateRoute which
       * redirects to login page when user is not logged in
      */
      const component = route.auth != null
        ? (<PrivateRoute
          key={route.path}
          exact
          path={`${base}${route.path}`}
          component={route.component}
          isAuthenticated={this.props.auth.token != null}
        />)
        : (<Route
          key={route.path}
          exact
          path={`${base}${route.path}`}
          component={route.component}
        />)

      output.push(component)

      /**
       * If route has child routes, run this loop again to create them
       */
      if (route.routes) {
        output.push(this.nestedRoutes(route.routes, route.path))
      }
      return output
    })
    return output
  }

  render() {
    return (
      <ErrorBoundary>
        <ScrollToTop>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {
                // nestedRoutes just outputs all the app's routes so that the switch componenst can
                // switch between them
                this.nestedRoutes()
              }
              <Route path="*" component={Error404} />
            </Switch>
          </Suspense>
        </ScrollToTop>
      </ErrorBoundary>
    )
  }
}

export default withRouter(AppRouter)
