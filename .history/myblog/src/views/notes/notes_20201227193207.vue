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
            <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
              <p v-for="(item, index) in 4"
              class="nav_lsit">{{item}}</p>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="This is panel header 2" :style="customStyle">
              <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="This is panel header 3" :style="customStyle">
              <p>{{ text }}</p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
.nav_lsit{
  margin: 5px 10px;
  width: 100%;  
  height: 35px;
  line-height: 35px;
}
.nav_lsit:hover{
  background: rgb(242, 242, 242);
}
is_check{
  color: rgb(15, 117, 253);
}
</style>