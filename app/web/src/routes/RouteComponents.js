// import loadable from 'loadable-components'
import { lazy } from 'react'

export const Home = () => import('../screens/Home')
export const Post = () => import('../screens/Post')

/**
 * MISC
 */
export const Error404 = () => import('../screens/Error404')
