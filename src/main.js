import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "./assets/style/app.css";
//引入路由
import { router } from "./router";
// import "./permission";
// import store from './store'
// 引入mock.js
require("./mock");
//引入svg
// svg图标
// import "virtual:svg-icons-register";
import SvgIcon from "@/components/SvgIcon";
import elementIcons from "@/components/SvgIcon/svgicon";
// 注册指令
// import plugins from "./plugins"; // plugins
//main文件
// import particles from "particles.js";
import VueParticles from "vue-particles";

const app = createApp(App);
//引入echarts
import * as echarts from "echarts";
app.config.globalProperties.$echarts = echarts;
app.use(ElementPlus, { size: "small", zIndex: 3000, locale: zhCn });
app.use(router);
// app.use(particles);
app.use(VueParticles);
app.component("svg-icon", SvgIcon);
app.use(elementIcons);
app.mount("#app");
