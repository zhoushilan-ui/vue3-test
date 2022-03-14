import request from "@/utils/request";

// 获取图标的数据
export function getIcons() {
  return request({
    url: "/getIcon",
    method: "get",
  });
}
