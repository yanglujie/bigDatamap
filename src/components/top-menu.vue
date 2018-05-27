<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.title {
    /* width: 100px;
    height: 30px; */
    float: left;
    position: relative;
    /* top: 15px;
    left: 20px; */
    /* background: rgb(91, 98, 112); */
    border-radius: 3px;
    color: white;
    margin-left: -23px
}
.search {
    float: left;
    color:white;
    margin-left: 100px
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="title">贵阳国大数据安全靶场</div>
                    <div class="search" v-if="pathName == 'targetmap'">
                         <Select v-model="targetname" style="width:300px" :transfer="true" @on-change="patchName">
                            <div v-for="item in targetList" :key="item.id">
                                <OptionGroup :label="item.name">
                                    <Option v-for="item1 in item.targets" :value="item1.value" :key="item1.value">{{ item1.label }}</Option>
                                </OptionGroup>
                            </div>
                            <!-- <OptionGroup label="国家公共靶标">
                                <Option v-for="item in targetList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </OptionGroup> -->
                        </Select>
                    </div>
                    <div class="layout-nav" style="color:white">
                            <span style="padding-right:50px;user-select:none">用户名：贵阳大数据</span>
                            <span style="padding-right:50px;user-select:none">登录时间：16:37</span>
                            <span style="padding-right:50px;user-select:none;cursor:pointer">安全退出</span>
                    </div>
                </Menu>
            </Header>
        </Layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                targetname: '',
                pathName: '',
                targetList1: [
                    {
                        value: '厂电',
                        label: '厂电'
                    },
                ],
                targetList2: [
                    {
                        value: '银行',
                        label: '银行'
                    },
                    {
                        value: '民航',
                        label: '民航'
                    },
                ],
                targetList: []
            }
        },
        methods: {
            patchName(name) {
                console.log(name)
                this.$emit('targetName', name)
            },
             getMenu() {
                let that = this
                //    let menuList = {}
                // 'http://192.168.5.118:8881/target'
                this.$http.get('/target')
                    .then(function (res) {
                        let targetList = res.data.data;
                        console.log(targetList)
                        targetList.forEach((item) => {
                            let menuSub = {name: '',id: '',targets:[]}
                            menuSub.name = item.categoryDTO.name
                            menuSub.id = item.categoryDTO.id
                            // menuSub[targets] = []
                            item.categoryDTO.targetShowDTOs.forEach((item1) => {
                                // menuSub.targets.push(item1.targetName)
                                menuSub.targets.push({value:item1.targetName,label:item1.targetName})
                                
                                // that.targetsAll.push(item1)
                            });
                            that.targetList.push(menuSub)
                        });
                        // that.targetList = menuList
                        console.log('--------------lalattt')
                        console.log(that.targetList);
                        // console.log(that.targetsAll)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        created() {
            console.log('----')
            // console.log(this.$router.currentRoute.name)
            this.pathName = this.$router.currentRoute.name
            this.getMenu()
        }
    }
</script>