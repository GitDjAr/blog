<!--  -->
<template>
<div class="bx">
  <div class="video-">
      <!-- <div id="mse" class="msecss"  ref="videoref"></div> -->
      <video :src="videosrc" ref="videoref"></video>
      <!-- <div style="background:red;height:50px;width:50px"  ref="videoref"></div> -->
  </div>
  <div class="scroll-box" ref="scroll">
    <div class="zhong" ref="zhong">
        <myslider :jd='child_jd' :ts='datas.times'  @myplay="myplay"></myslider>
      <div class="t1" v-for="(it, i) in Object.keys(datas.ls)" :key="i">
        <div class="t2" v-for="(tm,x) in datas.ls[it]" :key="x" 
        @click="deg(tm.index)"
        :class='tm.ifcheck?"checkcss":""'
        ref='t2ref'>{{tm.t}}</div>
        <div class="t2-2">知识点{{it}}</div>
      </div>
        <!-- <a-slider v-model='value2' :max='600' :tooltip-visible="true" @change="change" /> -->
    </div>
  </div>
  
  <a-row :gutter="16">
    <a-col :span="8">
      <a-card  title="进度条" style="width: 300px">
      <a-button @click="start">play</a-button>
      <a-button @click="resver">reserve</a-button>
      <a-button @click="arrinit">初始化/arrinit</a-button>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card  title="播放器控件" style="width: 300px">
      <a-button @click="myplay">myplay/pause</a-button>
      <a-button @click="stop">stop</a-button>
      </a-card>
    </a-col>
    <a-col :span="8">
      <a-card  title="节数" style="width: 300px">
      <a-button @click="Single">选中单节/Single choice</a-button>
      <!-- <a-button @click="revel">反选/revel</a-button>
      <a-button @click="current">当节播放</a-button> -->
      </a-card>
    </a-col>
  </a-row>
  
  <div>
    
  </div>
</div>
</template>

