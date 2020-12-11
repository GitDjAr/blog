<!--  -->
<template>
<div>
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
        <a-affix :offset-top="top">
          <a-anchor :target-offset="targetOffset">
            <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
            <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
            <a-anchor-link href="#API" title="API">
              <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
              <a-anchor-link href="#Link-Props" title="Link Props" />
            </a-anchor-link>
          </a-anchor>
        </a-affix>
      </template>
      </a-col>
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
<style scoped>

</style>