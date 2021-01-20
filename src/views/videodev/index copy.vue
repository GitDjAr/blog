<!--  -->
<template>
  <div>
    <div class="video-">
      <div id="mse" class="msecss"></div>
    </div>

    <div class="jd-">
      <div class="jian">
        <!-- <div class="left-"  @click="leftfun">
      左键
    </div> -->
        <div class="scroll-box" ref="scroll">
          <div class="zhong" @click="transf" ref="zhong">
            <div class="t1" v-for="a in 3">
              <div class="t2" v-for="i in 10" @click="deg">{{ i }}</div>
              <div class="t2-2" @click="degpuls">知识点{{ a }}</div>
            </div>
          </div>
        </div>
        <!-- <div class="right-" @click="rightfun">
      右键
    </div> -->
      </div>
      <div class="totl">功能条</div>
    </div>
  </div>
</template>

<script>
import Player from 'xgplayer';
import BScroll from '@better-scroll/core'
export default {

  components: {

},
  data () {
    return {
      // 进度偏移量
      schedule:0,
    };

  },
  
  beforeDestroy() {
    this.bs.destroy()
  },
  methods: {
    play(){
      
      let player = new Player({
        'id': 'mse',
        'url': 'https://ips.ifeng.com/video19.ifeng.com/video09/2020/11/11/p37716472-102-009-094225.mp4?reqtype=tsl&vid=453c064e-ff47-4397-aaf0-d410da4556b5&uid=1HhumR&from=v_Free&pver=vHTML5Player_v2.0.0&sver=&se=&cat=&ptype=&platform=pc&sourceType=h5&dt=1606121022901&gid=t_9CgXX0ReW1&sign=2d4d04435c218d49510438ceb12dff9e&tm=1606121022901',
        "playsinline": true,
        "whitelist": [
            ""
        ] 
      });
    },
    verScroll() {
      this.bs = new BScroll(this.$refs.scroll, {
        // click:true,
        scrollX: true,
        probeType: 3 // listening scroll event
      })
    },
    transf(e){
      let dom = this.$refs['zhong']
      let {width,transform} = window.getComputedStyle(dom)
      console.log(window.getComputedStyle(dom));
      console.log(width,transform);


    },
    degpuls(e){
      // console.log(e.target);
    },
    deg(e){
      console.log(e);
      // let dom = this.$refs['tolist']
      // dom.style.left = `${this.schedule + 50}px`
      // this.schedule -= 50
      // console.log(dom.style.rigth);
    }
},

  mounted(){
    this.play()
    this.$nextTick(()=>{
        this.verScroll()
      })
},
}

</script>
<style scoped lang='scss'>
.jd- {
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  height: 100px;
  width: 100%;
  border: 1px solid red;
  overflow: hidden;
  //
  .left- {
    position: absolute;
    left: 0;
    background: red;
    top: 0;
    width: 30px;
    height: 50px;
    cursor: pointer;
  }
  .right- {
    cursor: pointer;
    position: absolute;
    right: 0;
    background: red;
    top: 0;
    width: 30px;
    height: 50px;
  }
  .scroll-box {
    overflow: hidden;
    border: salmon 1px solid;
    .zhong {
      display: inline-block;
      white-space: nowrap;
      .t1 {
        display: inline-block;
        .t2 {
          height: 50px;
          width: 50px;
          display: inline-block;
          padding: 0;
          border-right: 1px solid rebeccapurple;
          border-left: 1px solid rebeccapurple;
        }

        .t2-2 {
          border: 1px solid royalblue;
          width: 100%;
        }
      }
    }
  }
}
.totl {
  height: 20px;
  background: cadetblue;
}
</style>