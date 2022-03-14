<template>
  <div class="app-container" :style="styleObject">
    <div class="form-content">
      <el-form
        :label-position="labelPosition"
        label-width="50px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <div style="margin-bottom: 30px">登录</div>
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="formLabelAlign.password"
            label-suffix="Money"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { getLogin } from "@/api/logo";
import { useRouter } from "vue-router";
// import Cookies from "js-cookie";
import back from "@/assets/images/back.jpg";
export default {
  data() {
    return {
      back,
      styleObject: {
        backgroundImage: "url(" + back + ")",
      },
    };
  },
  setup() {
    const labelPosition = ref("right");
    const formLabelAlign = reactive({
      name: "",
      password: "",
    });
    const router = useRouter();
    const redirect = ref(undefined);
    const handleLogin = () => {
      getLogin(formLabelAlign).then(({ status }) => {
        if (status == 200) {
          ElMessage({
            message: "登录成功！",
            type: "success",
          });
          //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
          router.push({ path: redirect.value || "/" });
        }
      });
    };
    return {
      labelPosition,
      formLabelAlign,
      handleLogin,
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .form-content {
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    padding: 20px;
    height: 200px;

    .el-form-item:nth-child(4) {
      margin-bottom: 0px;
      margin-top: 40px;
    }
  }
}
</style>
