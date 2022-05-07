<template>
  <div class="app-contanier">
    <p>css 阴影</p>
    <div class="content">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-contanier {
  height: 100%;
  width: 100%;
  background-color: aquamarine;

  .content {
    width: 100%;
    height: calc(100% - 21px);
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 27%;
      background-color: bisque;
    }
  }
}
</style>
