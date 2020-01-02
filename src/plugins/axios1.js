import axios from 'axios'
import Vue from 'vue'

const config = {
  baseUrl: 'http://pre.ugoloc.ucann.ru'
}
const instance = axios.create(config)

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('user-token')
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
}, error => Promise.reject(error))

instance.interceptors.response.use(resp => {
  return resp
}, error => {
  const response = error.response
  if (response) {
    switch (response.status) {
      case 401:
      case 403:
        localStorage.removeItem('user-token')
        window.location.href = '/login'
        break
    }
  }
  return Promise.reject(error)
})

Plugin.install = Vue => {
  Vue.axios = instance
  window.axios = instance
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get () { return instance }
    },
    axios: {
      get () { return instance }
    }
  })
}
Vue.use(Plugin)

export default Plugin
