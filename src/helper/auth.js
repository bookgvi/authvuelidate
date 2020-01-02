export const Auth = function () {}
Auth.prototype = {
  isAuth (to, from, next) {
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      next('/')
    }
  },
  isNotAuth (to, from, next) {}
}


