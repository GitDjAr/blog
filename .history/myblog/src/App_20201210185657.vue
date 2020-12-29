<template>
  <div id="app">
    <headers></headers>
    <div class="conten">
      <router-view/>
    </div>
  </div>
</template>

<script>
import headers from 'v/header/header'
export default {
  components:{
    headers,
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
  .conten{
    width: 1100px;
  }
}

</style>
