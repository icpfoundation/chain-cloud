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

      <!-- step - 1 -->

      <div class="actionview" v-if="step == 1">
        <div class="actiontitle">Continuous Deployment</div>
        <div class="actionsubtitle">
          Choose the repository you want to link to your site on IC host.
        </div>
        <el-button class="connect-github" v-on:click="connetgithubaction"
          >Connect with GitHub</el-button
        >
      </div>

      <!-- step - 2 -->

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
                  <img
                    class="avatar-image"
                    :src="step2.useravatar"
                    alt="avatar"
                  />
                  <span>{{ step2.username }}</span>
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
            <el-row
              class="each-repo"
              v-for="(item, index) in step2.repos"
              :key="index"
              @click.native="selectRepoAction(index)"
            >
              <el-col :span="22">
                <img src="../../../assets/img/github-fill.png" alt="" />
                <span>{{ item.name }}</span>
              </el-col>

              <el-col :span="2">
                <i class="el-icon-arrow-right"></i>
              </el-col>
            </el-row>
          </div>

          <div class="git-more">
            <span>Can’t find your GitHub repo？</span>
            <a href="">Choose more</a>
          </div>
        </div>
      </div>

      <!-- step - 3 -->

      <div class="actionview" v-if="step == 3">
        <el-button
          type="text"
          icon="el-icon-arrow-left"
          v-on:click="backaction3"
          >back</el-button
        >
        <div class="actiontitle">
          Deploy setting for
          {{ step3.selectedRepo.owner.login + "/" + step3.selectedRepo.name }}
        </div>
        <div class="actionsubtitle">
          Get more control over how chain-cloud builds and deploys your site
          with these settings.
        </div>

        <div class="select-repo select-gap">
          <el-input
            :placeholder="step3.selectedRepo.name"
            v-model="step3.selectedRepo.name"
            size="medium"
          >
          </el-input>
        </div>

        <div class="select-branch select-gap">
          <el-select v-model="step3.selectbranch" placeholder="Select">
            <el-option
              v-for="(item, index) in step3.branchoptions"
              :key="index"
              :label="item.name"
              :value="item.name"
              size="large"
            >
            </el-option>
          </el-select>
        </div>

        <div class="actiontitle">Basic build settings</div>
        <div class="actionsubtitle">
          If you're using a static site generator or build tool, we'll need
          these settings to build your site.
        </div>

        <div class="select-framework select-gap">
          <el-select v-model="step3.selectframework" placeholder="Select">
            <el-option
              v-for="(item, index) in step3.framworkoption"
              :key="index"
              :label="item.value"
              :value="item.value"
              size="large"
            >
            </el-option>
          </el-select>

          <el-tooltip placement="right">
            <div slot="content">
              The frontend static website framework yor based
            </div>
            <img src="../../../assets/img/info.png" alt="" />
          </el-tooltip>
        </div>

        <!-- <div class="select-docker select-gap">
          <el-input
            placeholder="Docker Image"
            v-model="step3.dockerimage"
            size="medium"
          >
          </el-input>
          <el-tooltip placement="right">
            <div slot="content">
              The docker image and tag from the docker hub to use as a base when
              build your site
            </div>
            <img src="../../../assets/img/info.png" alt="" />
          </el-tooltip>
        </div> -->

        <div class="select-builder select-gap">
          <el-input
            placeholder="Build Command"
            v-model="step3.buildtool"
            size="medium"
          >
          </el-input>
          <el-tooltip placement="right">
            <div slot="content">
              The build command used to build your website
            </div>
            <img src="../../../assets/img/info.png" alt="" />
          </el-tooltip>
        </div>

        <div class="select-file-location select-gap">
          <el-input
            placeholder="Static File Location"
            v-model="step3.filelocation"
            size="medium"
          >
          </el-input>
          <el-tooltip placement="right">
            <div slot="content">The directory to hold website static files</div>
            <img src="../../../assets/img/info.png" alt="" />
          </el-tooltip>
        </div>

        <div class="actiontitle">Environment Variables</div>
        <div class="actionsubtitle">
          Define environment variables for more control and flexibility over
          your build.
        </div>

        <div class="select-env-val select-gap">
          <el-button @click="newVariablesAction">New variables</el-button>
        </div>

        <el-button class="deploy-btn deploy-view" @click="deployAction"
          >Deploy site</el-button
        >

        <!-- 1. Send a request to backend with params and tigger backend process to download source code from specified repo;
        2. According to the params, backend process choose certain docker jobs to build the source code to static files;
        3. Backend run `dfx init` to init an default canister project if the source code do not contain the `dfx.json` file;
        4. Backend replace the build output file with the original static website file;
        5. Backend tigger deploy process using `dfx deploy`;
        ps: Sometime there will need to generate a new canister and topup some cycle into it. -->
      </div>

      <!-- step - 4 -->

      <div class="actionview" v-if="step == 4">
        <el-button
          type="text"
          icon="el-icon-arrow-left"
          v-on:click="backaction4"
          >back</el-button
        >
        <div class="actiontitle">View deploy process</div>
        <div class="actionsubtitle">Here you can view the deploy log</div>

        <div class="deploy-log">
          {{ step4.deployLog }}
        </div>
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
      client_id: "Iv1.018aba55453994ac",
      client_secret: "e6a5b65152a4dca9754fa2e13df80f3c087019e7",
      canisterid: "bdcb4-2iaaa-aaaaj-aadjq-cai",
      authstate: "",
      githubapp: "chain-cloud",
      customColor: "#409eff",

      percentage: 25,
      step: 1,
      repopoll: null,
      access_token: "",
      installation_id: "",
      inputSearchRepo: "",

      queryAccessTokenUrl: "https://chaincloud.skyipfs.com:9091/public/token",
      installGitHubAppUrl:
        "https://github.com/apps/chain-cloud/installations/new",
      installationAppUrl: "https://api.github.com/user/installations",
      installationRepoUrl: "https://api.github.com/user/installations/",
      githubUserInfo: "https://api.github.com/user",
      githubBranchInfo: "https://api.github.com/repos",

      step2: {
        username: "",
        useravatar: "",
        repos: [],
      },

      step3: {
        selectedRepo: null,

        selectbranch: "",
        branchoptions: [],

        selectframework: "dfx",
        framworkoption: [],
        dockerimage: "",
        buildtool: "",
        filelocation: "",
      },

      step4: {
        logOutUrl: "https://chaincloud.skyipfs.com:9091/public/logs",
        tiggerBuildUrl: "https://chaincloud.skyipfs.com:9091/public/build",
        deployLog: "",
        logPoll: null,
        startline: 1,
        readline: 5,
        logfile: "",
        everread: false,
      },
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
    let local_code = window.localStorage.getItem("installation_id");
    if (local_token != null) {
      this.access_token = local_token;
      this.installation_id = local_code;

      this.getUserInfo(this.access_token);
      this.installappinfo(this.access_token);
      this.getRepoInfo(this.access_token, this.installation_id);

      this.step = 2;
      this.percentage = 50;
    } else {
      this.step = 1;
      this.percentage = 25;
    }

    this.setupFrontendFramework();
  },
  methods: {
    connetgithubaction: function (event) {
      if (event) {
        // start install github app: chain-cloud
        this.authstate = this.canisterid.concat("-").concat(Date.now());
        window.open(
          this.installGitHubAppUrl + "?state=" + this.authstate,
          "width:800px; height:500px",
          "blank"
        );

        //start poll task
        this.repopoll = window.setInterval(this.pollAccessToken, 2000);
      }
    },
    pollAccessToken: function () {
      let that = this;
      let local_access_token = window.localStorage.getItem("access_token");
      if (local_access_token == null) {
        this.axios
          .get(this.queryAccessTokenUrl, {
            params: {
              state: this.authstate,
            },
          })
          .then(function (response) {
            let access_token = response.data.token.split("&")[0].split("=")[1];
            let installation_id = response.data.code;

            window.localStorage.setItem("access_token", access_token);
            that.access_token = access_token;

            window.localStorage.setItem("installation_id", installation_id);
            that.installation_id = installation_id;

            that.step = 2;
            that.percentage = 50;
            clearInterval(that.repopoll);

            that.getUserInfo(access_token);

            that.installappinfo(access_token);

            that.getRepoInfo(access_token, installation_id);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("already got access token from authorization");
      }
    },
    getUserInfo: function (access_token) {
      let that = this;
      this.axios
        .get(this.githubUserInfo, {
          headers: {
            Authorization: "Bearer ".concat(access_token),
          },
        })
        .then(function (response) {
          console.log(response);
          that.step2.username = response.data.name;
          that.step2.useravatar = response.data.avatar_url;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    installappinfo: function (access_token) {
      this.axios
        .get(this.installationAppUrl, {
          params: {
            per_page: 100,
          },
          headers: {
            Authorization: "Bearer ".concat(access_token),
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getRepoInfo: function (access_token, installation_id) {
      let that = this;
      this.axios
        .get(
          this.installationRepoUrl
            .concat(installation_id)
            .concat("/repositories"),
          {
            params: {
              per_page: 100,
            },
            headers: {
              Authorization: "Bearer ".concat(access_token),
            },
          }
        )
        .then(function (response) {
          console.log(response);

          that.step2.repos = response.data.repositories;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getBranchInfo: function (access_token, username, repo) {
      let that = this;
      this.axios
        .get(
          this.githubBranchInfo
            .concat("/")
            .concat(username)
            .concat("/")
            .concat(repo)
            .concat("/branches"),
          {
            headers: {
              Authorization: "Bearer ".concat(access_token),
            },
          }
        )
        .then(function (response) {
          console.log(response);

          that.step3.branchoptions = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    selectRepoAction: function (index) {
      this.step = 3;
      this.percentage = 75;
      this.step3.selectedRepo = this.step2.repos[index];

      console.log("select repo");
      console.log(this.step3.selectedRepo);

      this.getBranchInfo(
        this.access_token,
        this.step3.selectedRepo.owner.login,
        this.step3.selectedRepo.name
      );
    },
    setupFrontendFramework: function () {
      this.step3.framworkoption = [
        {
          name: "dfx",
          value: "DFX",
          logo: "https://storage.googleapis.com/terminal-assets/images/frameworks/nextjs.png",
        },
        {
          name: "nextjs",
          value: "NextJS",
          logo: "https://storage.googleapis.com/terminal-assets/images/frameworks/nextjs.png",
        },
        {
          name: "reactjs",
          value: "Creat React App",
          logo: "https://storage.googleapis.com/terminal-assets/images/frameworks/cra.png",
        },
        {
          name: "hugo",
          value: "Hugo",
          logo: "https://storage.googleapis.com/terminal-assets/images/frameworks/hugo.png",
        },
        {
          name: "nuxtjs",
          value: "NuxtJS",
          logo: "https://storage.googleapis.com/terminal-assets/images/frameworks/nuxtjs.png",
        },
        {
          name: "jekyll",
          value: "Jekyll",
          logo: "https://storage.googleapis.com/terminal-assets/images/frameworks/jekyll.png",
        },
        {
          name: "wordpress",
          value: "Wordpress",
          logo: "https://storage.googleapis.com/terminal-assets/images/frameworks/wp.png",
        },
      ];
    },
    newVariablesAction: function () {
      console.log("new variables action");
    },
    deployAction: function () {
      this.step = 4;
      this.percentage = 100;

      let that = this;
      this.axios
        .get(this.step4.tiggerBuildUrl, {
          params: {
            framework: this.step3.selectframework,
            reponame: this.step3.selectedRepo.name,
            repourl: this.step3.selectedRepo.clone_url,
            branch: this.step3.selectbranch,
          },
        })
        .then(function (response) {
          console.log(response);

          that.step4.logfile = response.data.connectionid;
          that.step4.logPoll = window.setInterval(that.seekLogsAction, 2000);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    seekLogsAction: function () {
      let that = this;
      this.axios
        .get(this.step4.logOutUrl, {
          params: {
            startline: this.step4.startline,
            endline: this.step4.startline + this.step4.readline,
            file: this.step4.logfile,
            reponame: this.step3.selectedRepo.name,
          },
        })
        .then(function (response) {
          console.log(response);

          that.step4.deployLog += response.data;
          that.step4.startline = that.step4.startline + that.step4.readline + 1;
          that.step4.everread = true

          if (response.data == "" && that.step4.everread == true) {
            clearInterval(that.step4.logPoll);
          }
        })
        .catch(function (error) {
          console.log(error);
          clearInterval(that.step4.logPoll);
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
  border: 1px solid #ffffff;
  border-radius: 32px;
  margin: 0px;
  width: 64px;
  height: 64px;
  margin-left: 24px;
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
  height: 100%;
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

<style scoped>
.select-gap {
  width: 225px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
}

.select-gap img {
  margin-left: 10px;
  margin-top: 6px;
  width: 22px;
  height: 22px;
}

/* .select-repo {
}

.select-branch {
}

.select-framework {
} */

.deploy-view {
  margin-top: 30px;
  width: 145px;
  height: 34px;
  font-size: 15px;
  background-color: #171717;
}

.deploy-btn {
  color: white;
  font-weight: bold;
}
</style>

<style scoped>
.deploy-log {
  background-color: black;
  color: white;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  white-space: pre-line;
  font-size: 18px;
  line-height: 1.25;
  min-height: 200px;
  overflow-wrap: break-word;
}
</style>
