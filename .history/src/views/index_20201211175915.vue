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
    :lg="{span:'3'}" >
    <template>
      <a-anchor :target-offset="targetOffset">
        <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
        <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
        <a-anchor-link href="#API" title="API">
          <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
          <a-anchor-link href="#Link-Props" title="Link Props" />
        </a-anchor-link>
      </a-anchor>
    </template>
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
export default {

  components: {

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