import { createRouter, createWebHashHistory } from "vue-router";
const test1 = () => import("@/views/demo/test1");
// const test6 = () => import("@/views/demo/test6");
const index = () => import("@/views/index");
const login = () => import("@/views/login");
import Layout from "@/layout";
import LeftSidebar from "@/layout/components/silder";
import TopNavbar from "@/layout/components/navbar";
const routes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: (resolve) => require(["@/views/redirect"], resolve),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: login,
    hidden: true,
    // children: [
    //   {
    //     path: "/redirect/:path(.*)",
    //     component: (resolve) => require(["@/views/redirect"], resolve),
    //   },
    // ],
  },
  {
    path: "/",
    name: "index",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        name: "首页",
        components: {
          default: index,
          LeftSidebar,
          TopNavbar,
        },
      },
      {
        path: "loading",
        name: "动画加载效果",
        components: {
          default: import("@/views/loading/index.vue"),
          LeftSidebar,
          TopNavbar,
        },
      },
      {
        path: "test1",
        name: "test1",
        components: {
          default: test1,
          LeftSidebar,
          TopNavbar,
        },
      },
      {
        path: "echarts",
        name: "图表",
        components: {
          default: import("@/views/echarts/index.vue"),
          LeftSidebar,
          TopNavbar,
        },
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
