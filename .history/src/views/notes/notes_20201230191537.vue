<!--  -->
<template>
  <div>
    <a-row>
      <a-col :span='0' :lg="{span:'5'}" :xl="{span:'4'}"
      class="col-lefe">
        <a-affix :offset-top='100'>
          <a-collapse default-active-key="1" :bordered="false"
          expand-icon-position='right'>
            <template #expandIcon="props">
              <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
            </template>
            <a-collapse-panel key="1" header="js" :style="customStyle">
              <router-link tag='div' v-for="(item, index) in 4"
              class="nav_list"
              :to="{path:'/'+`notes/${item.Classification}`,query}"
              :key="index"
              :class="isshow==index?'':'is_check'"
              >{{item}}</router-link>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="css" :style="customStyle">
              <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="vue" :style="customStyle">
              <p>{{ text }}</p>
            </a-collapse-panel>
          </a-collapse>
        </a-affix>
      </a-col>
      <a-col :span='24' :lg='{span:"13",offset:"1"}' :xl='{span:"15",offset:"1"}'>
        <div class="notes-box">
          content
          <a-buttom type='text' icon='question'>
            有什么疑问?
          </a-buttom>
        </div>
      </a-col>
      <a-col :span='0' :lg="{span:'4',offset:'1'}" :xl='{span:"3",offset:"1"}'
      class="guding">
        <a-affix :offset-top='120'>
          <div class="menu-notes">
            <a-anchor :target-offset="targetOffset">
              <a-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
              <a-anchor-link href="#components-anchor-demo-static" title="Static demo" />
              <a-anchor-link href="#API" title="API">
                <a-anchor-link href="#Anchor-Props" title="Anchor Props" />
                <a-anchor-link href="#Link-Props" title="Link Props" />
              </a-anchor-link>
            </a-anchor>
          </div>
        </a-affix>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isshow:'0',
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      customStyle:
        'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
    };
  },
  mounted(){
  
},

  methods: {
  
}
}

</script>
<style scoped lang='scss'>
.nav_list{
  margin: 5px 10px;
  width: 100%;  
  height: 35px;
  line-height: 35px;
}
.nav_list:hover{
  background: rgb(242, 242, 242);
}
.is_check{
  color: rgb(15, 117, 253);
}
.notes-box{
  box-sizing: border-box;
  padding: 30px 0;
  background: #4186f4;
  height: 2000px;
}
</style>