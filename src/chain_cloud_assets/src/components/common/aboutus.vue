<style scoped>
.aboutusApp {
  width: 100%;
  background: #f8fbff;
  height: 569px;
  display: flex;
  justify-content: center;
}
.content {
  width: 1200px;
  display: flex;
  margin-top: 118px;
}
.contentRight {
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #252b3a;
}
.contentRightHead {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #1776ff;
}
.contentRightHead img {
  margin-right: 10px;
  width: 24px;
  height: 24px;
}
.contentRightContent {
  margin-top: 28px;
  width: 387px;
  font-family: PingFangSC-Semibold, PingFang SC;
}
.wordSp {
  font-size: 32px;
  font-weight: 400;
  color: #1776ff;
}
.contentRightInfo {
  margin-top: 40px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #818181;
}
.aboutusImg {
  width: 436px;
  height: 330px;
  margin-top: 22px;
  margin-right: 44px;
}
.foot {
  width: 100%;
  position: relative;
  height: 168px;
}
.footImg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.footContent {
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 100%;
}
.footLeft {
  display: flex;
  align-items: center;
  font-size: 32px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
}
.footLeft img {
  width: 44px;
  height: 44px;
  margin-left: 30px;
}
.footRgiht {
  display: flex;
  align-items: center;
  width: 161px;
  height: 54px;
  background: #ffffff;
  border-radius: 8px;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #1776ff;
  justify-content: center;
}
.footRgiht img {
  width: 16px;
  height: 16px;
  margin-left: 15px;
}
</style>
<template>
  <div class="aboutusApp">
    <div class="content">
      <img
        src="../../../assets/img/home/aboutus.png"
        alt=""
        class="aboutusImg"
      />
      <div class="contentRight">
        <div class="contentRightHead">
          <img src="../../../assets/img/home/icon_tab_blue_r@2x.png" alt="" />
          <span>About us</span>
        </div>
        <div class="contentRightContent">
          <span>Delivering the industry’s</span>
          <span class="wordSp">Trustless Cloud</span>
          <span> of Web3</span>
        </div>
        <div class="contentRightInfo">
          Our goal is to create a research environment rich in opportunities for
          product impact, to build a product environment that actively benefits
          for research.
        </div>
        <div class="contentRightInfo">
          Start working with Chain-Cloud that bring cloud computation into the
          data lifecycle by providing end-to-end cryptographically verifiable
          tracking and provenance for all artifacts, actions, and dependencies,
          at scale.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
