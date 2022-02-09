<template>
  <div><demo1></demo1></div>
</template>

<script>
import demo1 from "../../components/demo1.vue";
import { provide } from "vue";
export default {
  components: {
    demo1,
  },
  data() {
    return {};
  },
  setup() {
    provide("location", "North Pole");
    provide("geolocation", {
      longitude: 90,
      latitude: 135,
    });
  },
  mounted() {},
  methods: {},
};
</script>

<style></style>
