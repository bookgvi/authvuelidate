<template>
  <div class="login">
    <b-modal
      id="login"
      v-model="show"
      no-close-on-esc
      no-close-on-backdrop
      hide-header-close
      ok-only
      centered
    >
      <template #modal-footer class="bg-danger">
        <div class="w-100 bg-danger"></div>
      </template>
      <b-form @submit="onLogin">
        <b-form-group>
          <label class="w-100"> <h4>Login:</h4>
            <b-form-input
              :value="name"
              @input.native="hInput($event, 'name', 'login')"
              :state="login"
            />
          </label>
          <label class="w-100"> <h4>Password:</h4>
            <b-form-input
              type="password"
              :value="pass"
              @input.native="hInput($event, 'pass', 'password')"
              :state="password"
            />
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
      show: true,
      name: '',
      login: null,
      pass: '',
      password: null
    }
  },
  methods: {
    async onLogin (e) {
      e.preventDefault()
      const { data, errors } = await login({ login: this.name, password: this.pass })
      if (data) {
        localStorage.setItem('jwt', data.access_token)
        this.$router.replace('/')
      } else if (errors) {
        errors.forEach(item => {
          this[item.source] = false
        })
      }
    },
    hInput (e, chValue, isRequired) {
      this[chValue] = e.target.value
      this[isRequired] = null
    }
  }
}
</script>

<style scoped>

</style>
