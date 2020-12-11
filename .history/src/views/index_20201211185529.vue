<!--  -->
<template>
<div>
  <a-row type='flex' justify='center'>
    <a-col 
    span='24'
    :lg="{span:16}"
    >
    <div class="time-box">
      <a-timeline>
        <a-timeline-item color="green" v-for="(item , index) in 4" :key="index">
          <myarticle/>
        </a-timeline-item>
      </a-timeline>
    </div>
    </a-col>
  </a-row>
  <div>
    <a-back-top />
  </div>
</div>
</template>

<script>
import myarticle from 'v/cmpent/article'
export default {

  components: {
    myarticle,
},
  data () {
    return {
      targetOffset: undefined,
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
    this.targetOffset = window.innerHeight / 2;
},
}

</script>
<style scoped lang='scss'>
div{
  border: .3px solid rebeccapurple;
}
.time-box{
  margin: 20px 0;
  width: 100%;
  text-align: left;
  padding: 30px 0;
}
</style>