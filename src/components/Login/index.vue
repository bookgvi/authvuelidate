<template>
  <b-container class="testing">
    <b-row class="mt-2">
      <b-col cols="2" class="pr-2 pl-0">
        <h3><b-badge v-b-tooltip.hover title="bv-modal - click" @click="$bvModal.show('bv-modal-example')" class="text-truncate w-100" style="cursor: pointer;">b-badge: No variant</b-badge></h3>
      </b-col>
      <b-col cols="2" class="pr-2 pl-0">
        <h3><b-badge title="modal - click" @click="$bvModal.show('modal-1')" class="text-truncate w-100" variant="danger" style="cursor: pointer;">b-badge: Danger variant</b-badge></h3>
      </b-col>
      <b-col cols="2" class="pr-2 pl-0">
        <h3><b-badge @click="$bvModal.show('modal-1')" class="text-truncate w-100" variant="primary" style="cursor: pointer;">b-badge: Primary variant</b-badge></h3>
      </b-col>
      <b-col cols="2" class="pr-2 pl-0">
        <h3><b-badge @click="$bvModal.show('modal-1')" class="text-truncate w-100" variant="success" style="cursor: pointer;">b-badge: Success variant</b-badge></h3>
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
      <b-col cols="3" class="pl-0" align="start">
        <label>Integer input:&nbsp;<span style="color: red;">*</span>
          <b-form-input
            type="text"
            :value="intVal"
            @input.native="hInteger($event, 'vuelidateInt')"
            @blur="vuelidateThis(intVal, 'vuelidateInt')"
            :state="vuelidateInt"
            class="mt-1"
          />
          <b-form-invalid-feedback> * Required, must be at least 2 digits</b-form-invalid-feedback>
        </label>
      </b-col>
      <b-col cols="3" align="start">
        <label>Float or integer input: &nbsp; <span style="color: red;">*</span>
          <b-form-input
            type="text"
            :value="numberVal"
            @input.native="hNumber($event, 'vuelidateNumber')"
            @blur="vuelidateThis(numberVal, 'vuelidateNumber')"
            :state="vuelidateNumber"
            class="mt-1"
          />
          <b-form-invalid-feedback> * Required, must be at least 2 digits </b-form-invalid-feedback>
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
      vuelidateInt: null,
      numberVal: '',
      vuelidateNumber: null
    }
  },
  methods: {
    vuelidateThis (val, vuelidateProp) {
      this[vuelidateProp] = val.length >= 2
    },
    hInteger (e, vuelidateProp) {
      e.target.value = this.util.integerInput(e.target.value)
      this.intVal = e.target.value
      this[vuelidateProp] = null
    },
    hNumber (e, vuelidateProp) {
      e.target.value = this.util.floatInput(e.target.value)
      this.numberVal = e.target.value
      this[vuelidateProp] = null
    }
  }
}
</script>

<style scoped>

</style>
