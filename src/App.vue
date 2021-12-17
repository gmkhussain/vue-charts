<template>
  <router-link to="/">Home</router-link>
  <router-link to="/charts">Charts</router-link>
  <hr />
  <router-link to="/ch2">Ch 2</router-link>
  <router-link to="/ch3">Ch 3</router-link>
  <router-link to="/ch4">Ch 4</router-link>
  <router-link to="/ch5">Ch 5</router-link>
  <router-link to="/ch6">Ch 6</router-link>
  <router-link to="/ch7">Ch 7</router-link>
  <router-link to="/ch8">Ch 8</router-link>
  <hr />
  
  <router-link to="/chart-js">Chart Ext JS</router-link>

  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
body {
  background: #222;
  color: #fff;
}
body a {
    color: #fff;
    display: inline-block;
    margin: 0 4px;
}
</style>
