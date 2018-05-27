<template>
  <div id="info" ref="info">
      <div style="width:300px;padding-left:15px">
    <!-- <Icon type="close-circled"></Icon> -->
    <div style="padding-top:20px">
        <!-- <div style=""> -->
            <span class="header">{{detail.name}}</span>
            <span style="padding-left:180px"><span  @click="closeDetail" style="cursor:pointer">关闭</span></span>
            <!-- <Icon type="close-circled" class="close" :size="27" @click="closeDetail"></Icon> -->
        <!-- </div> -->
        <!-- <div style="margin-top:24px;margin-left:200px;cursor:pointer" @click="closeDetail"> -->
           
            <!-- <Icon type="close-circled" class="close" :size="27" ></Icon> -->
        <!-- </div> -->
    </div>
    <div class="up">
      <h5>靶标URL</h5>
      <template>
        <Input v-model="detail.url" placeholder="Enter something..." style="width: 90%">
        </Input>
      </template>
      <div class="img-detail">
      </div>
    </div>
    <div class="strust">
      <h5>靶标架构</h5>
      <div class="strust-info"><p>{{detail.archDetail}}</p></div>
    </div>
    <div class="down">
      <h5>靶标详情</h5>
      <div class="description">
        <p>{{detail.content}}</p>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      detail: this.$store.state.config.detail,
      targetUrl: '',
    //   flag: false
    };
  },
  components: {},
  computed: {

  },
  methods: {
    ready() {},
    closeDetail() {
        console.log('close')
        // this.flag = false
        this.detail.name = ''
        this.$refs.info.style.width = '0px'
    }
  },
  watch: {
      detail: {
          handler: function(val, oldval) {
              console.log(val)
              this.targetUrl = val.url
              if(val.name) {
                //   this.flag = true
                  this.$refs.info.style.width = '300px'
              }
          },
          deep: true
      }
  },
  created() {
      console.log(this.detail)
  },
  mounted() {
      this.$refs.info.style.width = '0px'
  }
};
</script>
<style scoped>
#info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  /* overflow: hidden; */
  /* padding-left:15px; */
  background-color: #f0f0f0;
  width: 300px;
  height: 730px;
  background-size: 100% 100%;
  margin-top: 71px;
  transition: 0.5s all
}
.header {
  font-size: 20px;
  color: #d65a65;
  margin-top:24px;
  font-weight: bold
}
.close {
    float: right;
    /* margin-top: 24px; */
    /* margin-right: 20px; */
}
.img-detail {
  width: 90%;
  height: 150px;
  border: solid 2px #d6d5db;
  margin:10px 0 10px 0;
}
h5 {
  font-size: 15px;
  margin:10px;
}
.strust {
  width: 100%;
  border-top: solid 2px #d6d5db;
  border-bottom: solid 2px #d6d5db;
  padding:20px 0;
  margin:10px 0;
}
.strust-info,
.description {
  border: solid 2px #d6d5db;
  width: 90%;
  height: 130px;
  background-color: #fff;
}
.description {
  height: 160px;
  padding:10px;
  margin-bottom: 20px;
}
</style>