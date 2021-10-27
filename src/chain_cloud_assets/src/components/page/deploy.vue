<template>
  <div>
    <headerview></headerview>

    <div>
      <div class="banner">
        <div class="qd-title">Quick Deployment</div>

        <div class="qd-outer">
          <el-progress
            :percentage="percentage"
            :color="customColor"
            class="qd-progress"
          >
          </el-progress>

          <el-row class="progress-row">
            <el-col :span="6">1.Auth from your github</el-col>
            <el-col :span="6">2.Load target repository and branch</el-col>
            <el-col :span="6">3.Tigger build and deploy</el-col>
            <el-col :span="6">4.Watch your canister</el-col>
          </el-row>
        </div>
      </div>

      <div class="actionview" v-if="step == 1">
        <div class="actiontitle">Continuous Deployment</div>
        <div class="actionsubtitle">
          Choose the repository you want to link to your site on IC host.
        </div>
        <el-button class="connect-github" v-on:click="connetgithubaction"
          >Connect with GitHub</el-button
        >
      </div>

      <div class="actionview" v-if="step == 2">
        <el-button type="text" icon="el-icon-arrow-left" v-on:click="backaction2">back</el-button>
        <div class="actiontitle">Continuous Deployment: GitHub App</div>
        <div class="actionsubtitle">
          When you push to Git we run your build tool on our services and deploy the result.
        </div>
      </div>

      <div class="actionview" v-if="step == 3">
        <el-button type="text" icon="el-icon-arrow-left" v-on:click="backaction3">back</el-button>
        <div>Auth from giuthub</div>
      </div>

      <div class="actionview" v-if="step == 4">
        <el-button type="text" icon="el-icon-arrow-left" v-on:click="backaction4">back</el-button>
        <div>Auth from giuthub</div>
      </div>
    </div>

    <footerview></footerview>
  </div>
</template>

<script>
import headerview from "../common/header.vue";
import footerview from "../common/footer.vue";

export default {
  name: "deployview",
  data() {
    return {
      githubapp: "chain-cloud",
      customColor: "#409eff",
      percentage: 25,
      step: 1,
    };
  },
  components: {
    headerview,
    footerview,
  },
  mounted() {
    console.log(window.location.search)
    console.log("path: %s", this.$router.path);
    console.log(this.$router.params);
  },
  methods: {
    connetgithubaction: function (event) {
      if (event) {
        // install github app: chain-cloud
        var targeturl = "https://github.com/apps/chain-cloud/installations/new"
        window.open(targeturl)

        window.close()

        this.step = 2
        this.percentage = 50
      }
    },
    backaction2: function (event) {
      if (event) {   
        this.step = 1;
        this.percentage = 25;
      }
    },
    backaction3: function (event) {
      if (event) {                                                                                                                                                                                                                                                                                               
        this.step = 2;
        this.percentage = 50;
      }
    },
    backaction4: function (event) {
      if (event) {                                                                                                                                                                                                                                                                                                  
        this.step = 3;
        this.percentage = 75;
      }
    },
  },
  destroyed() {},
};
</script>

<style scoped>
.banner {
  width: 100%;
  background-image: url(https://storageapi.fleek.co/lyswifter-team-bucket/chain-cloud/quickdeployment_banner_bg@2x.png);
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: contain;
}

.qd-title {
  margin-left: 260px;
  padding-top: 40px;
  width: 382px;
  height: 62px;
  font-size: 44px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #252b3a;
  line-height: 62px;
}

.qd-outer {
  width: 1440px;
  height: 110px;
  margin: 0px auto;
  background: #ffffff;
  box-shadow: 0px 10px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

.qd-progress {
  margin-top: 110px;
  padding-top: 45px;
  padding-left: 40px;
  padding-right: 40px;
}

.progress-row {
  width: 94%;
  margin: 10px auto;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #252b3a;
  line-height: 22px;
}
</style>

<style scoped>
.actionview {
  width: 100%;
  margin-top: 35px;
  padding-left: 260px;
}

.actiontitle {
  height: 45px;
  font-size: 32px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #1776ff;
  line-height: 45px;
}

.actionsubtitle {
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #252b3a;
  line-height: 22px;
}

.connect-github {
  margin-top: 20px;
  background-color: black;
  color: white;
  font-weight: bold;
  border-radius: 4px;
}
</style>
