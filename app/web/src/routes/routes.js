import * as Components from './RouteComponents'

const routes = [
  {
    path: '/',
    component: Components.Home,
    auth: false
  },
  {
    path: '/post/:id',
    component: Components.Post,
    auth: false
  },
]

export default routes
