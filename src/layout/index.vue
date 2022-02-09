<template>
  <el-container class="layout-container-demo" style="border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <router-view class="view left-sidebar" name="LeftSidebar"></router-view>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <router-view class="view top-navbar" name="TopNavbar"></router-view>
      </el-header>
      <el-main>
        <router-view class="view main-content"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },

  setup() {},
  created() {},
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.layout-container-demo {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 20px;
}
</style>
