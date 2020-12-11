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
        <a-timeline-item color="green">
          <comment/>
        </a-timeline-item>
      </a-timeline>
    </div>
    </a-col>
  </a-row>
  <template>
  <div>
    <a-back-top />
  </div>
</template>
</div>
</template>

<script>
import comment from 'v/cmpent/comment'
export default {

  components: {
    comment,
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