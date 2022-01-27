import request from "@/utils/request";

// 查询缓存详细
export function getDemo() {
  return request({
    url: "/parameter/query",
    method: "get",
  });
}

// 查询缓存详细
export function getData() {
  return request({
    url: "/parameter/list",
    method: "get",
  });
}
