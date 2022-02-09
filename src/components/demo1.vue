<template>
  <div>子组件</div>
</template>

<script>
// import { getData } from "../api/index";
import { inject } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    let userLocation;
    // const getUserRepositories = async () => {
    //   let { data } = await getData();
    userLocation = inject("location", "data");
    // };

    return {
      userLocation,
      //   getUserRepositories,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style></style>
