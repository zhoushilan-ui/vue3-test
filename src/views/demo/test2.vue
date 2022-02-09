<template>
  <!-- watch响应式更改 -->
  <div>
    <el-link type="primary">{{ repositories }}</el-link>
  </div>
</template>

<script>
import { ref, watch, onMounted, toRefs } from "vue";
export default {
  props: ["alltime"], //proprs可以是对象，数组，数字等
  setup(props) {
    console.log(props.alltime);
    // 使用 `toRefs` 创建对 `props` 中的 `alltime` property 的响应式引用
    const { alltime } = toRefs(props);
    const repositories = ref([]);
    const getUserRepositories = async () => {
      // 更新 `prop.alltime` 到 `alltime` 访问引用值
      repositories.value = alltime;
    };

    onMounted(getUserRepositories);
    // 在 alltime prop 的响应式引用上设置一个侦听器
    watch(alltime, getUserRepositories);

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
