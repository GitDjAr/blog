<!--  -->
<template>
<div class="header-x">
  <a-row>
    <a-col :span="6">
      <a-avatar shape="square" :src='userimg' :size="64" icon="user" />
      <a-button type="link">
      {{name}}
      </a-button>
    </a-col>
    <a-col :span="12" :offset='6'>
      col-12
    </a-col>
  </a-row>
</div>
</template>

<script>
import userimg from '@/assets/image/1.jpg'
export default {

  components: {

},
  data () {
    return {
      userimg:userimg,
      name:'ahh'
    };
  },

  filters: {

},

  watch: {

},

  computed: {

},

  methods: {

},

  mounted(){

},
}

</script>
<style scoped lang='scss'>
.header-x{
  position: fixed;
  height: 60px;
  width: 100%;
}
</style>