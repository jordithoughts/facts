<template>
  <div id="app">
    <Command start="hello"/>
  </div>
</template>

<script>
import Command from './components/Command.vue'

export default {
  name: 'App',
  components: {
    Command
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
