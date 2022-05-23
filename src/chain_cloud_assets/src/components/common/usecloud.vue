<style scoped>
.usecloudApp {
  margin: 0 auto;
  padding-top: 90px;
  width: 1200px;
  height:200px;
}
.title {
  font-size: 32px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  text-align: center;
}
.tabarbox {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tabarbox1 {
  width: 100%;
  margin-top: 40px;
  display: flex;
  align-items: center;
}
.tabarItem {
  height: 72px;
}
.tabarItem img {
  width: 100%;
  height: 100%;
}
.dot {
  font-size: 40px;
  /* color: red; */
}
</style>
<template>
  <div class="usecloudApp">
    <div class="title">WHO IS USING CHAIN-CLOUD？</div>
    <div class="tabarbox">
      <div class="tabarItem" style="width:270px">
        <img src="../../../assets/img/logo/logo5.png" alt="">
      </div>
      <div class="tabarItem" style="width:240px">
        <img src="../../../assets/img/logo/logo1.jpg" alt="">
      </div>
      <div class="tabarItem" style="width:215px">
        <img src="../../../assets/img/logo/logo2.png" alt="">
      </div>
      <div class="tabarItem" style="width:194px">
        <img src="../../../assets/img/logo/logo3.png" alt="">
      </div>
      <div class="tabarItem" style="width:240px">
        <img src="../../../assets/img/logo/logo4.png" alt="">
      </div>
      <div class="dot">...</div>
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
