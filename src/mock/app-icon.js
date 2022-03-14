// var Mock = require("mockjs");

//icon 图标的数据
var icon = [
  "\ue602",
  "\ue603",
  "\ue604",
  "\ue605",
  "\ue606",
  "\ue607",
  "\ue607",
  "\ue608",
  "\ue609",
  "\ue60a",
  "\ue60b",
  "\ue60c",
  "\ue60d",
  "\ue60e",
  "\ue60f",
  "\ue610",
  "\ue611",
  "\ue612",
  "\ue613",
];
export default {
  "get|/getIcon": () => {
    return {
      status: 200,
      message: "success",
      data: icon,
    };
  },
};
