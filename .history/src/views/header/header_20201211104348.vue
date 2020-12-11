<!--  -->
<template>
<div class="header-x">
  <a-row align='middle' type='flex' justify='space-between'>
    <a-col flex='auto' 
    :lg="{span:'12'}"
    span='1'
    class="ul_flat"
    >
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="blog"> <a-icon type="mail" /></a-menu-item>
        <a-menu-item key="mail"> <a-icon type="mail" />a</a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon type="setting" />a</span
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

    <a-col lg='6' :span="4"  >
        <a-icon type="fullscreen" 
          @click="阿"
          v-if="isicon"/>
      <a-avatar shape="square" :src='userimg' :size="40" icon="user" />
      <a-button type="link">
      {{name}}
      </a-button>
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
      name:'ahh',
      isicon:'',
    };
  },

  filters: {

},

  watch: {
},

  computed: {
},

  methods: {
    bodysize(){
      this.isicon = window.document.body.offsetWidth < 992
    },

},  

  mounted(){
    window.addEventListener('resize',this.bodysize,false)
},
}

</script>
<style scoped lang='scss'>
.header-x{
  position: fixed;
  height: 60px;
  width: 100%;
  .ant-menu-root {
    border:none
  }
  .ant-menu-horizontal{
    box-sizing: border-box;
    border:none
    .ant-menu-item{
      line-height: 60px;
      height: 60px;
    }
    height: 60px;
  }
}
</style>