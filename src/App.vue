<template>
  <!-- <div id="app"> -->
  <!--   <img alt="Vue logo" src="./assets/logo.png">-->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <router-view></router-view> -->
  <!-- <test></test>
    <test1></test1>
    <test2 :alltime="alltime"></test2>
    <test3></test3>
    <test4></test4>
    <test5></test5> -->
  <!-- <test6></test6> -->
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  <!-- </div> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import test from "./views/test.vue";
// import test1 from "./views/test1.vue";
// import test2 from "./views/test2.vue";
// import test3 from "./views/test3.vue";
// import test4 from "./views/test4.vue";
// import test5 from "./views/test5.vue";

//引入
// import test6 from "./views/test6.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // test,
    // test1,
    // test2,
    // test3,
    // test4,
    // test5,
    // test6,
  },
  data() {
    return { timer: null, alltime: 0 };
  },
  mounted() {
    this.timer = setInterval(() => {
      // 轮询数据
      this.alltime++;
    }, 1000);
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  /* margin-top: 60px; */
}
</style>
