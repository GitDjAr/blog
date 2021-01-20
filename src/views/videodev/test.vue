<!--  -->
<template>
<div class='aa' ref="aas">
  <p class="" ref='pa' @mousedown="move"></p>
  <!-- <div class="slid" >
    <p></p>
    <li v-for="a in 60">{{a}}</li>
  </div>
  <div v-for="i in 3" :key="i" class="box">
    <div v-for="t in 10" :key="t" class="boxchild">{{t}}</div>
    <div>{{i}}</div>
  </div> -->
</div>
</template>

<script>
export default {
components: {},
  data () {
    return {
    };
  },

  filters: {},
  watch: {},
  computed: {},

  methods: {
    move(e){  
      let frm = this.$refs.aas
      let dom = this.$refs.pa
      console.log(e,dom);
      // 获取父元素坐标
      let fx = frm.clientLeft
      let fy = frm.clientTop
      // 子元素坐标
      let cx = e.x
      let offx = e.offsetX

      console.log(fx,cx,offx);
    }
  },

  mounted(){},
}

</script>
<style scoped lang='scss'>p{
    position: absolute;
    width: 50px;
    height: 50px;
    background: cornflowerblue;
  }
.aa{
  width: 50%;
  margin: auto;
  margin-top: 150px;
  height: 300px;
  border: 1px solid rebeccapurple;
}
.slid{
  position: relative;
  height: 10px;
  li{
  background: chocolate;
  display: inline-block;
    height: 20px;
    width: 20px;
  }
  p{
    position: absolute;
    width: 50px;
    height: 50px;
    background: cornflowerblue;
  }
}
.box{
  display: inline-block;
  border:1px solid rebeccapurple;
  padding: 10px;
  .boxchild{
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-left: 10px;
  }
}
</style>