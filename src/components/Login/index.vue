<template>
  <b-container class="testing">
    <b-row class="mt-2">
      <b-col cols="1" class="py-0 pl-0">
        <h3><b-badge>b-badge: No variant</b-badge></h3>
      </b-col>
      <b-col cols="1" class="py-0 pl-0">
        <h3><b-badge variant="danger">b-badge: Danger variant</b-badge></h3>
      </b-col>
      <b-col cols="1" class="py-0 pl-0">
        <h3><b-badge variant="primary">b-badge: Primary variant</b-badge></h3>
      </b-col>
      <b-col cols="1" class="py-0 pl-0">
        <h3><b-badge variant="success">b-badge: Success variant</b-badge></h3>
      </b-col>
    </b-row>
    <b-row align-h="start" class="mt-2">
      <b-col cols="3" align="start" class="px-0">
        <b-button v-b-modal.modal-1>Launch demo modal</b-button>

        <b-modal id="modal-1" title="BootstrapVue">
          <p class="my-4">Hello from modal!</p>
        </b-modal>
      </b-col>
      <b-col cols="3" align="start" class="px-0">
        <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>

        <b-modal id="bv-modal-example" hide-footer>
          <template v-slot:modal-title>
            Using <code>$bvModal</code> Methods
          </template>
          <div class="d-block text-center">
            <h3>Hello From This Modal!</h3>
          </div>
          <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
        </b-modal>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="2" class="pl-0" align="start">
        <label>Integer input:
          <b-form-input type="text" :value="intVal" @input.native="hInteger" class="mt-1" />
        </label>
      </b-col>
      <b-col cols="3" align="start">
        <label>Float or integer input:
          <b-form-input type="text" :value="numberVal" @input.native="hNumber" class="mt-1" />
        </label>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { Util } from '../../helper/Util'

export default {
  name: 'login',
  data () {
    return {
      util: Object.create(Util.prototype),
      intVal: '',
      numberVal: ''
    }
  },
  methods: {
    hInteger (e) {
      e.target.value = this.util.integerInput(e.target.value)
      this.intVal = e.target.value
    },
    hNumber (e) {
      e.target.value = this.util.floatInput(e.target.value)
      this.numberVal = e.target.value
    }
  }
}
</script>

<style scoped>

</style>
