<template>
  <div>
    <p class="all-title">css 样式</p>
    <div @click="urlClick" class="css-glass">玻璃拟态</div>
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
    return {
      //需要返回
      urlClick,
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
