import Vue from 'vue'
const URL = '/api/auth/login'
export const login = async payload => {
  const { login, password } = payload
  try {
    const { data } = await Vue.prototype.$axios.post(URL, { login, password })
    return data
  } catch (err) {
    console.warn('...Catched', err)
    return err
  }
}
