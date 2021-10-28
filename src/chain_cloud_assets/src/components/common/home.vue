<template>
  <div>
    <el-container class="containView">
      <headerview></headerview>

      <el-main id="mainview" v-if="!isAuth">
        <bannerview></bannerview>
        <featureview></featureview>
      </el-main>

      <authedview v-else></authedview>

      <el-footer id="footerview">
        <footerview></footerview>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headerview from "./header.vue";
import bannerview from "./banner.vue";
import footerview from "./footer.vue";
import featureview from "./feature.vue";
import authedview from "../page/authorized.vue";

export default {
  name: "Home",
  data() {
    return {
      principal: "LOGIN",
      IDENTITY_URL: "https://identity.ic0.app",
      maxTimeToLive: 120,
      authClient: null,
      isAuth: false,
    };
  },
  components: {
    headerview,
    bannerview,
    footerview,
    featureview,
  },
  methods: {},
  mounted() {
    //installation_id
    //setup_action
    console.log(window.location.search.toString());
    console.log("path: %s", this.$router.path);
    console.log(this.$router.params);

    let urlParams = new URLSearchParams(window.location.search);
    let hascanister = urlParams.has("canisterId");
    let hasinstall_id = urlParams.has("installation_id");
    let hassetup_action = urlParams.has("setup_action");
    let has_code = urlParams.has("code");

    if (hascanister && hasinstall_id && hassetup_action && has_code) {
      // store this key and value
      window.localStorage.setItem("code", urlParams.get("code"));
      window.localStorage.setItem("canisterId", urlParams.get("canisterId"));
      window.localStorage.setItem(
        "installation_id",
        urlParams.get("installation_id")
      );
      window.localStorage.setItem(
        "setup_action",
        urlParams.get("setup_action")
      );

      this.isAuth = true;

      setTimeout(function () {
        window.close();
      }, 2000);
    } else {
      this.isAuth = false;
    }
  },
  destroyed() {},
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  line-height: 160px;
}

#mainview {
  padding: 0px;
  width: 100%;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.containView {
  max-width: 100%;
}

#footerview {
  background-color: white;
  height: 60px;
  width: 100%;
}
</style>
