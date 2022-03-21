<template>
  <div class="dHtmlx-container" ref="ganttRef" @action="handler"></div>
</template>

<script>
import { onMounted, ref } from "vue";
import { gantt } from "dhtmlx-gantt"; // 引入dhtmlx-gantt
export default {
  name: "Gantt",
  props: {
    // 任务对象
    tasks: {
      type: Object,
      default: () => {
        return {
          data: [], // 数据数组
          links: [], // 连接关系
        };
      },
    },
    // 显示列设置
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // 显示单位
    scaleUnit: {
      type: String,
      default: "day", // “minute”, “hour”, “day”, “week”, “quarter”, “month”, “year”
    },
    // 时间显示格式
    dateScale: {
      type: String,
      //   default: "%Y-%m-%d",
      default: "%d",
    },
  },
  setup(props) {
    // 挂载ref
    const ganttRef = ref();
    onMounted(() => {
      // 清空之前的配置
      gantt.clearAll();
      // 默认配置
      gantt.config.xml_date = "%Y-%m-%d";
      gantt.i18n.setLocale("cn"); // 设置中文
      gantt.config.readonly = true; // 设置为只读
      // 显示列配置
      gantt.config.columns = props.columns;
      gantt.config.scale_unit = props.scaleUnit;
      //   gantt.config.date_scale = props.dateScale;

      //设置x轴日期
      //   gantt.config.scale_unit = "year";
      //   gantt.config.step = 2;
      //   gantt.config.date_scale = "星期" + "%D" + " " + props.dateScale;
      gantt.config.scale_unit = "year";
      gantt.config.step = 1;
      gantt.config.date_scale = "%Y";
      gantt.config.subscales = [
        {
          unit: "day",
          step: 1,
          date: props.dateScale + "号   " + "星期" + "%D",
        },
        { unit: "month", step: 1, date: "%m" },
      ]; //当右侧不止显示年份时，可以添加展示月日，添加一个就加一行
      //设置表头的行高
      gantt.config.scale_height = 80;
      gantt.config.resize_rows = true;
      gantt.config.order_branch = true;

      //设置中文
      gantt.i18n.setLocale("cn");
      // 初始化甘特图
      gantt.init(ganttRef.value);
      // 渲染数据
      gantt.parse(props.tasks);
    });

    return {
      ganttRef,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~dhtmlx-gantt/codebase/dhtmlxgantt.css";
.dHtmlx-container {
  //   height: 500px;
  //   width: 500px;
  //   background-color: aquamarine;
}
</style>
