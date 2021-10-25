<template>
  <div>
    <el-container class="containView">
      <headerview></headerview>

      <el-main id="mainview">
        <bannerview></bannerview>
      </el-main>

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

export default {
  name: "Home",
  data() {
    return {
      principal: "LOGIN",
      IDENTITY_URL: "https://identity.ic0.app",
      maxTimeToLive: 120,
      authClient: null,
    };
  },
  components: {
    headerview,
    bannerview,
    footerview,
  },
  methods: {
  },
  mounted() {
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
  height: 124px;
  width: 100%;
}
</style>
