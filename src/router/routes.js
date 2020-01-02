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
    name: 'main',
    beforeEnter: auth.isNotAuth,
    component: () => import('../views/Main')
  }
]

export default routes
