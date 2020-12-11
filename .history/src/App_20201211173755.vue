<template>
  <div id="app">
    <headers></headers>
    <div class="conten">
      <transition enter-class='myenter-class'>
        <router-view/>
      </transition>
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
    max-width: 1100px;
    margin: auto;
    padding-top: 62px;
  }
  .myenter-class{
	-webkit-animation: fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: fade-in-left 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
@-webkit-keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes fade-in-left {
  0% {
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

}

</style>
