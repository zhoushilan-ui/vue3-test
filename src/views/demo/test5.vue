<template>
  <!-- 自定义事件-->
  <div>
    <div>自定义事件</div>
    <demo2></demo2>
  </div>
</template>

<script>
import demo2 from "../../components/demo2.vue";
export default {
  components: {
    demo2,
  },
  data() {
    return {
      lastName: null,
      firstName: null,
    };
  },
};
</script>

<style></style>
