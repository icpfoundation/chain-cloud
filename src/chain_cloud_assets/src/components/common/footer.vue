<template>
  <div class="outview">
    <div class="footlogo">
      <img src="../../../assets/img/nav_logo@2x.png" alt="" />
    </div>
    <div class="aboutview">
      <div class="about">© 2022 chaincloud.com</div>
      <div class="row">
        <img class="iconsize" src="../../../assets/img/wechat@2x.png" alt="" />
        <img class="iconsize" src="../../../assets/img/twitter@2x.png" alt="" />
        <img
          class="iconsize"
          src="../../../assets/img/facebook@2x.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerview",
  data() {
    return {};
  },
};
</script>

<style scoped>
.about {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
}

.outview {
  width: 1200px;
  margin: 0 auto;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footlogo {
  width: 185px;
  height: 24px;
}

.footlogo img {
  width: 100%;
  height: 100%;
}

.iconsize {
  width: 24px;
  height: 24px;
  margin-left: 20px;
}

.row {
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}
</style>