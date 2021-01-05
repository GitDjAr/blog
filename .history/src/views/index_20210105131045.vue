<!--  -->
<template>
<div>
  <a-row type='flex' justify='center'>
    <a-col 
    span='24'
    :lg="{span:20}"
    >
    <div class="hello">
      <div>
        <p class="title">Hello! 我是 <font color='#4186fe'>cyinc</font></p>
        <p class="text">致力于用自己所学帮助所需要的朋友，来看看吧，说不定有你需要的类容呢</p>
        <p class="icon- bounce-left">
          <myicon class="color-i" icon-class='qq'/>
          <myicon class="color-i" icon-class='b'/>
          <myicon class="color-i" icon-class='github'/>
        </p>
        <a-button @click="attention"
        :size='size'
        class="bounce-left">关注不迷路</a-button>
      </div>
      <div></div>
    </div>
    <div class="time-box">
      <a-timeline>
        <a-timeline-item color="green" v-for="(item , index) in 4" :key="index">
          <myarticle/>
        </a-timeline-item>
      </a-timeline>
    </div>
    </a-col>
  </a-row>
  <div>
    <a-back-top />
  </div>
</div>
</template>

<script>
import myarticle from 'v/cmpent/article'
import '@/assets/svg/2021.svg'
export default {

  components: {
    myarticle,
},
  data () {
    return {
    };
  },

  methods: {
    attention(){
      let a = document.createElement('a');
      a.href='https://www.baidu.com';
      a.target='_blank'
      a.click();
    },  
},

  mounted(){
    this.targetOffset = window.innerHeight / 2;
},
}

</script>
<style scoped lang='scss'>
div{
  // border: .3px solid rebeccapurple;
}
.time-box{
  margin: 20px 0;
  width: 100%;
  text-align: left;
  padding: 30px 0;

}
  .hello{
    display: grid;
    align-items: center;
    height: calc(100vh - 60px);
    grid-template-columns: 7fr 10fr;
    padding: 50px 0;
    font-size: 50px;
    text-align: left;
    background: url(../assets/svg/2021.svg)#fff 100%/45vw no-repeat ;
    background-position:  right;
    .text{
      font-size: 18px;
    }
    .color-i{
      font-size: 36px;
      color: #4186f4;
      cursor: pointer;
    }
  }
  .bounce-left {
	-webkit-animation: bounce-left 0.8s ;
	        animation: bounce-left 0.8s ;
}
@-webkit-keyframes bounce-left {
  0% {
    -webkit-transform: translateX(-48px);
            transform: translateX(-48px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateX(-26px);
            transform: translateX(-26px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateX(-13px);
            transform: translateX(-13px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateX(-6.5px);
            transform: translateX(-6.5px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87%,
  98% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}
@keyframes bounce-left {
  0% {
    -webkit-transform: translateX(-48px);
            transform: translateX(-48px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    -webkit-transform: translateX(-26px);
            transform: translateX(-26px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  65% {
    -webkit-transform: translateX(-13px);
            transform: translateX(-13px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  82% {
    -webkit-transform: translateX(-6.5px);
            transform: translateX(-6.5px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  93% {
    -webkit-transform: translateX(-4px);
            transform: translateX(-4px);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87%,
  98% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    opacity: 1;
  }
}

@media screen and (max-width:992px){
  .hello{
    padding: 20px;
    grid-auto-flow:column;
    align-items: flex-start;
    grid-template-columns: 1fr 0fr;
    justify-items: start;
    &:nth-of-type(1){
      background: url(../assets/svg/2021.svg)#fff 100%/100vw no-repeat ;
      background-position:  bottom;
    }
  }
}
</style>