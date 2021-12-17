<template>
  <router-link to="/">Home</router-link>
  <router-link to="/charts">Charts</router-link>
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
