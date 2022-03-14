<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-row>
            <el-col :span="6">
              <div class="item">
                <div class="loading1">
                  <div class="rect1"></div>
                  <div class="rect2"></div>
                  <div class="rect3"></div>
                  <div class="rect4"></div>
                  <div class="rect5"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="loading2"></div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="loading3">
                  <div class="circle1"></div>
                  <div class="circle2"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="loading4">
                  <div class="circle3"></div>
                  <div class="circle4"></div>
                  <div class="circle5"></div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <el-row>
            <el-col :span="6">
              <div class="item">
                <div class="loading5">
                  <div class="rect6"></div>
                  <div class="rect7"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="loading6">
                  <div class="rect8"></div>
                  <div class="rect9"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="loading7"></div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="loading8">
                  <div class="item-bound">
                    <div class="bound1 bound"></div>
                    <div class="bound2 bound"></div>
                    <div class="bound3 bound"></div>
                    <div class="bound4 bound"></div>
                  </div>
                  <div class="item-bound">
                    <div class="bound5 bound"></div>
                    <div class="bound6 bound"></div>
                    <div class="bound7 bound"></div>
                    <div class="bound8 bound"></div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    //日历的选择
    const valueData = ref(new Date());
    //日期的选择
    const value1 = ref("");
    return {
      valueData,
      value1,
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.app-container {
  padding: 10px;
  box-sizing: border-box;
  .calendar-container {
    width: 550px;
    height: 400px;
  }

  .demo-datetime-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
  }
  .demo-datetime-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color-base);
    flex: 1;
  }
  .demo-datetime-picker .block:last-child {
    border-right: none;
  }
  .demo-datetime-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }

  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  .el-row {
    margin-bottom: 0;
    height: 120px;
  }

  .item {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bg-purple {
    // 加载效果1
    .loading1 {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        width: 6px;
        height: 100%;
        background-color: #67cf22;
        display: inline-block;
        animation: loading1 1.2s infinite ease-in-out;
      }
      .rect2 {
        animation-delay: -1.1s;
      }
      .rect3 {
        animation-delay: -1s;
      }
      .rect4 {
        animation-delay: -0.9s;
      }
      .rect5 {
        animation-delay: -0.8s;
      }
      @keyframes loading1 {
        0%,
        40%,
        100% {
          transform: scaleY(0.4);
        }
        20% {
          transform: scaleY(1);
        }
      }
    }

    //加载效果2
    .loading2 {
      width: 80px;
      height: 80px;
      display: inline-block;
      background-color: #67cf22;
      animation: loading2 1.2s infinite ease-in-out;
    }

    @keyframes loading2 {
      0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      }
      50% {
        transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
      }
      100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
      }
    }

    //加载效果3
    .loading3 {
      width: 80px;
      height: 80px;
      position: relative;

      .circle1,
      .circle2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.6;
        background-color: #67cf22;
        animation: loading3 2s infinite ease-in-out;
      }
      .circle2 {
        animation-delay: -1s;
      }
      @keyframes loading3 {
        0%,
        100% {
          transform: scale(0);
        }
        50% {
          transform: scale(1);
        }
      }
    }

    //加载效果4
    .loading4 {
      width: 60%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .circle3,
      .circle4,
      .circle5 {
        width: 30px;
        height: 30px;
        background-color: #67cf22;
        border-radius: 50%;
        animation: loading4 1s infinite ease-in-out;
      }
      .circle4 {
        animation-delay: -0.8s;
      }
      .circle5 {
        animation-delay: -0.6s;
      }

      @keyframes loading4 {
        0%,
        100% {
          transform: scale(0);
        }
        50% {
          transform: scale(1);
        }
      }
    }
  }
  .bg-purple-light {
    // 加载效果5
    .loading5 {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: relative;
      .rect6,
      .rect7 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        background-color: #67cf22;
        animation: loading5 1.2s infinite ease-in-out;
      }

      .rect7 {
        animation-delay: -0.6s;
      }
      @keyframes loading5 {
        0% {
          transform: translateX(-25px) translateY(0px) scale(0.5);
        }
        25% {
          transform: translateX(-25px) translateY(-25px) rotate(-45deg) scale(1);
        }
        50% {
          transform: translateX(25px) translateY(-25px) scale(0.5)
            rotate(-90deg);
        }
        75% {
          transform: translateX(25px) translateY(25px) scale(1) rotate(-125deg);
        }
        100% {
          transform: translateX(-25px) translateY(25px) scale(0.5)
            rotate(-180deg);
        }
      }
    }
    //加载效果6
    .loading6 {
      width: 60%;
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: rotate 2s infinite linear;

      .rect8,
      .rect9 {
        width: 40px;
        height: 40px;
        border-radius: 50px;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #67cf22;
        animation: loading6 1.2s infinite ease-in-out;
      }
      .rect9 {
        animation-delay: -0.6s;
        top: auto;
        bottom: 0;
      }
      @keyframes rotate {
        100% {
          transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes loading6 {
        0%,
        100% {
          transform: scale(0);
        }

        50% {
          transform: scale(1);
        }
      }
    }
    //加载效果7
    .loading7 {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      animation: loading7 1s infinite ease-in-out;
      background-color: #67cf22;
    }

    @keyframes loading7 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }

    //加载效果8
    .loading8 {
      width: 80px;
      height: 80px;
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .item-bound {
        width: 40px;
        height: 40px;
        position: absolute;

        &:nth-child(2) {
          transform: rotateZ(45deg);
        }
        &:nth-child(3) {
          transform: rotateZ(135deg);
        }
        .bound1,
        .bound5,
        .bound9 {
          position: absolute;
          top: 0;
          left: 0;
        }
        .bound2,
        .bound6,
        .bound10 {
          position: absolute;
          right: 0;
          top: 0;
        }

        .bound3,
        .bound7,
        .bound11 {
          position: absolute;
          right: 0;
          bottom: 0;
        }

        .bound4,
        .bound8,
        .bound12 {
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      .bound {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #67cf22;
        animation: loading8 2.4s infinite ease-in-out;
      }
      .bound5 {
        animation-delay: -2s;
      }
      .bound2 {
        animation-delay: -1.8s;
      }
      .bound6 {
        animation-delay: -1.6s;
      }

      .bound3 {
        animation-delay: -1.2s;
      }
      .bound7 {
        animation-delay: -1s;
      }
      .bound4 {
        animation-delay: -0.8s;
      }

      .bound8 {
        animation-delay: -0.6s;
      }
      @keyframes loading8 {
        0% {
          //   transform: scale(1);
          opacity: 1;
        }
        100% {
          //   transform: scale(0);
          opacity: 0;
        }
      }
    }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 120px;
  }
}
</style>
