<!--  -->
<template>
  <div>
    <a-row>
      <a-col :span='0' :lg="{span:'6'}" :xl="{span:'5'}">
        <div>
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
        </div>
      </a-col>
      <a-col :span='24' :lg='{span:"10",offset:"1"}' :xl='{span:"16",offset:"1"}'>
        content
      </a-col>
      <a-col :span='0' :lg="{span:'6',offset:'1'}" :xl='{span:"5",offset:"1"}'>
        <div>
          <ul v-for="(itme, index) in 3" :key="index">
            <li v-for="(it2, idx2) in 3" :key="idx2">{{it2}}</li>
          </ul>
        </div>
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
</style>