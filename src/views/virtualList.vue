<template>
  <div class="app-content">
    <p>虚拟列表</p>
    <div class="table">
      <!-- <div v-for="item in Virtuallist" :key="item.id">
        <div class="item">{{ item.name }}</div>
        <div class="item">{{ item.age }}</div>
        <div class="item">{{ item.birthday }}</div>
        <div class="item">{{ item.city }}</div>
        <div class="item">{{ item.content }}</div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import { getVirtual } from "@/api/Virtual-list";
// // import axios from "axios";
// import { onMounted, ref } from "vue";
export default {
  //   setup() {
  //     const Virtuallist = ref([]);
  //     const getList = async () => {
  //       console.log(1);
  //       let { data } = await getVirtual();
  //       Virtuallist.value = data;
  //       console.log(Virtuallist.value);
  //       //   axios.get("/parameter/virtual/query").then((res) => {
  //       //     console.log(res);
  //       //   });
  //     };
  //     onMounted(getList);
  //     return { getList };
  //   },
};
</script>

<style lang="scss" scoped>

.table {
  height: 500px;
  width: 500px;
  .item {
    display: inline-block;
    width: calc(100% / 5);
  }
}
</style>
