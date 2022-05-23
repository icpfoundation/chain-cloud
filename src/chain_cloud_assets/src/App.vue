<template>
  <div id="app">
    <div class="layoutHead" v-show="show">
      <div class="layoutLogo" @click="toHome">
        <img src="../assets/chain_cloud/head/nav_logo@2x.png" alt="" class="layoutLogoImg">
      </div>
      <div class="layoutTab">
        <div class="layoutTabItem" v-for="(item, index) in tabList" :key="index">{{ item.name }}</div>
      </div>
      <div class="layoutUser"> 
      <div class="loginviewCol hide" @mouseenter.native="enter" @mouseleave.native="leave">
        <div class="loginview" @click.self="doSomething">
         <span @click.self="doSomething"> {{ principleShort }} </span>
         <img class="dfxlogo" src="../assets/img/logo_difinity@2x.png" alt="dfinity logo" @click.self="doSomething" />
        </div>
      </div>
      <span  @click="toUserFun">Alfred Cobb</span>
      </div>
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
  align-items: center;
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
.loginview {
  width: 122px;
  height: 30px;
  box-shadow: 0px 10px 26px 0px rgba(0, 35, 84, 0.5);
  border-radius: 4px;
  padding-left: 10px;
  margin-top: 1%;
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  transition: height 0.5s;
}

.loginview span {
  color: #ffffff;
    line-height: 17px;
}
.dfxlogo {
  width: 26px;
  height: 13px;
  margin-left: 10px;
}
.loginviewCol {
  width: 122px;
  margin-right: 0.2rem;
  transition: height 1s;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  background: linear-gradient(270deg, #0059ff 0%, #1776ff 100%);
}
.loginviewCol p {
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  height: 0px;
  color: white;
  transition: height 0.5s;
  text-align: center;
  font-size: 13px;
  background: linear-gradient(270deg, #0059ff 0%, #1776ff 100%);
  line-height: 30px;
}

.hide p {
  height: 0px;
}
.exhibit p {
  height: 30px;
}
.exhibit p:hover {
  background: rgb(8, 101, 189);
}

@import "../assets/css/main.css";
@import "../assets/css/color-dark.css";
</style>