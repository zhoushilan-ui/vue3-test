<template>
  <div>
    <p class="all-title">css 样式</p>
    <div @click="urlClick" class="css-glass">玻璃拟态</div>
    <div @click="CutScreenClick" class="css-glass">切屏事件</div>
    <div @click="ShadowClick" class="css-glass">css 阴影</div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  components: {},
  setup() {
    // 跳转到新增扶持页面
    const $router = useRouter();
    // 点击方法
    const urlClick = () => {
      $router.push({ path: "/glass" });
    };
    //
    const CutScreenClick = () => {
      $router.push({ path: "/cutscreen" });
    };
    const ShadowClick = () => {
      $router.push({ path: "/Shadow" });
    };
    return {
      //需要返回
      urlClick,
      CutScreenClick,
      ShadowClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  overflow: hidden !important;
  .all-title {
    color: rgb(0, 255, 85);
    font-size: 24px;
    font-weight: bold;
    background: -webkit-linear-gradient(
      90deg,
      rgb(38, 17, 230),
      rgb(240, 99, 99)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .css-glass {
    color: red;
    font-size: 18px;
    background: -webkit-linear-gradient(90deg, pink, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
  }
}
</style>
