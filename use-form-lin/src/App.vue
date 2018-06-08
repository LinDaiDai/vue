<template>
  <div id="app">
    <h3>use form-lin</h3>
    <formlin @submit="submitForm"></formlin>
  </div>
</template>

<script>
import formlin from 'form-lin'
export default {
  name: 'App',
  components: {
    formlin: formlin
  },
  data () {
    return {

    }
  },
  methods: {
    submitForm($event) {
      console.log($event);
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
