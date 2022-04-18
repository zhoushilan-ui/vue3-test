<template>
  <div>
    <echart1></echart1>
    <echart2></echart2>
  </div>
</template>

<script>
import echart1 from "./echart1.vue";
import echart2 from "./echart2.vue";
export default {
  data() {},
  components: { echart1, echart2 },
};
</script>

<style>
.main-content {
  height: 100%;
  width: 100%;
}
</style>
