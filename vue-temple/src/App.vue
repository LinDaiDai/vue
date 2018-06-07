<template>
  <div id="app">
    <router-link to="/demo-5">DemoFive</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import DemoFive from './components/DemoFive.vue'
export default {
  name: 'App',
  components: {
    DemoFive
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
