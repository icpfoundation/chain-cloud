<template>
  <div>
    <div class="bannerimg">
      <img
        class="bannerlogo"
        src="../../../assets/img/nav_logo@2x.png"
        alt=""
      />
      <div class="titleview">Cloud platform development on Web3.0</div>
      <div class="subtitleview">
        Enjoy the new generation of Internet technology, Get the dividends of
        innovation
      </div>

      <el-button class="startbtn" type="primary" v-on:click="doStart">
        <el-link href="http://rno2w-sqaaa-aaaaa-aaacq-cai.localhost:8000/" target="_self">Get Start</el-link>
        <i class="el-icon-arrow-right el-icon-right"></i>
        </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "bannerview",
  data() {
    return {};
  },
  components: {},
  methods: {
    // doStart() {
    //   let principle = window.localStorage.getItem("principleString");
    //   if (principle == undefined || principle == "" || principle == null) {
    //     this.$message({
    //       showClose: true,
    //       message: "Warning, should login first",
    //       type: "warning",
    //     });
    //     return;
    //   }

    //   if (this.$router.path != "/deploy") {
    //     this.$router.push("/deploy");
    //   }
    // },
  },
  mounted() {},
  destroyed() {},
};
</script>

<style scoped>
.bannerimg {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 800px;
  background-image: url(https://storageapi.fleek.co/lyswifter-team-bucket/chain-cloud/banner_bg01.png);
  background-repeat: no-repeat;
  background-position-x: 0px;
  background-position-y: 0px;
}

.bannerlogo {
  width: 243px;
  height: 32px;
  padding-top: 225px;
  padding-left: 10%;
  margin: unset;
}

.titleview {
  padding-left: 10%;
  text-align: left;
  margin-top: 28px;
  width: 983px;
  height: 73px;
  font-size: 52px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #252b3a;
  line-height: 73px;
}

.subtitleview {
  padding-left: 10%;
  text-align: left;
  margin-top: 24px;
  width: 751px;
  height: 28px;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #252b3a;
  line-height: 28px;
}

.startbtn {
  margin-left: 10%;
  margin-top: 63px;
  width: 161px;
  height: 54px;
  border-radius: 8px;
  background: #1776ff;
  font-size: 16px;
  font-weight: 400;
}
</style>