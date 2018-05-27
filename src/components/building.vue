<template>
    <div id="buildings"></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    ready() {
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
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
#buildings {
  width: 100px;
  height: 100px;
  background-image: url("");
  background-size: 100% 100%;
}
</style>


