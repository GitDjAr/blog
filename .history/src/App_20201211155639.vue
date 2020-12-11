<template>
  <div id="app">
    <headers></headers>
    <div class="conten">
      <router-view/>
    </div>
    <footers
    v-if="this.$route.meta.foter"></footers>
  </div>
</template>

<script>
import headers from 'v/header/header'
import footers from 'v/footer/footer'
export default {
  components:{
    headers,
    footers
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
    // width: 1100px;
    // margin: auto;
    padding-top: 62px;
  }
}

</style>
