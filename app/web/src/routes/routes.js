import * as Components from './RouteComponents'

const routes = [
  {
    path: '/',
    component: Components.Home,
    auth: false,
    prefetch: true
  },
]

export default routes
