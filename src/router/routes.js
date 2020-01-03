import { Auth } from '../helper/Auth'
const auth = Object.create(Auth.prototype)
const routes = [
  {
    path: '/login',
    name: 'login',
    beforeEnter: auth.isAuth,
    component: () => import('../views/Login')
  },
  {
    path: '/',
    beforeEnter: auth.isNotAuth,
    component: () => import('../views/Home'),
    children: [
      {
        path: '',
        component: () => import('../views/Main')
      },
      {
        path: 'main',
        name: 'main',
        component: () => import('../views/Main')
      },
      {
        path: 'hello',
        name: 'hello',
        component: () => import('../views/Hello')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/About')
      }
    ]
  }
]

export default routes
