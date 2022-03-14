import request from "@/utils/request";

// 登录接口
export function getLogin(query) {
  return request({
    url: "/login",
    method: "get",
    data: query,
  });
}
