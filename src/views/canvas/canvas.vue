<template>
  <div class="canvas-container">
    <p>画龙</p>
    <div
      id="container"
      style="width: 100%; height: 900px; display: none; z-index: 100000"
    ></div>
    <canvas id="cvs" width="500" height="500"></canvas>
    <canvas id="canvas1" width="900" height="300" style="background: #a9a9a9">
      很抱歉，您的浏览器暂不支持HTML5的canvas
    </canvas>
  </div>
</template>

<script>
import long from "./img/long.webp";
import bubble from "./img/bubble.webp";
export default {
  data() {
    return {
      long,
      bubble,
    };
  },
  created() {},
  mounted() {
    var c = document.getElementById("canvas1");
    var ctx = c.getContext("2d");
    var imgData = ctx.createImageData(300, 300);
    for (let i = 0; i < imgData.data.length; i += 4) {
      var g = (i * i * i * 3) % 255;
      imgData.data[i + 0] = g;
      imgData.data[i + 1] = g;
      imgData.data[i + 2] = g;
      imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);
    for (let i = 0; i < imgData.data.length; i += 4) {
      g = Math.floor((i * i + 4 * i + 30) % 255);
      imgData.data[i + 0] = g;
      imgData.data[i + 1] = g;
      imgData.data[i + 2] = 255;
      imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 300, 0);
    for (let i = 0; i < imgData.data.length; i += 4) {
      g = Math.floor(Math.sqrt(i * i * 5) % 255);
      imgData.data[i + 0] = 200;
      imgData.data[i + 1] = g;
      imgData.data[i + 2] = g;
      imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 600, 0);

    // ******************************************************/
    // 点阵的点转换都很气泡图片
    this.init();
    //img 添加点击事件
    this.AddImgClickEvent();
  },
  methods: {
    init() {
      var canvas = document.getElementById("cvs");
      var ctxs = canvas.getContext("2d");
      let that = this;
      var image = new Image();
      image.src = long;
      image.onload = function () {
        canvas.width = image.width;
        canvas.height = image.height;

        ctxs.drawImage(image, 0, 0);

        var imageData = ctxs.getImageData(0, 0, image.width, image.height).data;
        ctxs.fillStyle = "#ffffff";
        ctxs.fillRect(0, 0, image.width, image.height);
        var dragonContainer = document.getElementById("container");
        dragonContainer.style.display = "block";
        var dragonScale = 2;
        var gap = 6;

        for (var h = 0; h < image.height; h += gap) {
          for (var w = 0; w < image.width; w += gap) {
            var position = (image.width * h + w) * 4;
            var r = imageData[position],
              g = imageData[position + 1],
              b = imageData[position + 2];

            if (r + g + b == 0) {
              //   ctxs.fillStyle = "#000";
              //   ctxs.fillRect(w, h, 4, 4);
              var bubble = document.createElement("img");
              bubble.src = that.bubble;
              bubble.setAttribute("class", "bubble");

              var bubbleSize = Math.random() * 10 + 20;
              bubble.style.left = w * dragonScale - bubbleSize / 2 + "px";
              bubble.style.top = h * dragonScale - bubbleSize / 2 + "px";
              bubble.style.width = bubble.style.height = bubbleSize + "px";
              bubble.style.animationDuration = Math.random() * 6 + 4 + "s";
              dragonContainer.appendChild(bubble);
            }
          }
        }
      };
    },
    AddImgClickEvent() {
      var objs = document.getElementsByTagName("img");
      for (var i = 0; i < objs.length; i++) {
        console.log(i);
        objs[i].onclick = function () {
          window.open(this.src);
        };
        console.log(222);
        objs[i].style.cursor = "pointer";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#canvas {
  height: 500px;
  width: 500px;
}
::v-deep #container {
  position: relative;
  .bubble {
    position: absolute !important;
    cursor: pointer;
  }
}
</style>
