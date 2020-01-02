<template>
  <div class="login">
    <b-modal
      id="login"
      no-close-on-esc
      no-close-on-backdrop
      hide-header-close
      ok-only
      centered
    >
      <template #modal-footer>
        <span></span>
      </template>
      <b-form @submit="onLogin">
        <b-form-group>
          <label class="w-100"> <h4>Login:</h4>
            <b-form-input v-model="login"></b-form-input>
          </label>
          <label class="w-100"> <h4>Password:</h4>
            <b-form-input type="password" v-model="password"></b-form-input>
          </label>
          <b-col align="center" class="w-100 mt-4">
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-col>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { login } from '../../api/login'
export default {
  name: 'loginDialog',
  data () {
    return {
      login: '',
      password: ''
    }
  },
  mounted () {
    this.$bvModal.show('login')
  },
  methods: {
    async onLogin (e) {
      e.preventDefault()
      const { data } = await login({ login: this.login, password: this.password })
      if (data) {
        localStorage.setItem('jwt', data.access_token)
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style scoped>

</style>
