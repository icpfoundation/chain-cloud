<template>
  <div class="outview">
    <el-row>
      <el-col :span="3">
        <div class="footlogo">
          <img src="../../../assets/img/nav_logo@2x.png" alt="" />
        </div>
      </el-col>

      <el-col :span="19">
        <div class="footmidview"></div>
      </el-col>

      <el-col :span="2">
        <div class="aboutview">
          <div class="about">About us</div>
          <div class="row">
            <div class="col">
              <img
                class="iconsize"
                src="../../../assets/img/wechat@2x.png"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="iconsize"
                src="../../../assets/img/twitter@2x.png"
                alt=""
              />
            </div>
            <div class="col">
              <img
                class="iconsize"
                src="../../../assets/img/facebook@2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "footerview",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  destroyed() {},
};
</script>

<style scoped>
.footmidview {
  height: 60px;
}

.about {
  width: 60px;
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  line-height: 20px;
}

.outview {
  border-top: lightgrey solid 1px;
  padding-top: 50px;
  padding-left: 10%;
}

.footlogo {
  width: 184px;
  height: 24px;
}

.footlogo img {
  width: 100%;
  height: 100%;
}

.iconsize {
  width: 24px;
  height: 24px;
}

.row {
  box-sizing: border-box;
  width: 120px;
}

.row .col {
  float: left;
  width: 33%;
  border-width: 10px;
}
</style>