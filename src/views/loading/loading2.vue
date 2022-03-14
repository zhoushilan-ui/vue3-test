<template>
  <div class="app-contanier">
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-row>
            <el-col :span="6">
              <div class="item">
                <div class="loading1">
                  <div class="loading1-item"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <div class="loading2 loading21">
                  <div class="loading2-item"></div>
                </div>
                <div class="loading2-1 loading21">
                  <div class="loading2-item"></div>
                </div>
                <div class="loading2-3 loading21">
                  <div class="loading2-item"></div>
                </div>
                <div class="loading2-4 loading21"></div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item"></div>
            </el-col>
            <el-col :span="6">
              <div class="item"></div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <el-row>
            <el-col :span="6">
              <div class="item"></div>
            </el-col>
            <el-col :span="6">
              <div class="item"></div>
            </el-col>
            <el-col :span="6">
              <div class="item"></div>
            </el-col>
            <el-col :span="6">
              <div class="item"></div>
            </el-col>
          </el-row></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-contanier {
  padding: 10px;
  box-sizing: border-box;
  background-color: #37474f;

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
    //加载效果1
    .loading1 {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: linear-gradient(#0eceed, 50%, #37474f);
      display: flex;
      justify-content: center;
      align-items: center;
      animation: loading1 1s infinite ease-in-out;
      .loading1-item {
        width: 85px;
        height: 85px;
        border-radius: 50%;
        background-color: #37474f;
      }
    }

    @keyframes loading1 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .loading2-item {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #0eceed;
      position: absolute;
      left: 50%;
      top: -5px;
      transform: translate(-50%, 0);
    }
    .loading21 {
      border-radius: 50%;
      border: 0.8px solid #fff;
      position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   transform: translate(-50%, -50%);
      animation: loading2 2s infinite ease-in-out;
    }
    //加载效果2
    .loading2 {
      width: 120px;
      height: 120px;
    }

    .loading2-1 {
      width: 90px;
      height: 90px;
    }

    .loading2-3 {
      width: 60px;
      height: 60px;
    }
    .loading2-4 {
      width: 30px;
      height: 30px;
      background-color: #0eceed;
      border: 0.8px solid #0eceed;
    }

    @keyframes loading2 {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(359deg);
      }
    }
    .loading2-1 {
      animation-delay: -1.6s;
    }
    .loading2-3 {
      animation-delay: -1.2s;
    }
  }
  .bg-purple-light {
  }
  .grid-content {
    border-radius: 4px;
    min-height: 120px;
  }
}
</style>
