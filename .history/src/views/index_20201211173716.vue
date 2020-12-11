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
        Create a services site 2015-09-01
      </a-timeline-item>
      <a-timeline-item color="green">
        Create a services site 2015-09-01
      </a-timeline-item>
      <a-timeline-item color="red">
        <p>Solve initial network problems 1</p>
        <p>Solve initial network problems 2</p>
        <p>Solve initial network problems 3 2015-09-01</p>
      </a-timeline-item>
      <a-timeline-item>
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </a-timeline-item>
      <a-timeline-item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </a-timeline-item>
      <a-timeline-item color="gray">
        <p>Technical testing 1</p>
        <p>Technical testing 2</p>
        <p>Technical testing 3 2015-09-01</p>
      </a-timeline-item>
    </a-timeline>
    </div>
    </a-col>
  </a-row>
  <a-row >
    <a-col 
    span='0'
    :lg="{offset:'1', span:'4'}">
    </a-col>
    <a-col 
    span='24'
    :lg="{span:'14'}"></a-col>
    <a-col
    span='0'
    :lg="{span:'3'}" >200px</a-col>
  </a-row>
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
div{
  border: .3px solid rebeccapurple;
}
.time-box{
  width: 100%;
}
</style>