<template>
  <div id="app">
    <div class="layoutHead" v-show="show">
      <div class="layoutLogo" @click="toHome">
        <img src="./assets/chain_cloud/head/nav_logo@2x.png" alt="" class="layoutLogoImg">
      </div>
      <div class="layoutTab">
        <div class="layoutTabItem" v-for="(item, index) in tabList" :key="index">{{ item.name }}</div>
      </div>
      <div class="layoutUser" @click="toUserFun">Alfred Cobb</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>

export default {
  data() {
    return {
      show: true,
       tabList: [
        {
          name: "IDE",
          href: "",
        },
        {
          name: "TEAM",
          href: "",
        },
        {
          name: "DAPP - SCAN",
          href: "",
        },
        {
          name: "ABOUT US",
          href: "",
        },
      ],
    }
  },
   methods: {
    toHome() {
      this.$router.push({
        path: "/"
      })
    },
    toUserFun() {
      this.$router.push({
        name: "user_index"
      })
    },
  },
  mounted() {
    let url = window.location.href;
    if (!url) {
      this.show = false
    }
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  font-size: 0.16rem;
}
.ivu-page-item {
  border: 0.01rem solid #E6E6E6 !important;
}

.layoutApp {
  width: 100%;
  background: #F8F8F8;
}

.layoutHead {
  width: 100%;
  height: 0.74rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.layoutTab {
  width: 12rem;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333333;
}

.layoutUser {
  font-size: 12px;
  color: #252B3A;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}

.layoutLogo {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  cursor: pointer;
}

.layoutLogoImg {
  width: 169px;
  height: 22px;
}
.layoutTabItem {
    padding: 0 0.15rem;
    display: flex;
    align-items: center;
    cursor: pointer;
}
@import "../assets/css/main.css";
@import "../assets/css/color-dark.css";
</style>