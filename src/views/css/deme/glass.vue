<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div id="app">
    <p class="glass-title">玻璃拟态</p>
    <div class="rect"></div>
    <div class="rect1" @mousedown="move"></div>
    <div class="card" @mousedown="move"></div>
    <div class="circle"></div>
    <div class="rect"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Welcome to Vue!",
    };
  },
  methods: {
    doSomething() {
      alert("Hello!");
    },
    move(e) {
      let odiv = e.target; //获取目标元素
      console.log(odiv);
      //算出鼠标相对元素的位置
      let disX = e.clientX - odiv.offsetLeft;
      let disY = e.clientY - odiv.offsetTop;
      document.onmousemove = (e) => {
        //鼠标按下并移动的事件
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;

        //绑定元素位置到positionX和positionY上面
        this.positionX = top;
        this.positionY = left;
        //移动当前元素
        odiv.style.left = left + "px";
        odiv.style.top = top + "px";
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },
  },
};
</script>
<!-- Use preprocessors via the lang attribute! e.g. <style > -->
<style lang="scss" scoped>
#app {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  background: radial-gradient(
      circle at 60% 90%,
      rgba(46, 103, 161, 1),
      transparent 60%
    ),
    radial-gradient(
      circle at 20px 20px,
      rgba(46, 103, 161, 0.8),
      transparent 25%
    ),
    #182336;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
.card {
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  right: 100px;
  bottom: 100px;
  z-index: 10;
  font-family: sans-serif;
  text-align: center;
  width: 300px;
  height: 500px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(
    to top right,
    rgba(90, 149, 207, 0.5),
    rgba(58, 76, 99, 0.8)
  );
  box-shadow: 10px -10px 20px rgba(0, 0, 0, 0.2),
    -10px 10px 20px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 20px;
  transform: rotate(-15deg);
}
.circle {
  width: 160px;
  height: 160px;
  position: absolute;
  right: 240px;
  bottom: 20px;
  background: linear-gradient(to top left, rgb(135 116 249), rgb(75 162 237));
  border-radius: 80px;
}
.rect {
  width: 160px;
  height: 160px;
  position: absolute;
  right: 110px;
  bottom: 520px;
  background: linear-gradient(
    to top left,
    rgba(135, 116, 249, 0.9),
    rgba(75, 162, 237, 0.9)
  );
  border-radius: 20px;
}
.rect1 {
  width: 100px;
  height: 100px;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(255, 255, 255, 0.8);
  position: absolute;
  z-index: 10;
  font-family: sans-serif;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  border-left: 1px solid rgba(255, 255, 255, 0.4);
  background: linear-gradient(
    to top right,
    rgba(90, 149, 207, 0.5),
    rgba(58, 76, 99, 0.8)
  );
  box-shadow: 10px -10px 20px rgba(206, 25, 25, 0.2),
    -10px 10px 20px rgba(218, 103, 103, 0.1);
  backdrop-filter: blur(6px);
  border-radius: 20px;
  transform: rotate(-15deg);
}

.glass-title {
  color: #86c9f4;
  font-size: 32px;
  background: -webkit-linear-gradient(90deg, #f3fbfe, #86c9f4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
