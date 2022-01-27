<template>
  <div>你好</div>
</template>

<script>
import { toRef } from "vue";
export default {
  props: [""],
  data() {
    return {};
  },
  setup(props) {
    const title = toRef(props, "title");
    console.log(title.value);
  },
  mounted() {},
  methods: {},
};
</script>

<style></style>
