<template>
  <div class="hello">
    Home
    <LineChart :data="[99, 71, 78, 25, 36, 92]" />
  </div>
</template>

<script>
import LineChart from './ChartsPage.vue'
export default {
  name: 'HomePage',
  components: {
    LineChart
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
