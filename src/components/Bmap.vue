<template>
    <!--地图容器-->
    <div id="allmap" class="map" :style="{height: height+'px'}"></div>
</template>
<script>
import imgUrl from "../assets/building1.png";
import BMap from "BMap";

let innerHeight = window.innerHeight;
let inHeight = innerHeight - 220;

export default {
  name: "",
  data() {
    return {
      height: inHeight
    };
  },
  mounted() {
    this.ready();
  },
  methods: {
    ready: function() {
      // 百度地图API功能
      var map = new BMap.Map("allmap"); // 创建Map实例
      // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.centerAndZoom("贵阳", 15);
      // map.setCurrentCity("贵阳");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

     // 复杂的自定义覆盖物
      function ComplexCustomOverlay(point, text, mouseoverText) {
        this._point = point;
        this._text = text;
        this._overText = mouseoverText;
      }
      ComplexCustomOverlay.prototype = new BMap.Overlay();
      ComplexCustomOverlay.prototype.initialize = function(map) {
        this._map = map;
        var div = (this._div = document.createElement("div"));
        div.style.position = "absolute";
        // div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
        div.style.zIndex = 1000;
        console.log(imgUrl);

        div.style.backgroundImage = "url(" + imgUrl + ")";
        div.style.backgroundSize = 100 + "px";
        // div.style.backgroundColor="transparent";
        div.style.width = 100 + "px";
        div.style.height = 100 + "px";

        div.onmouseover = function() {
          this.style.backgroundImage = "url(" + imgUrl + ")";
          //   this.style.backgroundColor = "#6BADCA";
          //  this.style.borderColor = "#BC3B3A";
          this.style.backgroundSize = 100 + "px";
        };

        map.getPanes().labelPane.appendChild(div);

        return div;
      };
      ComplexCustomOverlay.prototype.draw = function() {
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this._point);
        this._div.style.left = pixel.x - 20 + "px";
        this._div.style.top = pixel.y - 30 + "px";
      };
      var txt = "贵阳市政府",
        mouseoverTxt = txt + "所在地";

      var myCompOverlay = new ComplexCustomOverlay(
        new BMap.Point(106.636576, 26.653226),
        "贵阳市政府",
        mouseoverTxt
      );

      map.addOverlay(myCompOverlay);
    }
  }
};
</script>
<style scoped>
.map {
  width: 100%;
  /* height: 600px; */
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
</style>