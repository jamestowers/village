// import loadable from 'loadable-components'
import { lazy } from 'react'

export const Home = lazy(() => import('../screens/Home'));

/**
 * MISC
 */
export const Error404 = lazy(() => import('../screens/Error404'))
