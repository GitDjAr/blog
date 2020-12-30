<!--  -->
<template>
<div>
  <a-affix :offset-top='120'>
    <title>最新文章</title>
    <div class="" v-for="item in art"
    :key="item.id">
  
    </div>
  </a-affix>
  <a-affix>
    <title>热门</title>
    <div class="hot" v-for="item in hot" :key="item.id"></div>
  </a-affix>
</div>
</template>

<script>
export default {

  components: {

},
  data () {
    return {
    };
  },

  methods: {

},

  mounted(){

},
}

</script>
<style scoped>

</style>