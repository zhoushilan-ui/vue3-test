<template>
  <div>
    <gantt
      :tasks="ganttTasks"
      :columns="ganttColumns"
      style="height: 500px"
    ></gantt>
    <!-- <div class="right-container">
      <ul class="gantt-messages">
        <li
          class="gantt-message"
          v-for="(message, index) in messages"
          v-bind:key="index"
        >
          {{ message }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Gantt from "./gantt.vue";
import { gantt } from "dhtmlx-gantt"; // 引入dhtmlx-gantt
export default {
  name: "Example",
  components: { Gantt },
  setup() {
    const ganttTasks = reactive({
      data: [
        {
          id: 1,
          text: "Task #1",
          start_date: "2022-01-17",
          end_date: "2022-01-19",
          duration: 3,
          progress: 60,
          row_height: 70, //设置行高
          bar_height: 60, //设置bar的高
          open: true,
        },
        {
          id: 2,
          text: "Task #2",
          start_date: "2022-01-20",
          end_date: "2022-01-25",
          duration: 3,
          progress: 0.4,
        },
      ],
      //任务与任务之间的联系关系
      links: [{ source: 2, target: 1, type: 1 }],
    });
    //表头配置显示列 name:绑定数据的名称  align：对其方式  label显示在表头的名称
    const ganttColumns = ref([
      { name: "wbs", label: "编号", width: 40, template: gantt.getWBSCode },
      {
        name: "text",
        label: "文件名",
        width: "*",
        // tree: true,
      },
      { name: "start_date", label: "开始时间", align: "left" },
      { name: "end_date", label: "结束时间", align: "center" },
      { name: "progress", label: "进度", align: "center" },
      { name: "add", label: "", width: 44 },
    ]);

    return {
      ganttTasks,
      ganttColumns,
    };
  },
};
</script>

<style lang="scss" scoped>
.dHtmlx-container {
  //   background-color: aquamarine;
}
</style>
