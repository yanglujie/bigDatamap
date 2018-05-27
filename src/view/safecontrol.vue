<template> 
  <div>
    <top-menu></top-menu>
     <!-- <div>人员安全管控</div> -->
      <div class="content">
        <div class="content-left">
          <div class="left-title">靶场支撑平台-人员安全管控系统</div>
          <div class="picture" :style="{width: bwidth+'px', height: bheight+'px'}">
          <dian :top="34" :left="58" name="袁伟豪" gental="女" enterTime="20:59:57" leaveTime="" picUrl="../static/img/1.jpg"></dian>
          <dian :top="35" :left="54" name="李文伟" gental="男" enterTime="22:45:57" leaveTime="" picUrl="../static/img/2.jpg"></dian>      
          <dian :top="35" :left="46" name="多诺文" gental="女" enterTime="18:55:57" leaveTime="" picUrl="../static/img/3.jpg"></dian>
          <dian :top="38" :left="50" name="宋景昌" gental="男" enterTime="21:30:45" leaveTime="" picUrl="../static/img/zyx.jpg"></dian>
          <dian :top="40" :left="46" name="林以真" gental="女" enterTime="23:59:57" leaveTime="" picUrl="../static/img/1.jpg"></dian>
          </div>
        </div>
        <div class="right-menu">
          <div class="search" >
            <Select
              v-model="search"
              filterable
              remote
              placeholder="请输入您要检索的检测信息"
              :remote-method="remoteMethod1"
              :loading="loading1" :transfer="true">
              <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
            </Select>
          </div>
          <div class="floorMessage">
            <Menu :theme="theme1" :open-names="['1']" class="hall one-floor" v-if="floor === 1">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-paper"></Icon>
                    办公室
                  </template>
                <MenuItem name="1-1"><pre>林以真    23:59:57</pre></MenuItem>
              </Submenu>
            </Menu>
            <Menu :theme="theme1" :open-names="['1']" class="hall two-floor" v-if="floor === 2">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-paper"></Icon>
                    攻防实验室
                  </template>
                <MenuItem name="2-1"><pre>宋景昌    21:30:45</pre></MenuItem>
              </Submenu>
            </Menu>
            <Menu :theme="theme1" :open-names="['1']" class="hall three-floor" v-if="floor === 3">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-paper"></Icon>
                    观摩大厅
                  </template>
                  <div class="person-list">
                    <ul>
                      <li v-for="(item,index) of personMsg" :key="index"><pre>{{item}}</pre></li>
                    </ul>
                  </div>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-filing"></Icon>
                    机房
                </template>
                <MenuItem name="2-1"><pre>袁伟豪    20:59:57</pre></MenuItem>
              </Submenu>
            </Menu>
        
            <Menu class="right-floor" style="width:100px" @on-select="info" active-name="1-3">
              <MenuItem name="1-1">一层</MenuItem>
              <MenuItem name="1-2">二层</MenuItem>
              <MenuItem name="1-3">三层</MenuItem>
            </Menu>
          </div>
          <div class="monitor"><button type="button"><a href="http://baidu.com" style="color:#fff;">进入监控</a></button></div>
        </div>
    </div>
  </div>
</template>

<script>
import topMenu from "@/components/top-menu";
import dian from "@/components/dian"


const clientWidth = document.documentElement.clientWidth;
const clientHeight = document.documentElement.clientHeight;

export default {
  data() {
    return {
      theme1: "light",
      search: "",
      loading1: false,
      options1: [],
      bwidth: this.$store.state.config.bwidth,
      bheight: this.$store.state.config.bheight ,
      floor: 3,
      list: [
        "林以真",
        "宋景昌",
        "多诺文",
        "李文伟",
        "袁伟豪"
      ],
      left: 50,
      top: 50,
      personMsg:[
        '多诺文    18:55:57',
        '李文伟    22:45:57',
      ]
    };
  },
  components: {
    topMenu,
    dian
  },
  methods: {
    remoteMethod1(query) {
      if (query !== "") {
        this.loading1 = true;
        setTimeout(() => {
          this.loading1 = false;
          const list = this.list.map(item => {
            return {
              value: item,
              label: item
            };
          });
          this.options1 = list.filter(
            item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
          );
        }, 200);
      } else {
        this.options1 = [];
      }
    },
    info(name) {
      // this.$router.push(name);
      if (name === "1-1") {
        this.floor = 1;
      } else if (name === "1-2") {
        this.floor = 2;
      } else if (name === "1-3") {
        this.floor = 3;
      }
    }
  },
  created() {},
  mounted() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  display: flex;
}
.content-left {
  flex:1;
  height: 100%;
  background: #394250;
  color: #fff;
}
.left-title{
  margin: 10px 20px;
}
.picture {
  /* flex: 1; */
  height: 900px;
  position: relative;
  background-image: url(../img/floor.png);;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.redIcon {
  position: absolute;
}
.search {
  width: 320px;
  margin: 10px auto;
}
.right-menu {
  width: 350px;
  height: 600px;
  /* flex:1 */
}

.hall {
  float: right;
}
.person-list ul{
  list-style: none;
  margin: 20px 40px;
}
.monitor button{
  margin: 200px 20px;
  padding: 5px 30px;
  background: rgb(50, 50, 216);
  border-color: rgb(50, 50, 216);
}

</style>
