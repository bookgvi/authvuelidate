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
      :footer-bg-variant="footerBgVariant"
      :header-bg-variant="footerBgVariant"
    >
      <template #modal-header class="bg-danger">
        <div v-if="isError" align="center" class="w-100">
          <h4>Ошибка авторизации</h4>
        </div>
      </template>
      <template #modal-footer class="bg-danger">
        <div></div>
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
          <label class="w-100 mt-4"> <h4>Password:</h4>
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
      footerBgVariant: 'warning',
      isError: false,
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
        this.footerBgVariant = 'danger'
        this.isError = true
        errors.forEach(item => {
          this[item.source] = false
        })
      }
    },
    hInput (e, chValue, isRequired) {
      this[chValue] = e.target.value
      this[isRequired] = null
      this.footerBgVariant = 'warning'
      this.isError = false
    }
  }
}
</script>

<style scoped>

</style>
