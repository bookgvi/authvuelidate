export const Auth = function () {}
Auth.prototype = {
  isAuth (to, from, next) {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      next('/')
    } else {
      next()
    }
  },
  isNotAuth (to, from, next) {
    const jwt = localStorage.getItem('jwt')
    if (!jwt) {
      next('/login')
    } else {
      next()
    }
  }
}
Object.defineProperty(Auth.prototype, 'constructor', {
  value: Auth,
  enumerable: false
})
