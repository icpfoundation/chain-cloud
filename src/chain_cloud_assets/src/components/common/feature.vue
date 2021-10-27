<template>
  <div class="featureview">
    <div class="titleview">Why Chain Cloud ?</div>
    <el-row :gutter="40" class="feature-row">
      <el-col :span="6" :offset="3">
        <div id="lefttop" class="b-left below">
          <img src="../../../assets/img/why_pic01_hover@2x.png" alt="" />
          <div class="desctitle">
            Help easily migrate traditional application to Internet Computer
          </div>
        </div>

        <div class="b-left below notfirst">
          <img src="../../../assets/img/why_pic04_nor@2x.png" alt="" />
          <div class="desctitle">
            Make large scale canister's management more easily
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="b-mid below notfirst">
          <img src="../../../assets/img/why_pic02_nor@2x.png" alt="" />
          <div class="desctitle">
            Monitor running status of canisters, like CPU load, memory usage and
            network bandwidth
          </div>
        </div>

        <div class="b-mid below notfirst">
          <img src="../../../assets/img/why_pic05_nor@2x.png" alt="" />
          <div class="desctitle">
            Canisters with different functions, different permissions, different
            security levels
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="b-right below notfirst">
          <img src="../../../assets/img/why_pic03_nor@2x.png" alt="" />
          <div class="desctitle">
            Indicate the several most Cycle usage functions and point out to
            reduce
          </div>
        </div>

        <div class="b-right below notfirst">
          <img src="../../../assets/img/why_pic06_nor@2x.png" alt="" />
          <div class="desctitle">Make container logs more readables</div>
        </div>
      </el-col>
    </el-row>

    <div class="footstartview">
      <el-row>
        <el-col :span="2" :offset="3">
          <div class="qs-title">Quick Start Now！</div>
        </el-col>

        <el-col :span="6">
          <div class="qs-empty"></div>
        </el-col>

        <el-col :span="13">
          <div class="qs-input"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "featureview",
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
.featureview {
  width: 100%;
  height: 806px;
  background-image: url(https://storageapi.fleek.co/lyswifter-team-bucket/chain-cloud/bg_pic@2x.png);
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 279px 282px;
  background-color: white;
}

.titleview {
  padding-left: 290px;
  padding-top: 30px;
  width: 305px;
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #1776ff;
  line-height: 45px;
}

.feature-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}

.b-left {
  text-align: center;
}

#lefttop {
  background: linear-gradient(270deg, #0059ff 0%, #1776ff 100%);
  box-shadow: 0px 9px 24px 0px rgba(23, 118, 255, 0.5);
  border-radius: 8px;
  border: 1px solid #ffffff;
}

#lefttop .desctitle {
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 25px;
}

.b-mid {
  text-align: center;
}

.b-right {
  text-align: center;
}

img {
  width: 100%;
  height: 150px;
}

.notfirst img {
  border-style: dashed;
  border-width: thin;
}

.desctitle {
  margin-top: 5px;
  width: 373px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #252b3a;
  line-height: 25px;
}

.below {
  margin-top: 30px;
}
</style>

<style scoped>
.footstartview {
  width: 100%;
  height: 124px;
  margin-top: 169px;
  background-image: url(https://storageapi.fleek.co/lyswifter-team-bucket/chain-cloud/foottop_bg.png);
  background-position: 0px 0px;
  background-position-x: 0px;
  background-position-y: 0px;
}

.qs-title {
  width: 282px;
  height: 45px;
  margin-top: 25%;
  margin-left: 100px;
  font-size: 32px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 45px;
}

.qs-empty {
  height: 124px;
}

.qs-input {
  height: 124px;
}
</style>