<template>
  <div class="container">
    <p>第二个甘特图</p>
    <DefaultTheme>
      <Gantt
        :scales="scales"
        :columns="columns"
        :tasks="tasks"
        :links="links"
        style="height: 500px"
      />
    </DefaultTheme>
    <p>第三个甘特图</p>
    <MaterialTheme>
      <Gantt
        :scales="scales"
        :columns="columns"
        :tasks="tasks"
        :links="links"
        style="height: 500px"
      />
    </MaterialTheme>
    <!-- <SkyblueTheme>
      <Gantt
        :scales="scales"
        :columns="columns"
        :tasks="tasks"
        :links="links"
        style="height: 500px"
      />
    </SkyblueTheme> -->
    <p>第四个甘特图</p>
    <div class="wx-default">
      <Gantt
        :scales="scales"
        :columns="columns"
        :tasks="tasks"
        :links="links"
        style="height: 500px"
      />
    </div>
    <p>第五个甘特图</p>
    <div class="wx-material">
      <Gantt
        :scales="scales"
        :columns="columns"
        :tasks="tasks"
        :links="links"
        style="height: 500px"
      />
    </div>

    <!-- <p>第五个甘特图</p>
    <div class="wx-skyblue">
      <Gantt
        :scales="scales"
        :columns="columns"
        :tasks="tasks"
        :links="links"
        style="height: 500px"
      />
    </div> -->
  </div>
</template>

<script>
import {
  Gantt,
  DefaultTheme,
  MaterialTheme,
  //   SkyblueTheme,
} from "@dhtmlx/trial-vue-gantt";
export default {
  components: {
    DefaultTheme,
    Gantt,
    MaterialTheme,
    // SkyblueTheme,
  },
  setup() {
    const scales = [
      { unit: "month", step: 1, format: "MMMM yyy" },
      { unit: "day", step: 1, format: "d" },
    ];

    const columns = [
      { name: "text", label: "Task name", align: "center", width: "100%" },
      { name: "start", label: "Start time", align: "center" },
      { name: "duration", label: "Duration", width: "70px", align: "center" },
      { name: "add-task", label: "", width: "50px", align: "center" },
    ];

    const tasks = [
      {
        id: 1,
        open: true,
        start_date: "2020-11-06",
        duration: 8,
        text: "vue Gantt Widget",
        progress: 60,
        type: "project",
      },
      {
        id: 2,
        parent: 1,
        start_date: "2020-11-06",
        duration: 4,
        text: "Lib-Gantt",
        progress: 80,
      },
    ];

    const links = [{ source: 2, target: 1, type: 0 }];
    return {
      links,
      tasks,
      columns,
      scales,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px;

  .area {
    border: 1px solid #ccc;
  }
}
</style>
