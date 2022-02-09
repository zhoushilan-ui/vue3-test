<template>
  <el-scrollbar>
    <el-menu
      :router="true"
      :default-active="activeIndex"
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
    >
      <div class="class-logo">
        <el-icon><icon-menu /> vue3 + 练习 </el-icon>
        <el-avatar :src="avatar"></el-avatar>
      </div>
      <el-menu-item index="index">
        <el-icon><icon-menu /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><message /></el-icon>菜单
        </template>
        <el-menu-item-group>
          <el-menu-item index="test1">Option 1</el-menu-item>
          <el-menu-item index="test6">Option 2</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import avatar from "../../../assets/dog.jpg";
import { ref } from "vue";
export default {
  data() {
    return { avatar };
  },
  setup() {
    const activeIndex = ref("index");

    return {
      activeIndex,
      avatar,
    };
  },
};
</script>

<style scoped>
.el-scrollbar {
  background: #545c64 !important;
}
.demo-type {
  display: flex;
}
.demo-type > div {
  flex: 1;
  text-align: center;
}
::v-deep .el-avatar > img {
  width: 50px;
  height: 50px;
}

.class-logo {
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
}

.el-menu-vertical-demo {
  --el-menu-border-color: #545c64 !important;
}

.class-logo .el-icon {
  width: 140px;
  display: inline-block;
}

.demo-type > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color-base);
}
</style>
