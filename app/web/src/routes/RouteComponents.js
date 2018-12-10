// import loadable from 'loadable-components'
// import { lazy } from 'react'

import HomeComp from '../screens/Home'
import PostComp from '../screens/Post'
import Error404Comp from '../screens/Error404'

export const Home = HomeComp // lazy(() => import('../screens/Home'))
export const Post = PostComp // lazy(() => import('../screens/Post'))

/**
 * MISC
 */
export const Error404 = Error404Comp // lazy(() => import('../screens/Error404'))
