<style scoped>
.bannerApp {
  width: 100%;
  height: 863px;
  position: relative;
}
.bannerAppBg {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.banner {
  width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
}
.bannerLogo {
  height: 62px;
  width: 70px;
  margin-top: 100px;
}
.bannerContent {
  font-size: 62px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #252b3a;
  margin-top: 43px;
  height: 160px;
  width: 720px;
  line-height: 80px;
}
.bannerInfo {
  width: 720px;
  margin-top: 20px;
  font-size: 22px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #252b3a;
}
.startbtn {
  width: 161px;
  height: 54px;
  background: #1776ff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  padding: 0 30px;
  justify-content: space-between;
  margin-top: 40px;
  cursor: pointer;
}
.startbtn img {
  width: 16px;
  height: 16px;
}
.tabarBox {
  width: 100%;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tabarItem {
  width: 280px;
  height: 301px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e2e9f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #252b3a;
  font-size: 20px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  padding: 40px 20px;
}
.tabarItem:hover {
  box-shadow: 0px 15px 20px 0px rgba(139, 139, 139, 0.15);
  border: 1px solid #1776ff;
  color: #1776ff;
}
.tabarItemimg {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}
.tabarItemInfo {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #818181;
  margin-top: 10px;
}
</style>
<template>
  <div class="bannerApp">
    <div class="banner">
      <img src="../../../assets/img/home/bannerLog.png" alt="" class="bannerLogo">
      <div class="bannerContent">
        <div>Cloud platform development on Web3.0</div>
      </div>
      <div class="bannerInfo">Enjoy the new generation of Internet technology, Get the dividends of innovation</div>
      <div class="startbtn" @click="doStart">
        <span>Get Start</span>
        <img src="../../../assets/img/home/startbtn.png" alt="">
      </div>
      <div class="tabarBox">
        <div class="tabarItem">
          <img src="../../../assets/img/home/icon_immutable@2x.png" alt="" class="tabarItemimg">
          <span>Immutable</span>
          <span class="tabarItemInfo">Append-only, immutable journal tracks history of all changes</span>
        </div>
        <div class="tabarItem">
          <img src="../../../assets/img/home/icon_verifiable@2x.png" alt="" class="tabarItemimg">
          <span>Verifiable</span>
          <span class="tabarItemInfo">All changes are cryptographically chained and verifiable</span>
        </div>
        <div class="tabarItem">
          <img src="../../../assets/img/home/icon_opensource@2x.png" alt="" class="tabarItemimg">
          <span>Open Source</span>
          <span class="tabarItemInfo">Build the developer ecosystem and community, Community Attestation Service</span>
        </div>
        <div class="tabarItem">
          <img src="../../../assets/img/home/icon_easytouse@2x.png" alt="" class="tabarItemimg">
          <span>Easy to Use</span>
          <span class="tabarItemInfo">Familiar SQL operators, IPLD data model supports nested data structures</span>
        </div>
      </div>
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
    doStart() {
      let principle = window.localStorage.getItem("principleString");
      if (principle == undefined || principle == "" || principle == null) {
        this.$message({
          showClose: true,
          message: "Warning, should login first",
          type: "warning",
        });
        return;
      }

      if (this.$router.path != "/deploy") {
        this.$router.push("/deploy");
      }
    },
  },

};
</script>

