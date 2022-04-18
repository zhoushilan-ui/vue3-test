<template>
  <div><div id="echarts2" ref="echarts2"></div></div>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
// import "echarts/map/js/province/beijing.js";
// import "echarts/lib/chart/line";
// import "echarts/lib/chart/pie";
import "echarts-gl";
const { proxy } = getCurrentInstance();
const echarts2 = ref(null);
const item1 = ref({
  color: ["red", "green", "pik", "yellow"],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/> {b} :{c} ({d}%)",
    position: "right",
  },
  calculable: true,
  series: [
    {
      name: "出车事由",
      type: "pie",
      radus: ["20%", "70%"],
      center: ["60%", "70%"],
      roseType: "area",
      label: {
        normal: {
          textStyle: {
            color: "#2fafe6",
          },
        },
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: "#2fafe6",
          },
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      data: [
        { value: 634, name: "公务" },
        { value: 344, name: "出差" },
        { value: 534, name: "劫机" },
        { value: 364, name: "招待" },
        { value: 524, name: "参会" },
      ],
    },
  ],
});
onMounted(() => {
  const myEcharts = proxy.$echarts.init(echarts2.value);
  myEcharts.setOption(item1.value);
  window.onresize = () => {
    myEcharts.resize();
  };
});
</script>

<style>
#echarts2 {
  height: 500px;
}
</style>
