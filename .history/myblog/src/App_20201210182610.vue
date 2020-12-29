<template>
  <div id="app">
    <header></header>
    <router-view/>
  </div>
</template>

<script>
import header from 'v/header/header'
export default {
  components:{
    header,
  },
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
