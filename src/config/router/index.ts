// import React from 'react'
// import { Navigate } from 'react-router-dom';
import Home from '@/views/Home'
import Login from '@/views/Login'
import Board from '@/views/Board'
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
    component: Login
  },
  {
    path: '/board',
    exact: true,
    component: Board
  },
  {
    path: '*',
    component: Nomatch
  }
]

export default routes
