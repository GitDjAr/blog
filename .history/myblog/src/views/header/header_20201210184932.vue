<!--  -->
<template>
<div class="header-x">
  <a-row>
    <a-col :span="6">
      <a-avatar shape="userimg" :size="64" icon="user" />
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
      userimg:userimg
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