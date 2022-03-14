// var Mock = require("mockjs");

// let dataList = Mock.mock({
//   "user|1-6": [
//     {
//       "id|+1": 1,
//       name: "@cname",
//       "age|20-30": 0,
//       city: "@city(true)",
//       birthday: '@datetime("yyyy-MM-dd")',
//     },
//   ],
// });
let token =
  "eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjVlMWM4MDFmLTJkNjUtNDVmZS04YzhjLThlNTYxNzI5MmMxNCJ9.uCf4kL-mg-cTsuB6wp-AlxEOvTFo63znba8eKBE6mwOfPkS-Dsf0Q5WZ6PK69HszBLCVMNIEIJyR_QCi6FSlBA";
export default {
  "get|/login": (config) => {
    //result字符串转成数组
    let result = Object.values(JSON.parse(config.body));
    //r是处理好的数组
    var r = result.filter((s) => {
      return s && s.trim();
    });
    if (r.length > 0) {
      return {
        status: 200,
        message: "success",
        token: token,
      };
    } else {
      return {
        status: 500,
        message: "用户名或者密码不能为空",
      };
    }
  },
};
