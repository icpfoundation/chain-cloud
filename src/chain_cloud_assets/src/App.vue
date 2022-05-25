
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
.mainApp{
  position: relative;
}
.ivu-page-item {
  border: 0.01rem solid #E6E6E6 !important;
}
.headview {
  width: 100%;
  position: absolute;
  top:0;
  left: 0;
  z-index:9
}
.martop{
  margin-top: 100px;
}
@import "../assets/css/main.css";
@import "../assets/css/color-dark.css";
</style>
<template>
  <div id="mainApp">
    <div class="headview">
      <headerview></headerview>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import headerview from "./components/common/header.vue";
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
components: {
    headerview,
  },
  mounted() {
    let url = window.location.href;
    console.log(url)
    if (!url) {
      this.show = false
    }
  },    
  methods:{

  }
}
</script>
