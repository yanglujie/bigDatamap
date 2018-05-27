<template>
  <div>
    <top-menu @targetName="getTargetName"></top-menu>
     <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']" @on-select="getTargetName">
                        <div v-for="item in  targetList" :key="item.id">
                            <Submenu :name="item.id">
                                <template slot="title">
                                    <!-- <Icon type="ios-analytics"></Icon> -->
                                    {{item.name}}
                                </template>
                                <div v-for="subitem in item.targets">
                                    <MenuItem :name="subitem">{{subitem}}</MenuItem>
                                </div>
                                <!-- <MenuItem name="3-2">Option 2</MenuItem> -->
                            </Submenu>
                        </div>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <div class="mapTitle">
                        <div class="targetHouse">靶标库</div>
                        <div style="float:right;display:inline" class="targetType">
                            <Icon type="ios-location" color="red" :size="15"></Icon><span style="padding-right:15px;padding-left:5px">未部署靶标</span>
                            <Icon type="ios-location" color="yellow" :size="15"></Icon><span style="padding-left:5px">已部署靶标</span>
                            
                        </div>
                    </div>
                    <Content :style="{padding: '24px', height: height+'px', background: '#fff'}" ref="contentMap">
                        <big-map :goalname="goalName" :targetsAll="targetsAll"></big-map>
                        <!-- <b-map></b-map> -->
                    </Content>
                </Layout>
                <div class="description">
                    <detail></detail>
                </div>
            </Layout>
    <!-- <layout> -->
        <!-- <left-menu></left-menu> -->
    <!-- <div> 大数据安全靶场</div> -->
<!-- <b-map></b-map> -->
  </div>
</template>
<script>
import topMenu from '@/components/top-menu'
import leftMenu from '@/components/left-menu'
import bMap from '@/components/Bmap'
import bigMap from '@/view/home'
import detail from '@/components/detail'
let innerHeight = window.innerHeight
let inHeight = innerHeight - 220
export default {
    data () {
        return {
            height: inHeight,
            goalName: '',
            targetList: [],
            targetsAll: [],
        }
    },
    components: {
       topMenu,
       leftMenu,
       bMap,
       bigMap,
       detail
    },
    methods: {
       getTargetName(name) {
           console.log('-----------namedd')
           console.log(name)
           this.goalName = name
       },
       getMenu() {
           let that = this
        //    let menuList = {}
        // 'http://192.168.5.118:8881/target'
           this.$http.get('/target')
            .then(function (res) {
                let targetList = res.data.data;
                // console.log(targetList)
                targetList.forEach((item) => {
                    let menuSub = {name: '',id: '',targets:[]}
                    menuSub.name = item.categoryDTO.name
                    menuSub.id = item.categoryDTO.id
                    // menuSub[targets] = []
                    item.categoryDTO.targetShowDTOs.forEach((item1) => {
                         menuSub.targets.push(item1.targetName)
                         that.targetsAll.push(item1)
                    });
                    that.targetList.push(menuSub)
                });
                // that.targetList = menuList
                // console.log(that.targetList);
                // console.log(that.targetsAll)
            })
            .catch(function (error) {
                console.log(error);
            });
       }
    },
    created () {
        this.getMenu()
    },
    mounted() {
       console.log()
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.targetHouse {
    float: left;
    font-weight: bold
}
.mapTitle {
    margin-top:20px;
    margin-bottom: 20px
}
</style>
