<template>
  <div class="content">
    <div class="row">
      <div class="col">
        This is main content
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login/index'
export default {
  name: 'Main',
  components: { Login }
}
</script>
