<template>
  <div id="">页面1</div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("visibilitychange", function () {
      console.log(document.visibilityState);
      if (document.visibilityState == "hidden") {
        document.title = "别看tab2了，看我";
      } else if (document.visibilityState == "visible") {
        document.title = "vue3-test";
      }
    });
    //判断当前的用户是否离开浏览器，去其他的app
    window.onfocus = function () {
      document.title = "vue3-test";
    };
    //监听切换次数
    var coount = 0;
    window.onblur = function () {
      coount++;
      alert("请注意，你切屏了！第" + coount + "次切屏");
    };
  },
};
</script>

<style></style>