<script>
import Player from 'xgplayer';
import BScroll from '@better-scroll/core'
import myslider from './jdt'
export default {

  components: {
    myslider,

},
  data () {
    return {
      // 播放器
      player:'',
      // jdt:''
      value2:0,
      // 总长度
      videosrc:'  ',
      // 当前播放的视频信息
      video:{
        src:undefined,
        index:undefined,
        time:undefined,
        name:'',
      },
      // 定时器
      t:'',
      // 时长
      datas:{
        times:1401,
        ls:{
          a1:[
            {
              t:316,
              index:'0',
              url:require('../../../static/video/1.mp4'),
            },
            {
              t:184,
              index:'1',
              url:require('../../../static/video/2.mp4'),
            }
          ],
          a2:[
            {
              t:297,
              index:'2',
              url:require('../../../static/video/8.mp4'),
            },
            {
              t:266,
              index:'3',
              url:require('../../../static/video/7.mp4'),
            }
            ,{
              t:167,
              index:'4',
              url:require('../../../static/video/5.mp4'),
            },
            {
              t:171,
              index:'5',
              url:require('../../../static/video/6.mp4'),
            },
          ]
        }
      },
      // 扁平化
      vidarray:[],
      // 子组件进度条
      child_jd:10,
    };
  },
  methods: {
    // 切换节
    deg(i){
      let vidom = this.$refs.videoref;
      // 清除定时器
      clearInterval(this.t)
      console.log('i :>> ', i,this.vidarray);
      let lf = 0 ;
      // if(i==0){
      //   this.vidarray.forEach((element,ei) => {
      //     if(i2>ei){
      //       lf += parseInt(element.t)
      //     }else{
      //       return false
      //     }
      //   });
      // }else{
      //   this.vidarray.forEach((element,ei) => {
      //     if(i2+2>ei){
      //       lf += parseInt(element.t)

      //     }else{
      //       return false
      //     }
      //   });
      // }
      // 计算需要跳的时长  前边播放的时长
      this.vidarray.forEach((e,ei)=>{
        if(i>ei){
          lf += parseInt(e.t);
          console.log('lf :>> ', lf);
        }
      })
          console.log('初始化lf :>> ', lf);
      this.child_jd = lf*30
      // 切换播放链接
      vidom.src = this.vidarray[i].url;
      // 开始播放
      try {
          if(vidom.paused){
            this.$nextTick(()=>{
              vidom.play()
            })
            console.log('播放成功');
          }
      } catch (error) {
        // 当前视频出现失误
        console.log('当前视频出现失误'+error);
      }
      // 开始播放执行 定时器,
      this.t = setInterval(()=>{
        let a=0;
        a = 30/60*vidom.currentTime
        this.child_jd = parseInt(a.toFixed(1)) + lf*0.5
        console.log('this.child_jd :>> ', this.child_jd,parseInt(a.toFixed(1)),vidom.currentTime,);
        // 当前视频  是否播放 结束
        if(vidom.ended){
          // 调用播放列表
          let b = this.vidend(i)
        }
        // if(vidom.ended && this.vidarray[i].ifcheck){
        //   this.deg(++i)
        // }
      },1000)
      // 结束时 清除定时器 (待完善功能)
      // 9000.40.91.41.92.42.93.43.9
    },
    // 播放结束
    vidend(id){
      for (let i = 0; i<this.vidarray.length; i++) {
        if(i>id && this.vidarray[i].ifcheck){
          this.deg(i)
          break;
        }
      }
      // return 
      // this.$refs.videoref
    },
    // 初始化
    arrinit(){
      this.vidarray = [];
      // 选择的题目 array
      let arrkey = Object.keys(this.datas.ls)
      let arrvle = Object.values(this.datas.ls)
      this.vidarray = [].concat(...arrvle)
      console.log('this.vidarray :>> ', this.vidarray);
      console.log(arrkey,arrvle,this.vidarray);
      // 创建 switch case
      // let fun = new Array;
      // for (let i = 0; i < this.vidarray.length; i++) {
      //   if(this.vidarray[i].ifcheck){
      //     fun[i] = `case ${this.vidarray[i].t}: this.value2 += ${this.vidarray[i].t};console.log(${this.vidarray[i].t});break;`
      //     console.log(this.vidarray[i].ifcheck);
      //   }
      // }
      // fun.push('default:console.log("默认")')
      // // 执行器
      // let actuator = `switch(this.value2){${fun.join(' ')}}`
      // this.mn(actuator)
      // console.log(actuator);
    },
    // 模拟器
    mn(act){
      if(this.t != '')clearInterval(this.t)
      console.log(typeof this.t);
      // 构造函数
      let fun = new Function('vle','switch(vle){ case 62: return 62;console.log(62);break;  case 64: this.value2 += 64;console.log(64);break;  case 63: this.value2 += 63;console.log(63);break;  case 65: this.value2 += 65;console.log(65);break;  case 64: this.value2 += 64;console.log(64);break;  case 63: this.value2 += 63;console.log(63);break;  case 65: this.value2 += 65;console.log(65);break; default:console.log("默认")}');
      // Function.prototype.apply(fun,()=>{})
// let aa = fun(68)
// console.log("12"+aa);
      this.t = setInterval(() => {
        try {
          fun(this.value2)
          
          // this.value2++
        } catch (error) {
          console.log('error :>> ', error);
        }
        // switch(this.value2){ case 62: this.value2 += 62;console.log(62);break;  case 64: this.value2 += 64;console.log(64);break;  case 63: this.value2 += 63;console.log(63);break;  case 65: this.value2 += 65;console.log(65);break;  case 64: this.value2 += 64;console.log(64);break;  case 63: this.value2 += 63;console.log(63);break;  case 65: this.value2 += 65;console.log(65);break; default:console.log("默认")}
        if(this.value2>=this.datas.times){
          clearInterval(this.t)
        }
        this.value2++;
      }, 50);
    },
    start(){
      this.mn()
    },
    resver(){
      // this.value2 = 0
      clearInterval(this.t)
    },
    change(e){
      this.value2 = e
      this.mn()
    },


    /**@param times string */
    // 视频控件
    myplay(times){
      console.log('this.$refs.videoref :>> ', this.$refs.videoref);
      let vd = this.$refs['videoref']
      console.log('times :>> ', times,);
      // 创建 switch case
      let fun = new Array;
      let sumber = 0;
      for (let i = 0; i < this.vidarray.length; i++) {
        sumber += parseInt(this.vidarray[i].t)
        // if(this.vidarray[i].ifcheck){
          fun[i] = `case (${sumber} >= k):return ${i};break;`
        // }
      }
      fun.push('default:console.log("默认")')
      // 执行器
      let actuator = `let k = value;switch(true){${fun.join(' ')}}`
      // 判断当前是哪个视频
      let isvideo = new Function('value',actuator)
      let vindex = isvideo(times);
      // 切换到对于视频
      this.$refs.videoref.src = this.vidarray[vindex].url
      console.log('isvideo(times) :>> ', isvideo(times));
      // 计算当前视频以前的时长
      let time_length = this.vidarray.reduce((total,i,idx)=>{
        if (idx < vindex) {
          return  total + i.t
        }
          return total
      },0) 
      console.log('时长 :>> ', time_length);
        // 减去多余的时长
        this.$refs.videoref.currentTime = times-time_length;
        // this.player.currentTime = times*60/30
        // 调用播放
        this.deg(vindex)
      // this.$nextTick(()=>{
      //   this.$refs.videoref.play()
      //   // this.player.play()
      // })

    },
    stop(){
      let vd = this.$refs['videoref']
      if(vd.paused){
        this.deg(1)
      }else{
        vd.pause()
      }
      // 清除计时器
      clearInterval(this.t)
    },
    verScroll() {
      this.bs = new BScroll(this.$refs.scroll, {
        // click:true,
        scrollX: true,
        probeType: 3 // listening scroll event
      })
    },
    // 单选
    Single(){
      let dt = Object.keys(this.datas.ls)
      let dl = Object.values(this.datas.ls)
      dt.forEach((e, i)=> {
        console.log(this.datas.ls[e],i);
        this.datas.ls[e].forEach((el, il) => {
          if(il%2 === 0){
            this.$set(this.datas.ls[e][il],'ifcheck',false)
          }else{
            this.$set(this.datas.ls[e][il],'ifcheck',true)
          }
        });
      });
      console.log(
        this.datas.ls
      );
    },
    // 初始化视频播放器
    videoinit(){
      this.player = new Player({
        "id": "mse",
        "url":'',
        "playsinline": true,
        "whitelist": [
            ""
        ]
    })
    }
},

  mounted(){
      this.verScroll()
      this.Single()
      this.arrinit()
      this.videoinit()
    // this.$nextTick(()=>{
    //   this.verScroll()
    // })
    // this.arrinit()
    setTimeout(() => {
      let dl = [].concat(...Object.values(this.datas.ls))
      let dom = this.$refs.t2ref
      console.log(dom);
      dom.forEach((e,i)=>{
        e.style.width = dl[i].t*0.5+'px'
      })
      // 清除定时器
      for (let i = 0; i < 999; i++) {
        clearInterval(i)
      }
    }, 100);
},
beforeDestroy(){
  this.bs.destroy()
}
}

</script>
<style scoped lang='scss'>
.bx{
  width: 80%;
  margin: 10%;
}
.video-{
  width: 60%;
  margin: 10px 20%;
  video{
    width: 100%;
  }
}
.jdt{
  width: 100%;
  height: 20px;
  border: saddlebrown 1px solid;
}
  .scroll-box{
    overflow: hidden;
    border: salmon 1px solid;
    .zhong{
      display: inline-block;
      white-space:nowrap;
      .t1{
          display: inline-block;
        .t2{
          box-sizing: border-box;
          height: 50px;
          width: 150px;
          display: inline-block;
          padding: 0;
          border-right: 1px solid rebeccapurple;
          border-left: 1px solid rebeccapurple;
          
        }
        // & .t2:nth-of-type(2n-1){
        //   background: salmon;
        // }
        
        .t2-2{
          border:1px solid royalblue;
          width: 100%;
        }
      }
      
    }
  }
  // 选择状态
  .checkcss{
    background: #4186f3;
    color: #fff;
  }
</style>