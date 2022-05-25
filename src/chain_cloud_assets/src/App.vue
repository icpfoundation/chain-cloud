<template>
  <div id="app">
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
  methods:{
toHome(){
this.$router.push({
  path:"/"
})
    },
    toUserFun(){
      this.$router.push({
        name:"user_index"
      })
    },
     enter() {
      let principle = window.localStorage.getItem("principleString");
      if (principle) {
        let loginview = document.getElementsByClassName("loginviewCol");
        loginview[0].setAttribute("class", "loginviewCol exhibit");
      }
    },

    leave() {
      let loginview = document.getElementsByClassName("loginviewCol");
      loginview[0].setAttribute("class", "loginviewCol hide");
    },

    doSomething: async function (event) {
      if (event) {
        let principle = window.localStorage.getItem("principleString");
        if (principle == "" || principle == undefined || principle == null) {
          let that = this;
          this.authClient.login({
            identityProvider: this.IDENTITY_URL,
            onSuccess: async () => {
              let identity = this.authClient.getIdentity();
              localStorage.setItem("identity", identity);
              let principle = identity.getPrincipal();
              that.principle = principle;
              that.principleShort =
                principle.toString().substring(0, 8) + "...";
              that.setICIdentityConfig(principle, identity);
              window.localStorage.setItem(
                "principleString",
                principle.toString()
              );
              console.log(
                "Logged in with II principle: " + principle.toString()
              );
            },
            onError: (str) => {
              console.log("Error while logging with II: " + str);
            },
          });
        } else {
          console.log(this.$router.path);
          if (this.$router.path != "/sidebar") {
            this.$router.push("/sidebar");
          }
        }
      }
    },
  }
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
@import "../assets/css/main.css";
@import "../assets/css/color-dark.css";
</style>