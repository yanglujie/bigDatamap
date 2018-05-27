<template>
  <div :class="targetName">
    <!-- <div class="container-jianzhu"  ref="initImg" > -->
  	    <div class="jianzhu" ref="initImgsrc" :id="targetName" @click="getDesc">
              <div style="margin-top:10px;margin-left:52%">
                    <Icon type="ios-location" :color="colorStatus" :size="15"></Icon> 
              </div> 
          </div>
        <div class="jianzhu-name" ref="name">{{targetName}}</div>
        <!-- <div class="description" ref="desc">
		   <div class="targetNumber">靶标编号：01_KAI_01.1</div>
		   <div class="link">www.baidu.com</div>
		   <div class="decimg"><img style="height: 12vh;width: 15vw;" src="@/img/desc.png"></div>
		 </div> -->
  </div>
</template>
<script>
// const mapWidth = 7680
// const mapHeight = 4320
// const screenWidth = 1920
// const screenHeight = 1080
//  let initpositon = mapWidth*3/8;//2880
//  初始化背景图片位置的百分比（1920-7680）*x = -2880 得到x = 0.5 y同理
// const imgList = document.querySelector('.jgetImg')
const clientWidth = document.documentElement.clientWidth
const clientHeight = document.documentElement.clientHeight

export default {
    props: {
        // 移动的靶标名，如：01_KAI_01.1
        name: {
            type: String,
            default: ''
        },
        // 靶标的种类
        myname: {
            type:Number,
            default: ''
        },
        // 自身的靶标名，如：01_KAI_01.1
        targetName : {
            type: String,
            default: ''
        },
        disMap: {
            type: Object,
            default: function() {
                return {x: 0, y:0}
            }
        },
        dragPosition: {
            type: Object,
            default: function() {
                return {dragx: 0, dragy:0}
            }
        },
       initLeft: {
            type: Number,
            default: '0'
       },
       initTop: {
            type: Number,
            default: '0' 
       },
       archDesc: {
            type: String,
            default: ''
       },
       detailDesc: {
           type: String,
           default: ''
       },
       url: {
           type: String,
           default: ''
       },
       status: {
            type: Number,
            default: 0
       },
    },
    data () {
        return {
            xn: 0,
            yn: 0,
            clickName: '',
            oldx: 0,
            oldy: 0,
            eltarget: null,
            targetx: 0,
            targety: 0,
            descflag: false,
            ratio: this.$store.state.config.ratio,
            jianzhuType: '',
            colorStatus: 'red'
        }
    },
    computed: {
        initUrl: function() {
            let src = `../static/img/${this.jianzhuType}.png`
            return src
        }
    },
    watch: {
        dragPosition: {
//             handler(newValue, oldValue) {

//                 // debugger
//                 console.log('graggggg')
//                 console.log(newValue)
//                 this.getoldDis()
//                 console.log(this.oldx)
//                 console.log(this.oldy)
//                 let x1 = this.oldx + newValue.dragx
//                 let y1 = this.oldy + newValue.dragy
//                 console.log('------grafff')
//                 console.log(x1)
//                 console.log(y1)
//                 // let el=  document.querySelector('.jianzhu')
//                 this.$refs.initImgsrc.style.webkitTransform = `translate3d(${x1}px, ${y1}px, 0) scale(1)`
//                 this.$refs.initImgsrc.style.transform = `translate3d(${x1}px,${y1}px,0) scale(1)`
//                 this.$refs.desc.style.webkitTransform = `translate3d(${x1}px, ${y1}px, 0)`
//                 this.$refs.desc.style.transform = `translate3d(${x1}px,${y1}px,0))`
//                 this.$refs.name.style.webkitTransform = `translate3d(${x1}px, ${y1}px, 0)`
//                 this.$refs.name.style.transform = `translate3d(${x1}px,${y1}px,0))`  
//     　　　　},
// 　　　　    deep: true
        },
        disMap: {
            handler(newValue, oldValue) {
                console.log('dismap bianhua')
                // debugger
                if (this.name !== this.targetName) {
                    console.log('buxiangdeng yidongba')
                    this.getoldDis()
                    let x1 = this.oldx + newValue.x
                    let y1 = this.oldy + newValue.y
                    // let el = document.querySelector('.jianzhu')
                    this.$refs.initImgsrc.style.webkitTransform = `translate3d(${x1}px, ${y1}px, 0) scale(1)`
                    this.$refs.initImgsrc.style.transform = `translate3d(${x1}px,${y1}px,0) scale(1)`
                    // this.$refs.desc.style.webkitTransform = `translate3d(${x1}px, ${y1}px, 0)`
                    // this.$refs.desc.style.transform = `translate3d(${x1}px,${y1}px,0))`
                    this.$refs.name.style.webkitTransform = `translate3d(${x1}px, ${y1}px, 0)`
                    this.$refs.name.style.transform = `translate3d(${x1}px,${y1}px,0))`
                }
    　　　　},
　　　　    deep: true
        },
        
        name: function (val, oldVal) {
            console.log('getname')
            console.log(val)
            console.log(this.targetName)
            console.log(this.disMap)
            this.name = val
            if(val === this.targetName) {
                console.log('xiangdeng')
                this.getMoveDis(val)
            } 
            // else {
            //     console.log('buxiangdeng yidongba')
            //     this.getoldDis()
            //     let x1 = this.oldx + this.disMap.x
            //     let y1 = this.oldy + this.disMap.y
            //     console.log(x1)
            //     console.log(y1)
            //     console.log(this.disMap.x)
            //     console.log(this.disMap.y)
            //     let el =  document.getElementById(this.targetName)
            //     // let el = document.querySelector('.jianzhu')
            //     el.style.webkitTransform = `translate3d(${x1}px, ${y1}px, 0)`
            //     el.style.transform = `translate3d(${x1}px,${y1}px,0)`
            // }
        }
    },
    components: {

    },
    methods: {
        getMoveDis (val) {
            console.log('target shiwoshiwo')
            let el =  document.getElementById(this.targetName)
            this.eltarget = el
            let rect = el.getBoundingClientRect()
            let x = rect.left
            let y = rect.top
            let objWidth = el.offsetWidth
            let objHeight = el.offsetHeight
            let xc = (clientWidth - objWidth) / 2
            let yc = (clientHeight - objHeight) / 2
            console.log('------------666')
            console.log(clientWidth)
            console.log(this.ratio)
            //  图片需要移动的距离
            this.xn = xc - x
            this.yn = yc - y
            this.disMap.x = this.xn
            this.disMap.y = this.yn
            this.getoldDis()
            this.$emit('getdisMap', this.disMap)
            let x1 = this.oldx + this.xn
            let y1 = this.oldy + this.yn
            this.targetx = x1
            this.targety = y1
            el.style.webkitTransform = `translate3d(${x1}px, ${y1}px, 0) scale(2)`
            el.style.transform = `translate3d(${x1}px,${y1}px,0) scale(2)`
            // this.$refs.desc.style.webkitTransform = `translate3d(${x1}px, ${y1}px, 0)`
            // this.$refs.desc.style.transform = `translate3d(${x1}px,${y1}px,0))`
            this.$refs.name.style.webkitTransform = `translate3d(${x1}px, ${y1}px, 0)`
            this.$refs.name.style.transform = `translate3d(${x1}px,${y1}px,0))`
            // this.transitionEnd()
        },
        getoldDis () {
            let el =  document.getElementById(this.targetName)
            let oldtrans = el.style.transform
            if (oldtrans) {
                console.log('oldtra')
                console.log(oldtrans)
                // debugger
                let disstr = oldtrans.substring(oldtrans.indexOf("(")+1,oldtrans.indexOf(")")); 
                let disarr = disstr.split(',')
                console.log(disarr)
                this.oldx = Number(disarr[0].substring(0, disarr[0].length - 2));
                this.oldy = Number(disarr[1].substring(0, disarr[1].length - 2));
            }
        },
        getDesc (e) {
            e.stopPropagation()
            let name = this.targetName
            console.log(this.targetName)
            this.$store.commit(this.$store.types.GET_DETAIL, {name: name , content: this.detailDesc, url: this.url, archDetail:this.archDesc})

            // if (!this.descflag) {
            //     this.$refs.desc.style.opacity = 1
            //     this.$refs.desc.style.zIndex = 9999                
            //     this.descflag = true
            // } else {
            //     this.$refs.desc.style.opacity = 0
            //     this.$refs.desc.style.zIndex = 0
            //     this.descflag = false
            // }
            // console.log('kanwo')
        },
        deleteDesc() {
            this.$refs.desc.style.opacity = 0
        },
        toBig (e) {
            e.stopPropagation()
            if (this.eltarget) {
                this.eltarget.style.webkitTransform = `translate3d(${this.targetx}px, ${this.targety}px, 0) scale(2)`
                this.eltarget.style.transform = `translate3d(${this.targetx}px, ${this.targety}px, 0) scale(2)`
            }
        },
        transitionEnd () {
            this.eltarget.addEventListener('webkitTransitionend', this.toBig, false)
 	        this.eltarget.addEventListener('transitionend', this.toBig, false)
        },
        addName () {
            this.jianzhuType = 'jianzhu' + this.myname
        },
        getTargetType() {
            this.colorStatus = this.status == 0?'red' : 'yellow'
        }
    },
    created () {
        this.addName()
        this.getTargetType()
        // console.log('target draggg')
        // console.log(this.dragPosition)
        
    },
    mounted() {
        this.$refs.initImgsrc.style.marginLeft =`${this.initLeft / this.ratio}px` 
        this.$refs.initImgsrc.style.marginTop = `${this.initTop / this.ratio}px`
        this.$refs.name.style.marginLeft =`${this.initLeft / this.ratio}px` 
        this.$refs.name.style.marginTop = `${this.initTop / this.ratio + 188 / this.ratio + 20}px`
        this.$refs.name.style.width =`${174 / this.ratio}px` 
        console.log(this.ratio)
        console.log(174 / this.ratio)
        this.$refs.initImgsrc.style.width =`${288 / this.ratio}px` 
        this.$refs.initImgsrc.style.height =`${162 / this.ratio}px`
        this.$refs.initImgsrc.style.backgroundSize =`${288 / this.ratio}px ${162/ this.ratio}px`            
        let left = parseInt(this.initLeft) + 250
        // this.$refs.desc.style.marginLeft =`${left / this.ratio}px` 
        // this.$refs.desc.style.marginTop = `${this.initTop / this.ratio}px`
        this.$refs.initImgsrc.style.backgroundImage = `url(${this.initUrl})`
        // console.log('target draggg')
        // console.log(this.dragPosition)
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contentjianzhu {
    -webkit-transition: 1s all;
    -moz-transition: 1s all;
    transition: 1s all;
}
.jianzhu-name {
    position: absolute;
    color: white;
    opacity: 0.5;
    transition: 1s all;
    text-align: center;
}
.container-jianzhu {
	width: 174px;
    height: 188px; 
    position: absolute
}
.description {
    height: 10vh;
    width: 15vw;
    /* margin-left: 700px;
    margin-top: 200px; */
    /*display:none;*/
    /* margin-top: 26px; */
    /* background-color: red; */
    transition: opacity 1s ease-in-out;
    transition: 1s all;
    color: white;
    position:absolute;
    opacity:0;
    /* z-index: 9999; */
}
.description .decimg {
    height: 6vh;
    width: 15vw;
}
.description .targetNumber {
    height: 2vh;
    width: 15vw;
    line-height: 2vh;
    background-color: #185379;
    opacity: 0.8;
}
.description .link {
    height: 2vh;
    width: 15vw;
    line-height: 2vh;
    background-color: black;
    opacity: 0.7;
    border: 1px solid #00ecff;
    margin-bottom: 0.5vh;
}
.jianzhu{
    width: 288px;
    height: 162px; 
    background-size: 288px 162px;
    background-repeat: no-repeat;
     -webkit-animation:run 1s steps(1) infinite ;
    animation:run 1s steps(1) infinite ;
     -webkit-transition: 1s all;
    -moz-transition: 1s all;
    transition: 1s all;
    position: absolute;
     -webkit-transition: 1s all;
    -moz-transition: 1s all;
    transition: 1s all;
    cursor: pointer;
}
@-webkit-keyframes run {
  0% {
    background-position: 0 0
	}
  /* 33.33%{
    background-position: -172px 0
  }
  66.66%{
    background-position: -344px 0
  }
  100%{
    background-position: 0 0
  } */

}
</style>
