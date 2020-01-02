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
  </b-container>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

</style>
