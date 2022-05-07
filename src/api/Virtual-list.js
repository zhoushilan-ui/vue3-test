import request from "@/utils/request";

// 查询列表数据
export function getVirtual() {
  return request({
    url: "/parameter/virtual/query",
    method: "get",
  });
}
