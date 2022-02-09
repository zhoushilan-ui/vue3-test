import { createRouter, createWebHashHistory } from "vue-router";
const test1 = () => import("@/views/demo/test1");
const test6 = () => import("@/views/demo/test6");
const index = () => import("@/views/index");

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
    path: "/",
    name: "index",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        name: "index",
        components: {
          default: index,
          LeftSidebar,
          TopNavbar,
        },
      },
      {
        path: "test1",
        components: {
          default: test1,
          LeftSidebar,
          TopNavbar,
        },
      },
      {
        path: "test6",
        components: {
          default: test6,
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
