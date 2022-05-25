<template>
  <div>
    <div class="bgImg">
      <img src="../../../assets/img/home/bg.png" alt="" class="bg">
      <headerview></headerview>
      <bannerview></bannerview>
    </div>
    <towork></towork>
    <usecloud></usecloud>
    <aboutus></aboutus>
    <footerview></footerview>
  </div>
</template>

<script>
import headerview from "./header.vue";
import bannerview from "./banner.vue";
import footerview from "./footer.vue";
import featureview from "./feature.vue";
import towork from "./towork.vue";
import usecloud from "./usecloud.vue";
import aboutus from "./aboutus.vue";
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
    towork,
    usecloud,
    aboutus,
    footerview,
    featureview,
  },
  methods: {},
  mounted() {
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
  destroyed() { },
};
</script>

<style>
.bgImg {
  width: 100%;
  height: 937px;
  position: relative;
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

#footerview {
  background-color: white;
  height: 60px;
  width: 100%;
}
</style>
