<style scoped>
.toworkApp {
  margin: 0 auto;
  padding: 0 30px;
  margin-top: 190px;
  width: 1200px;
}
.title {
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  text-align: center;
}
.tabarbox {
  width: 100%;
  margin-top: 30px;
  display: flex;
}
.tabarItem {
  width: 280px;
  height: 128px;
  background: #ffffff;
  border-radius: 12px;
  font-size: 20px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #252b3a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.tabarItemImg {
  width: 170px;
  height: 50px;
  margin-top: 10px;
}
.tabarItem img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}
.code {
  margin-top: 40px;
  width: 100%;
  height: 640px;
}
.code img {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div class="toworkApp">
    <div class="title">HOW DO WE WORK？</div>
    <div class="tabarbox">
      <div class="tabarItem">
        <img src="../../../assets/img/home/icon_easycoding@2x.png" alt="">
        <span>Easy coding</span>
      </div>
      <img src="../../../assets/img/home/zhishitiao.png" alt="" class="tabarItemImg">
      <div class="tabarItem">
        <img src="../../../assets/img/home/icon_fastcompile@2x.png" alt="">
        <span>Fast compile and deploy</span>
      </div>
      <img src="../../../assets/img/home/zhishitiao.png" alt="" class="tabarItemImg">
      <div class="tabarItem">
        <img src="../../../assets/img/home/icon_easymanage@2x.png" alt="">
        <span>Easy management</span>
      </div>
    </div>
    <div class="code">
      <img src="../../../assets/img/home/video@2x.png" alt="">
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {

    };
  },

};
</script>
