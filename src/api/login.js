import Vue from 'vue'
const URL = '/api/auth/login'
export const login = async payload => {
  const { login, password } = payload
  const { data } = await Vue.prototype.$axios.post(URL, { login, password })
  return data
}
