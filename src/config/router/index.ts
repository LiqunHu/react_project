// import React from 'react'
import { lazy } from 'react'
import Home from '@/views/Home'
// import Login from '@/views/Login'
// import Board from '@/views/Board'
import Nomatch from '@/views/Nomatch'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('@/views/Login'))
  },
  {
    path: '/board',
    exact: true,
    component: lazy(() => import('@/views/Login'))
  },
  {
    path: '*',
    component: Nomatch
  }
]

export default routes
