<template>
  <!-- computed 计算属性 -->
  <div>
    <el-table :data="repositories['user']" style="width: 100%">
      <el-table-column prop="id" label="编号" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="birthday" label="生日" />
      <el-table-column prop="city" label="城市" />
    </el-table>
  </div>
</template>

<script>
import { getData } from "@/api/index";
import { ref, onMounted } from "vue";
export default {
  data() {
    return {};
  },

  setup() {
    const repositories = ref([]);
    const getUserRepositories = async () => {
      let { data } = await getData();
      repositories.value = data;
    };
    onMounted(getUserRepositories);
    // const repositoriesMatchingSearchQuery = computed(() => {
    //   console.log(repositories["user"]);
    //   return repositories["user"].filter((repository) => {
    //     console.log(repository);
    //   repository.age > 24
    //   });
    // });
    return {
      repositories,
      getUserRepositories,
      //   repositoriesMatchingSearchQuery,
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
