<template>
  <div id="app">
    <!--   <img alt="Vue logo" src="./assets/logo.png">-->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <router-view></router-view> -->
    <test></test>
    <test1></test1>
    <test2 :alltime="alltime"></test2>
    <test3></test3>
    <test4></test4>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import test from "./views/test.vue";
import test1 from "./views/test1.vue";
import test2 from "./views/test2.vue";
import test3 from "./views/test3.vue";
import test4 from "./views/test4.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    test,
    test1,
    test2,
    test3,
    test4,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
