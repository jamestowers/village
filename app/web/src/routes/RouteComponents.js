// import loadable from 'loadable-components'
import { lazy } from 'react'

export const Home = lazy(() => import('../screens/Home'));
export const Post = lazy(() => import('../screens/Post'));

/**
 * MISC
 */
export const Error404 = lazy(() => import('../screens/Error404'))
