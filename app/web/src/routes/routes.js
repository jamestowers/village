import * as Components from './RouteComponents'

const routes = [
  {
    path: '/',
    component: Components.Home,
    auth: false
  },
  {
    path: '/posts/:id',
    component: Components.Post,
    auth: false
  },
  {
    path: '/posts/:id/edit',
    component: Components.PostEdit,
    auth: false
  }
]

export default routes
