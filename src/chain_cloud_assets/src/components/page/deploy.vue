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
        <el-button
          type="text"
          icon="el-icon-arrow-left"
          v-on:click="backaction2"
          >back</el-button
        >
        <div class="actiontitle">Continuous Deployment: GitHub App</div>
        <div class="actionsubtitle">
          When you push to Git we run your build tool on our services and deploy
          the result.
        </div>

        <div class="git-outer">
          <div class="git-title">
            <el-row class="title-row">
              <el-col :span="18" class="title-col">
                <div>
                  <img src="../../../assets/img/logo_icon@2x.png" alt="" />
                  <span>lyswifter</span>
                </div>
              </el-col>

              <el-col :span="5" class="title-col">
                <el-input
                  placeholder="Type something"
                  v-model="inputSearchRepo"
                >
                  <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
              </el-col>

              <el-col :span="1" class="title-col">
                <div class=""></div>
              </el-col>
            </el-row>
          </div>

          <div class="git-repo">
            <el-row class="each-repo">
              <el-col :span="22">
                <img src="../../../assets/img/github-fill.png" alt="" />
                <span>repo name</span>
              </el-col>
              <el-col :span="2">
                <el-checkbox v-model="checked"></el-checkbox>
              </el-col>
            </el-row>

            <el-row class="each-repo">
              <el-col :span="22">
                <img src="../../../assets/img/github-fill.png" alt="" />
                <span>repo name</span>
              </el-col>
              <el-col :span="2">
                <el-checkbox v-model="checked"></el-checkbox>
              </el-col>
            </el-row>
          </div>

          <div class="git-more">
            <span>Can’t find your GitHub repo？</span>
            <a href="">Choose more</a>
          </div>

          <div class="confirm">
            <el-button type="primary" size="medium"
              >Confirm<i class="el-icon-arrow-right el-icon-right"></i
            ></el-button>
          </div>
        </div>
      </div>

      <div class="actionview" v-if="step == 3">
        <el-button
          type="text"
          icon="el-icon-arrow-left"
          v-on:click="backaction3"
          >back</el-button
        >
        <div>Auth from giuthub</div>
      </div>

      <div class="actionview" v-if="step == 4">
        <el-button
          type="text"
          icon="el-icon-arrow-left"
          v-on:click="backaction4"
          >back</el-button
        >
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
      canisterid: "ryjl3-tyaaa-aaaaa-aaaba-cai",
      githubapp: "chain-cloud",
      customColor: "#409eff",
      percentage: 25,
      step: 1,
      repopoll: null,
      accessToken: "",

      inputSearchRepo: "",

      checked: true,

      queryAccessTokenUrl: "http://54.244.200.160:9091/public/token/",
      installGitHubAppUrl:
        "https://github.com/apps/chain-cloud/installations/new",
      installationAppUrl: "https://api.github.com/user/installations",
      installationRepoUrl: "https://api.github.com/installation/repositories",
    };
  },
  components: {
    headerview,
    footerview,
  },
  mounted() {
    //installation_id
    //setup_action
    let local_token = window.localStorage.getItem("access_token");
    console.log(local_token);
    if (local_token != null) {
      this.step = 2;
      this.percentage = 50;
    } else {
      this.step = 1;
      this.percentage = 25;
    }
  },
  methods: {
    connetgithubaction: function (event) {
      if (event) {
        // start install github app: chain-cloud
        window.open(
          this.installGitHubAppUrl + "?state=" + this.canisterid,
          "width:800px; height:500px",
          "blank"
        );

        //start poll task
        this.repopoll = window.setInterval(this.pollAccessToken, 500);
      }
    },
    pollAccessToken: function () {
      let local_access_token = window.localStorage.getItem("access_token");
      if (local_access_token == null) {
        this.axios
          .get(queryAccessTokenUrl, {
            state: this.canisterid,
          })
          .then(function (response) {
            console.log(response);

            this.step = 2;
            this.percentage = 50;
            
            // get access token from response
            window.localStorage.setItem("access_token", response.access_token);

            clearInterval(this.repopoll);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("already got access token from authorization");
      }
    },
    getrepoinfo: function () {
      this.axios
        .get("https://github.com/login/oauth/access_token", {
          client_id: "Iv1.018aba55453994ac",
          client_secret: "e6a5b65152a4dca9754fa2e13df80f3c087019e7",
          code: tmp_code,
          redirect_uri:
            "http://localhost:8000/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai",
          state: "xxx",
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getinstallationinfo: function () {
      this.axios
        .get("https://github.com/login/oauth/access_token", {
          client_id: "Iv1.018aba55453994ac",
          client_secret: "e6a5b65152a4dca9754fa2e13df80f3c087019e7",
          code: tmp_code,
          redirect_uri:
            "http://localhost:8000/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai",
          state: "xxx",
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
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
  width: 1440px;
  margin: 35px auto;
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

<style scoped>
.git-outer {
  width: 1440px;
  margin: 10px auto;
}

.git-title {
  width: 1440px;
  height: 112px;
  background: linear-gradient(153deg, #3e4554 0%, #252b3a 100%);
  border-radius: 8px 8px 0px 0px;
}

.git-title .title-row {
  height: 100%;
}

.git-title .title-col {
  height: 100%;
}

.title-col div {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.git-title img {
  margin: 0px;
  width: 64px;
  height: 64px;
  padding-left: 24px;
  display: inline;
  vertical-align: middle;
}

.git-title span {
  padding-left: 10px;
  color: white;
}

.git-repo {
  width: 1440px;
}

.git-repo .each-repo {
  width: 100%;
  line-height: 250%;
  height: 60px;
  padding-left: 62px;
  border: 1px solid #f4f4f4;
}

.git-repo img {
  width: 21px;
  height: 21px;
  display: inline;
  vertical-align: middle;
}

.git-repo span {
  padding-left: 10px;
  height: 22px;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #252b3a;
  line-height: 22px;
}

.git-more {
  width: 1440px;
  height: 68px;
  line-height: 250%;
  background: #f8f8f8;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid #d9d9d9;
}

.git-more span {
  height: 20px;
  font-size: 14px;
  padding-left: 30px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #252b3a;
  line-height: 20px;
}

.git-more a {
  height: 20px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #1776ff;
  line-height: 20px;
}

.confirm {
  float: right;
  margin-top: 20px;
  margin-right: 10px;
}
</style>
