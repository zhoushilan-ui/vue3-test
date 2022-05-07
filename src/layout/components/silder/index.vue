<template>
  <el-scrollbar>
    <el-menu
      :default-active="index"
      :unique-opened="true"
      :collapse-transition="false"
      :router="true"
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      text-color="#fff"
      mode="vertical"
      ><div class="class-logo">
        <el-icon><icon-menu /> vue3 + 练习 </el-icon>
        <el-avatar :src="avatar"></el-avatar>
      </div>
      <div v-for="(item, i) in activeMenu.children" :key="item.path">
        <el-menu-item :key="i" :index="item.path">
          <i class="iconfont icons">{{ iconData[i] }}</i>
          {{ item.name }}</el-menu-item
        >
      </div>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import avatar from "../../../assets/dog.jpg";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getIcons } from "@/api/app-icon.js";
export default {
  data() {
    return { avatar };
  },
  setup() {
    const activeIndex = ref("index");
    const router = useRouter();
    const activeMenu = computed(() => {
      const routers = router.options.routes;
      const path = routers.find((item) => item.path == "/");
      //隐藏router中带有hidden 路由（或者是直接删除带有hidden的子路由）
      let data = [];
      path.children.filter((item, i) => {
        for (let iten in item) {
          if (iten == "hidden") {
            data.push(i);
          }
        }
      });
      //   data.forEach((item) => {
      //     path.children.splice(item, data.length - 1);
      //   });
      return path;
    });

    const iconData = ref([]);
    const geticon = async () => {
      let { data } = await getIcons();
      iconData.value = data;
    };
    onMounted(geticon);
    return {
      activeIndex,
      avatar,
      activeMenu,
      geticon,
      iconData,
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

.icons {
  margin-right: 10px;
}
</style>
