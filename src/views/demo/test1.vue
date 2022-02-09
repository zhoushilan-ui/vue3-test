<template>
  <div>
    <el-table :data="repositories" style="width: 100%">
      <el-table-column prop="id" label="编号" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="job" label="工作" />
    </el-table>
  </div>
</template>

<script>
import { getDemo } from "@/api/index";
import { ref, onMounted } from "vue";
export default {
  data() {
    return {
      datas: null,
      value: null,
    };
  },

  setup() {
    const repositories = ref([]);
    const getUserRepositories = async () => {
      let { data } = await getDemo();
      repositories.value = data;
    };
    onMounted(getUserRepositories);
    return {
      repositories,
      getUserRepositories,
    };
  },
  created() {},
  methods: {},
  mounted() {},
};
</script>

<style>
.pi {
  width: 10px;
  height: 10px;
}
</style>
