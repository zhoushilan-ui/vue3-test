<template>
  <div class="app-container">
    <!-- <i class="iconfont">&#xe60f;</i>
    <i class="iconfont">&#xe608;</i> -->
    <!-- <div class="">
      <el-date-picker
        v-model="value1"
        size="default"
        type="datetime"
        placeholder="请选择时间"
      >
      </el-date-picker>
    </div>
    <div class="calendar-container"><el-calendar v-model="valueData" /></div> -->
    <loading1></loading1>
    <loading2></loading2>
  </div>
</template>

<script>
import { ref } from "vue";
import loading1 from "./loading1.vue";
import loading2 from "./loading2.vue";
export default {
  data() {
    return {};
  },
  components: { loading1, loading2 },
  setup() {
    //日历的选择
    const valueData = ref(new Date());
    //日期的选择
    const value1 = ref("");
    return {
      valueData,
      value1,
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.app-container {
  padding: 10px;
  box-sizing: border-box;
  .calendar-container {
    width: 550px;
    height: 400px;
  }

  .demo-datetime-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
  }
  .demo-datetime-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color-base);
    flex: 1;
  }
  .demo-datetime-picker .block:last-child {
    border-right: none;
  }
  .demo-datetime-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>
