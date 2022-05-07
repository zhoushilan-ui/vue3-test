var Mock = require("mockjs");

let demoList = [
  {
    id: 1,
    name: "zs",
    age: "23",
    job: "前端工程师",
  },
  {
    id: 2,
    name: "ww",
    age: "24",
    job: "后端工程师",
  },
];
let dataList = Mock.mock({
  "user|1-6": [
    {
      "id|+1": 1,
      name: "@cname",
      "age|20-30": 0,
      city: "@city(true)",
      birthday: '@datetime("yyyy-MM-dd")',
    },
  ],
});

export default {
  "get|/parameter/query": () => {
    return {
      code: 200,
      message: "success",
      data: demoList,
    };
  },
  "get|/parameter/list": () => {
    return {
      code: 200,
      message: "success",
      data: dataList,
    };
  },
};
