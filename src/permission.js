import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { router } from "./router";
import { getToken } from "@/utils/auth";
NProgress.configure({
  showSpinner: false,
});
const whiteList = ["/login"];
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (from.path === "/login" && (to.path === "/" || to.path === "/index")) {
    sessionStorage.setItem("backPage", "1");
  }
  console.log(getToken());
  if (getToken()) {
    console.log(1111);
    // if (to.path === "/login") {
    //   next({
    //     path: "/",
    //   });
    // }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      console.log(1);
      // 在免登录白名单，直接进入
      next();
    } else {
      console.log(2);
      //   next(`/login?redirect=${to.fullPath}`); // 否则全部重定向到登录页
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  //   if (!failure) sendToAnalytics(to.fullPath);
  NProgress.done();
});
