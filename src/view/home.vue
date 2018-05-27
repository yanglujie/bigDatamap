<template>
  <div class="home" ref="homewidth" style="height:100%;position:relative">
    <div class="container yidong" ref="el2" @click="moveMap">
    <div class="container1">
        <!-- <div class="list"> -->
        <!-- <div class="title">
            <div class="title-left">靶标列表</div>
            <div class="title-right">
                <div class="left-text">
                    <div class="title-true" style="float:left"></div>
                    <div style="float:right">真实靶标</div>
                </div>
                <div class="right-text">
                    <div class="title-false" style="float:left"></div>
                    <div style="float:right">虚拟靶标</div>
                </div>
            </div>
        </div> -->
        <!-- <ul class="content" style="margin-top: 0vh;"  @click="moveTarget">
            <li class="list-row" id="toimg1">
                <div class="row-left">靶标：01_KAI_01.1</div>
                <div class="row-right redlevel"></div>
            </li>
            <li class="list-row" id="toimg2">
                <div class="row-left">靶标：01_KAI_01.2</div>
                <div class="row-right redlevel"></div>
            </li>
            <li class="list-row" id="toimg3">
                <div class="row-left">靶标：01_KAI_01.3</div>
                <div class="row-right redlevel"></div>
            </li>
            <li class="list-row" id="toimg4">
                <div class="row-left">靶标：01_KAI_01.4</div>
                <div class="row-right redlevel"></div>
            </li>
            <li class="list-row" id="toimg5">
                <div class="row-left">靶标：01_KAI_01.5</div>
                <div class="row-right redlevel"></div>
            </li>
        </ul> -->
        <!-- </div> -->
        <div class="jgetImg">
            <!--<img class="beijing" src="beijing.jpg">-->
            <div v-for="item in targetsAll">
                <targets :name="goalname" :myname='item.type' :disMap="disMap" :initLeft='item.locationX' :initTop='item.locationY' :targetName="item.targetName" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition" :url="item.url" :archDesc="item.archDesc" :detailDesc="item.detailDesc" :status="item.status"></targets>
                <!-- <targets :name="goalname" myname='jianzhu2' :disMap="disMap" initLeft='800' initTop='300' targetName="靶标2" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition"></targets>
                <targets :name="goalname" myname='jianzhu3' :disMap="disMap" initLeft='900' initTop='700' targetName="广电" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition"></targets>
                <targets :name="goalname" myname='jianzhu4' :disMap="disMap" initLeft='300' initTop='420' targetName="银行" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition"></targets>
                <targets :name="goalname" myname='jianzhu5' :disMap="disMap" initLeft='-100' initTop='-100' targetName="民航" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition"></targets>
                <targets :name="goalname" myname='jianzhu2' :disMap="disMap" initLeft='1200' initTop='300' targetName="电厂" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition"></targets>
                <targets :name="goalname" myname='jianzhu3' :disMap="disMap" initLeft='1800' initTop='500' targetName="水坝" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition"></targets>
                <targets :name="goalname" myname='jianzhu1' :disMap="disMap" initLeft='-50' initTop='100' targetName="靶标3" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition"></targets>
                <targets :name="goalname" myname='jianzhu4' :disMap="disMap" initLeft='-200' initTop='500' targetName="靶标4" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition"></targets>
                <targets :name="goalname" myname='jianzhu5' :disMap="disMap" initLeft='-150' initTop='600' targetName="靶标5" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition"></targets>
                <targets :name="goalname" myname='jianzhu1' :disMap="disMap" initLeft='1300' initTop='100' targetName="靶标6" @getdisMap="getdisMap" ref="child" :dragPosition="dragPosition"></targets> -->
            </div>
            
            
            
            
            
            <!-- <img  class="img1" src="@/img/1.png">
            <div class="description">
            <div class="targetNumber">靶标编号：01_KAI_01.1</div>
            <div class="link">www.baidu.com</div>
            <div class="decimg"><img style="height: 12vh;width: 15vw;" src="@/img/desc.png"></div>
            </div>
            <img  class="img2" src="@/img/2.png">
            <img  class="img3" src="@/img/3.png">
            <img  class="img4" src="@/img/4.png"> -->
        </div>
        </div>
  </div>
  </div>
