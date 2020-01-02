<template>
  <div class="login">
    <b-modal
      id="login"
      no-close-on-esc
      no-close-on-backdrop
      hide-header-close
      ok-only
      ok-title="Login"
      centered
    >
      <template #modal-footer>
        <b-col align="center" class="w-100">
          <b-button variant="primary">QQQ</b-button>
        </b-col>
      </template>
      <b-form>
        <b-form-group>
          <label class="w-100"> <h4>Login:</h4>
            <b-form-input></b-form-input>
          </label>
          <label class="w-100"> <h4>Password:</h4>
            <b-form-input type="password"></b-form-input>
          </label>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'loginDialog',
  mounted () {
    this.$bvModal.show('login')
  }
}
</script>

<style scoped>

</style>
