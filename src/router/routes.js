const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/',
    name: 'main',
    component: () => import('../views/Main')
  }
]

export default routes
