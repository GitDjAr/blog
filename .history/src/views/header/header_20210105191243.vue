<!--  -->
<template>
<div class="header-x">
  <a-row align='middle' type='flex' justify='space-between'>
    <a-col 
    :lg="{span:'12'}"
    span='2'
    class="ul_flat"
    >
    <a-switch checked-children="开" un-checked-children="关" default-checked 
    :checked='status'
    @click="onChange"/>
      <a-menu v-model="current" mode="horizontal"
      @click='titleClick '>
        <a-menu-item key="index"> <a-icon type="mail" />博客</a-menu-item>
        <a-menu-item key="about"> <a-icon type="mail" />关于我</a-menu-item>
        <a-sub-menu>
          <span slot="title" class="submenu-title-wrapper"
            ><a-icon type="setting" />教程</span
          >
          <a-menu-item-group title="Item 1">
            <a-menu-item key="notes">
              笔记
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
      // 状态
      status:this.$store.state.Switch_,
      userimg:userimg,
      name:'ahh',
      isicon:'',
      current: ['mail'],
    };
  },

  filters: {

},

  watch: {
},

  computed: {
},

  methods: {
    titleClick (e){
      this.$router.push({
        path:e.key
      })
    },
    onChange(){
      alert(1)
      // this.$store.commit('Switch_',!this.status)
    }
},  

  mounted(){
    window.addEventListener('resize',this.bodysize,false)
},
}

</script>
<style scoped lang='scss'>
.header-x{
  position: fixed;
  z-index: 100;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
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