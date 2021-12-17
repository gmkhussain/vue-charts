<template>
  <div class="hello">
    Charts
    <!-- <InlineChart :data="dataObj" /> -->
    <!-- <LineChart :data="dataArray" /> -->
    <Ch1 />
  </div>
</template>

<script>
// import LineChart from './Charts/LineChart.vue'
// import InlineChart from './Charts/InlineChart.vue'

import Ch1 from './Charts/Ch1.vue'

export default {
  name: 'HomePage',
  components: {
    // LineChart,
    // InlineChart,
    Ch1
  },
  props: {
    msg: String
  },
  data() {
    return {
      dataArray: [99, 71, 78, 25, 36, 92],
      dataObj: [
                { date: '2009-01-01', fruit: "Apples", sales: 130 },
                { date: '2010-01-01', fruit: "Bananas", sales: 40 },
                { date: '2011-01-01', fruit: "Apples", sales: 130 },
                { date: '2012-01-01', fruit: "Bananas", sales: 40 },
                { date: '2013-01-01', fruit: "Apples", sales: 130 },
                { date: '2014-01-01', fruit: "Bananas", sales: 40 },
                { date: '2015-01-01', fruit: "Apples", sales: 130 },
                { date: '2015-08-01', fruit: "Bananas", sales: 40 }
              ]
    }
  }
}
</script>

<style scoped>

</style>
