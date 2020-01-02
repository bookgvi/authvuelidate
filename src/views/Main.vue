<template>
  <div class="content">
    <div class="row">
      <div class="col">
        This is main content
      </div>
    </div>
    <div class="row">
      <div class="col">
        <LearningBootstrap />
      </div>
    </div>
  </div>
</template>

<script>
import LearningBootstrap from '../components/LearningBootstrap/index'
export default {
  name: 'Main',
  components: { LearningBootstrap }
}
</script>
