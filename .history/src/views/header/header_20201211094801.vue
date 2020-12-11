<!--  -->
<template>
<div class="header-x">
  <a-row>
    <a-col :span="4" lg='6'>
        <a-icon type="fullscreen" 
        @click="阿"
        v-if="isshow"/>
        {{window.document.body.offsetWidth}}
      <a-avatar shape="square" :src='userimg' :size="40" icon="user" />
      <a-button type="link">
      {{name}}
      </a-button>
    </a-col>
    <a-col span="0" offset='10' :lg='{offset:6,span:12}' >
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="blog"> <a-icon type="mail" /></a-menu-item>
        <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon type="setting" />Navigation Three - Submenu</span
          >
          <a-menu-item-group title="Item 1">
            <a-menu-item key="setting:1">
              Option 1
            </a-menu-item>
            <a-menu-item key="setting:2">
              Option 2
            </a-menu-item>
          </a-menu-item-group>
          <a-menu-item-group title="Item 2">
            <a-menu-item key="setting:3">
              Option 3
            </a-menu-item>
            <a-menu-item key="setting:4">
              Option 4
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-menu-item key="alipay">
          <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
            >Navigation Four - Link</a
          >
        </a-menu-item>
      </a-menu>
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
    isshow(){
      console.log(' window.document.body.offsetWidth :>> ',  window.document.body.offsetWidth);
      return window.document.body.offsetWidth
    }
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