</template>
<script>
import targets from '@/components/target'
const mapWidth = 7680
const clientWidth = document.documentElement.clientWidth
const clientHeight = document.documentElement.clientHeight
// const el2 = document.querySelector('.container')
export default {
    props: {
        goalname: {
            type: String,
            default: ''
        },
        targetsAll: {
            type: Array,
            default: function() {
                return []
            }
        }
    },
    data () {
        return {
            initpositon: mapWidth * 3 / 8,
            xn: 0,
            yn: 0,
            count: 0,
            eltarget: '',
            classname: '',
            disMap: {x: 0, y: 0},
            initPos: {},
            // goalname: '',
            backgoundX: -1920,
            backgoundY: -1023,
            // dragx: 0,
            // dragy: 0,
            dragPosition: {dragx:0, dragy: 0},
            width: this.$store.state.config.width,
            height: this.$store.state.config.height
        }
    },
    components: {
        targets
    },
    methods: {
        // moveTarget (e) {
        //     e.stopPropagation()
        //     let target = e.target
        //     let node
        //     let goal = ''
        //     if (target.tagName === 'LI') {
        //         goal = target.children[0].innerHTML
        //     } else {
        //         if (target.className == 'row-left') {
        //             goal = target.innerHTML
        //         } else {
        //             node = target.previousElementSibling;
        //             goal = node.innerHTML
        //         }
        //         // this.classname = target.parentElement.id.slice(2)
        //     }
        //     let array = goal.split('：')
        //     this.goalname = array[1]
        //     console.log(this.goalname)
        // },
        getmoveDis (xn, yn) {
            let map = {
                x: this.backgoundX,
                y: this.backgoundY
            }
            let oldPosition = this.$refs.el2.style.backgroundPosition
            map.x = map.x + xn
            map.y = map.y + yn
            return map
        },
        getdisMap (val) {
            console.log('change')
            console.log(val)
            this.disMap = val
            let backDis = this.getmoveDis(val.x, val.y)
            this.backgoundX = backDis.x 
            this.backgoundY = backDis.y
            this.$refs.el2.style.webkitBackgroundPosition = `${backDis.x}px ${backDis.y}px`
            this.$refs.el2.style.backgroundPosition = `${backDis.x}px ${backDis.y}px`
        },
        deletedesc () {
            // console.log('ffff')
            // console.log(this.$refs.child)
            // this.$refs.child.deleteDesc()
        },
        moveMap (e) {
            // console.log('move')
            // let x = e.clientX
            // let y = e.clientY
            // console.log(x)
            // console.log(y)
        }
    },
    created () {
        console.log(this.goalname)
        // console.log(this.targetsAll)
    },
    mounted() {
        // console.log(getComputedStyle(this.$refs.homewidth))
        // let bgel = document.querySelector('.container')
        // let that = this
        // bgel.onmousedown = function (e) {
        //     console.log('3344')
        //     let oEvent = e || window.event
        //     let x = oEvent.clientX
        //     let y = oEvent.clientY
        //     let disx = 0
        //     let disy = 0
        //     this.onmousemove = function(e) {
        //         let oEvent = e || window.event
        //         disx = oEvent.clientX - x
        //         disy = oEvent.clientY - y
        //         let bgx = getComputedStyle(this).backgroundPositionX
        //         let bgy = getComputedStyle(this).backgroundPositionY
        //         let bgxnum = Number(bgx.substring(0, bgx.length - 2))
        //         let bgynum = Number(bgy.substring(0, bgy.length - 2))
        //         // this.dragx = disx
        //         // this.dragy = disy
        //         console.log(disx)
        //         console.log(that.dragPosition)
                
        //         // console.log(this.dragPosition)
        //         this.style.backgroundPositionX = `${bgxnum + disx}px`
        //         this.style.backgroundPositionY = `${bgynum + disy}px`
        //     }
        //     this.onmouseup = function () {
        //         // 如果写在mousemove里面，子组件watch的时候会一直累加，重复增加会有问题，因为其实移动的是最后的值
        //         that.dragPosition.dragx = disx 
        //         that.dragPosition.dragy = disy    
        //         this.onmousemove = null
        //         this.onmouseup = null
        //     }
        // }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
    position: absolute;
    top: 10px;
    left: 10px;
    color:white;
    height:30vh;
    width:23vw;
    background-color:black;
    opacity:0.8;
}
.title {
    background-color:#185379;;
    width:23vw;
    height:3vh;
    line-height:3vh;
}
.title .title-left {
    margin-left:1vw;
    float: left;
}
.container1 {
    width:100%;
    height: 100%
}
.title .title-right {
    float: right;
    margin-right:1vw;
}
.title .title-right .left-text{
    float: left;
    margin-right:1vw;
}
.title .title-right .right-text{
    float: right;
    margin-right:1vw;
}
.title .title-right .title-true{
    width: 0.6vw;
    height: 0.6vw;
    background-color: red;
    margin-right: 0.5vw;
    margin-top: 1vh;
    float: left;
}
.title .title-right .title-false{
    width: 0.6vw;
    height: 0.6vw;
    background-color: #FFEB3B;
    margin-top: 1vh;
    margin-right: 0.5vw;
}
.list-row {
    height:3vh;
    line-height:3vh;
    list-style:none;
    margin-left: -2.2vw;
    cursor:pointer;
}
.list-row .row-left{
    float:left;
    padding-left: 1vw;
}
.list-row .row-right{
    float:right;
}
.list-row .redlevel{
    width: 2vw;
    height: 0.5vh;
    background-color: red;
    margin-top: 1vh;
    /* margin-left: 1vw; */
    margin-right: 1vw;
}
li:nth-child(2n) {
    background-color:#185379;
}
.container {
    background-image:url(../img/bigmap.jpg);
    background-position:-1920px -1023px;
    width:100%;
    height:100%;
    background-repeat:no-repeat;
    position: absolute;
    /*background-size:cover;*/
    /*background-attachment:fixed;*/
    /* top:0px; */
    /* bottom:0px; */
    /* left:0px; */
    overflow:hidden;
    word-break:break-all;
    transition: 1s all;
}
.img1 {
    height:100px;
    width:100px;
    margin-left:550px;
    margin-top:20px;
    position:absolute;
    transition: 1s all;
}
.img2 {
    height:100px;
    width:100px;
    margin-left:400px;
    margin-top:200px;
    position:absolute;
    transition: 1s all;
}
.img3 {
    height:100px;
    width:100px;
    margin-left:600px;
    margin-top:300px;
    position:absolute;
    transition: 1s all;
}
.img4 {
    height:100px;
    width:100px;
    margin-left:1200px;
    margin-top:400px;
    position:absolute;
    transition: 1s all;
}
.description {
    height: 10vh;
    width: 15vw;
    margin-left: 700px;
    margin-top: 0px;
    /*display:none;*/
    /* margin-top: 26px; */
    /* background-color: red; */
    transition: opacity 1s ease-in-out;
    transition: 1s all;
    color: white;
    position:absolute;
    opacity:0;
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
</style>
