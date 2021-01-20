<!--  -->
<template>
<div class=''>
  <div class="slid" ref="slidref">
    <p class="tol" @mousedown='move($event)' :style='`left:${jd}px;`' ref="tol"></p>
    <p v-for="i in Math.round(ts/60)" :key="i"
    class="Scale"><span class="abs">{{i | fliteri(i)}}</span></p>
  </div>
</div>
</template>

<script>
export default {
  props:['jd','ts'],
components: {},
  data () {
    return {
    };
  },

  filters: {
    fliteri(i){
      if(i%5 == 1){
        return '00:' + (i-1)      
      }
    }
  },
  watch: {},
  computed: {},

  methods: {
    move(evnt){
      console.log('asdf');
      let obj = this.$refs.tol
      let that = this
      let ismove = false;
      //获得元素坐标。
        var left = obj.offsetLeft;
        var top = obj.offsetTop;
        var width = obj.offsetWidth;
        var height = obj.offsetHeight;

        //计算出鼠标的位置与元素位置的差值。
        var cleft = evnt.clientX - left;

        //获得容器坐标。
        var container = this.findPosition(this.$refs.slidref);
        var containerLeft = 0;
        var containerTop = container[1];
        var containerWidth = container[4];
        var containerHeight = container[5];
        console.log('container[4] :>> ', container[4]);

        /*计算出容器的范围坐标。*/

        //开始 X 坐标。
        var startX = containerLeft;
        //结束 X 坐标。
        var maxX = startX + containerWidth - width;
      
        document.onmousemove = function (doc) {
            //计算出移动后的坐标。
            var moveLeft = doc.clientX - cleft;
            //不可以超出指定的范围。
            if (moveLeft >= startX && moveLeft <= maxX) {
                //当移动位置在范围内时，元素跟随鼠标移动。
                obj.style.left = moveLeft + "px";
                console.log(moveLeft,startX,maxX);
            } else {
                /****************以下为处理当鼠标的位置不在范围内里，鼠标的移动，里面的元素也要跟着移动*****************/
                //向右移动时，如果移动坐标没有大于最大 X 坐标，则移动，否则设置成最大 X 坐标的值。
                if (moveLeft >= startX && moveLeft <= maxX) {
                    obj.style.left = moveLeft + "px";
                } else if (moveLeft > maxX) {
                    obj.style.left = maxX + "px";
                } else if (moveLeft < startX) {
                    obj.style.left = startX + "px";
                }
            }
            // 移动完成
            ismove = true;
        }
        
            evnt.stopPropagation();
        // 抬起的时候进行清除事件
        document.onmouseup = function () {
          // 执行  是否进行了移动
          if(ismove){
            console.log('执行');
            // 执行播放事件
            // 回调父组件播放视频时间
            setTimeout(()=>{
              // 播放时间 = 当节进度*像素
            that.$emit('myplay',parseInt(obj.style.left.replace(/[^0-9]/ig,''))*60/30)

            ismove = false
            },0)
          }


            evnt.stopPropagation();
            document.onmousemove = function () { }
        }
            evnt.stopPropagation();
      // let obj = this.$refs['tol']
      // e = e || window.event; //事件对象
      //   var x_down = e.clientX; //鼠标按下X的坐标
      //   var leftDown = e.target.offsetLeft; //获取盒子的初始left值
      //   //获得元素坐标。
      //   var left = obj.offsetLeft;
      //   var width = obj.offsetWidth;

      //     // 获取容器信息
      //       var childr = this.findPosition(obj)
      //       var box = this.findPosition(this.$refs.slidref)

      //     /*计算出容器的范围坐标。*/
      //     //开始 X 坐标。
      //     var startX = obj.style.left.replace(/[^0-9]/ig,"") || 0;
      //     //结束 X 坐标。
      //     var maxX = box[4] - width;


      //   document.onmousemove = function(e) { //鼠标移动事件
      //       e = e || window.event;
      //       var x_move = e.clientX; //鼠标移动X的坐标
      //       //移动的坐标减去按下的坐标 = 移动的距离
      //       var x_now = x_move - x_down;
      //       console.log('开始 X 坐标。'+startX,x_move,x_now);
    
      //       //不可以超出指定的范围。
      //       if (box[4]-x_now  >= startX && box[4]-x_now <= maxX) {
      //           //当移动位置在范围内时，元素跟随鼠标移动。
      //           obj.style.left = x_now+ "px";
      //           console.log('当移动位置在范围内时 :>> ', box[4]-x_now , startX ,  box ,width);
      //           console.log(startX);
                
      //       }
      //       else {
      //           /****************以下为处理当鼠标的位置不在范围内里，鼠标的移动，里面的元素也要跟着移动*****************/
      //           //向右移动时，如果移动坐标没有大于最大 X 坐标，则移动，否则设置成最大 X 坐标的值。
      //           if (x_now>= startX && x_now<= maxX) {
      //               obj.style.left = x_now+ "px";
      //           } else if (x_now> maxX) {
      //               obj.style.left = maxX + "px";
      //           } else if (x_now< startX) {
      //               obj.style.left = startX + "px";
      //           }
                
      //           console.log('当移动位置在范围内时2 :>> ', obj.style.left);
      //       }
      //       e.stopPropagation();
      //   }
      //   document.onmouseup = function() { //鼠标抬起事件
      //       //清除移动和抬起事件
      //       console.log('清除移动和抬起事件');
      //       this.onmousemove = this.onmouseup = null
      //   }
      //   e.stopPropagation();
      //   return false //阻止默认事件
    },
    // 获取元素坐标
    //获得元素的坐标与大小。
    findPosition(oElement) {
        var x2 = 0;
        var y2 = 0;
        var width = oElement.clientWidth;
        var height = oElement.clientHeight;
        if (typeof (oElement.offsetParent) != 'undefined') {
            for (var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent) {
                posX += oElement.offsetLeft;
                posY += oElement.offsetTop;
            }
            x2 = posX + width;
            y2 = posY + height;
            return [posX, posY, x2, y2, width, height];

        } else {
            x2 = oElement.x + width;
            y2 = oElement.y + height;
            return [oElement.x, oElement.y, x2, y2, width, height];
        }
    }
  },
  mounted(){
  },
}

</script>
<style scoped lang='scss'>
.slid{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  position: relative;
  width: 100%;
  // height: 100px;
  border-right: 1px solid chartreuse;
  border-left: 1px solid chartreuse;
  cursor: pointer;
  .tol{
    position: absolute;
    height: 30px;
    width: 3px;
    background: chocolate;
    bottom: 0;
    left: 0;
    z-index: 3;
    transform: translateX(-1px);
    &::before{
      position: absolute;
      content: '';
      border-width: 10px;
      border-style: solid;
      border-color: transparent;
      border-top-color: red;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.Scale{
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 1rem;
  min-width: 30px;
  height: 25px;
  border-right: 1px solid chartreuse;
}
.abs{
  position: absolute;
  top: 0;
  left: 0;
}
</style>