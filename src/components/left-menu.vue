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
</style>
<template>
    <div class="layout">
            <!-- <Layout> -->
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <!-- <Icon type="ios-navigate"></Icon> -->
                                资源库管理平台
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <!-- <Icon type="ios-keypad"></Icon> -->
                                靶标库
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <!-- <Icon type="ios-analytics"></Icon> -->
                                贵阳城市靶标
                            </template>
                            <MenuItem name="3-1">广电</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <!-- <Icon type="ios-analytics"></Icon> -->
                               国家公共靶标
                            </template>
                            <MenuItem name="3-1">银行</MenuItem>
                            <MenuItem name="3-2">民航</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <!-- <Icon type="ios-analytics"></Icon> -->
                               关键基础设施靶标
                            </template>
                            <MenuItem name="3-1">电厂</MenuItem>
                            <MenuItem name="3-2">水坝</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <!-- <Icon type="ios-analytics"></Icon> -->
                               新兴靶标
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <!-- <Icon type="ios-analytics"></Icon> -->
                               军民融合靶标
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
            <!-- </Layout> -->
    </div>
</template>
<script>
    export default {
        
    }
</script>