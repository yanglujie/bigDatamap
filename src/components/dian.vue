<style scoped>
.redIcon {
  position: absolute;
}
.person-mes{
    width:230px;
    height: 100px;
    background-color: rgba(0, 0, 255, 0.3);
    border: 3px solid rgba(0, 238, 255, 0.4); 
}
.left-pic{
    float: left;
    margin: 18px;
}
.right-mes{
    float: right;
    margin: 15px 30px 0 0;
    color: #fff;
}
.right-mes ul{
    list-style: none;
}
.redIcon .redPic{
    cursor: pointer;
}
.perPic {
    width: 46px;
    height: 65px
}
</style>
<template>
    <!-- <div> -->
       <div class="redIcon" :style="{marginLeft: left+'%', marginTop: top+'%'}">
            <img class="redPic" src="@/img/dian.png" :style="{width:width+'px',height:height+'px'}" @click="showMsg"/>
            <!-- 添加子组件 -->
            <div class="person-mes" v-if="flag==true">  
                <div class="left-pic"><img :src="picUrl" class="perPic"/></div> 
                <div class="right-mes">
                    <ul>
                        <li>姓名:{{name}}</li>
                        <li>性别:{{gental}}</li>
                        <li>进入时间: {{enterTime}}</li>
                        <li>离开时间:{{leaveTime}}</li>
                    </ul>
                </div>
        </div>
          </div>
    <!-- </div> -->
</template>
<script>
import showMessage from "@/components/showMessage";

    export default {
        props: {
            left: {
                type: Number
            },
            top: {
                type: Number
            },
            name: {
                type: String
            },
            gental: {
                type: String
            },
            enterTime: {
                type: String
            },
            leaveTime: {
                type: String
            },
            picUrl:{
                type:String
            }
        },
        data () {
           return {
               flag: false,
               msg:'',
               width: 13/this.$store.state.config.bratio,
               height: 27/this.$store.state.config.bratio ,
            //    url: '../static/img/1.png'
           }
        },
        components:{
            showMessage
        },
        methods: {
           showMsg(){
               this.flag = !this.flag;
           }
        },
        created() {
            console.log('----------')
           console.log(this.width)
        }
    }
</script>