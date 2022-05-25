<style scoped>
.headerApp {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  height: 74px;
  display: flex;
  align-items: center;
}
.tabar {
  margin-left: 272px;
}
.logoview {
  width: 169px;
  height: 22px;
}
.menuBox {
  display: flex;
  align-items: center;
  background: none;
}
.chooselang {
  font-size: 14px;
}

.arrowdown {
  width: 90px;
  height: 30px;
  border-radius: 1px;
}

.selectlang {
  width: 70%;
  margin-top: 12%;
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
.loginviewCol {
  width: 122px;
  position: absolute;
  right: 0;
  width: auto;
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
.dfxlogo {
  width: 26px;
  height: 13px;
  margin-left: 10px;
}
</style>

<template>
  <div class="headerApp">
    <div class="logoview">
      <img src="../../../assets/img/nav_logo@2x.png" @click="gohome" alt="" />
    </div>
    <div class="tabar">
      <el-menu :default-active="activeIndex" @select="handleSelect" class="menuBox">
        <el-menu-item index="1">IDE</el-menu-item>
        <el-menu-item index="2">TEAM-SCSAN</el-menu-item>
        <el-menu-item index="3">ABOUT US</el-menu-item>
      </el-menu>
    </div>
    <div class="loginviewCol hide" @mouseenter.native="enter" @mouseleave.native="leave">
      <div class="loginview" @click.self="doSomething">
        <span @click.self="doSomething"> {{ principleShort }} </span>
        <img class="dfxlogo" src="../../../assets/img/logo_difinity@2x.png" alt="dfinity logo" @click.self="doSomething" />
      </div>
      <p @click.stop="doSomething">MORE</p>
      <p @click.stop="logoutAction">SIGNOUT</p>
    </div>

  </div>
</template>

<script>
import { AuthClient } from "@dfinity/auth-client";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "headerview",
  data() {
    return {
      options: [
        {
          value: "English",
          label: "English",
        },
        {
          value: "简体中文",
          label: "simplify",
        },
      ],
      value: "",
      IDENTITY_URL: "https://identity.ic0.app",
      principle: "",
      principleShort: "Login",
      maxTimeToLive: 120,
      authClient: null,
      activeIndex: null,
    };
  },
  computed: {
    ...mapGetters(["getPrinciple"]),
  },
  components: {},
  methods: {
    ...mapActions(["setICIdentityConfig", "removeICIdentity"]),

    handleSelect(key, keyPath) {
      this.activeIndex = key;

      switch (this.activeIndex) {
        case "1":
          if (this.$router.currentRoute.path != "/home") {
            this.$router.push("/home");
          }
          break

        case "2":
          if (this.$router.currentRoute.path != "/doc") {
            this.$router.push({
                name: "teamscan_index"
            })
            // this.$router.name("/teamscan_index");
          }
          break

        case "3":
          if (this.$router.currentRoute.path != "/blog") {
            this.$router.push("/blog");
          }
          break

        case "4":
          if (this.$router.currentRoute.path != "/service") {
            this.$router.push("/service");
          }
          break

        default:
          break;
      }
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

    gohome() {
      if (this.$router.currentRoute.path != "/home") {
        this.$router.push("/home");
      }
    },

    logoutAction: async function () {
      this.authClient.logout();
      this.removeICIdentity();
      this.principal = "LOGIN";
      this.principleShort = "LogIn with";
      this.leave();
    },
  },

  mounted() {
    switch (this.$router.currentRoute.path) {
      case "/home":
        this.activeIndex = "1"
        break;
      case "/doc":
        this.activeIndex = "2"
        break;
      case "/blog":
        this.activeIndex = "3"
        break;
      case "/service":
        this.activeIndex = "4"
        break;

      default:
        break;
    }

    let principle = window.localStorage.getItem("principleString");
    if (principle) {
      this.principal = principle.toString();
      this.principleShort = principle.toString().substring(0, 8) + "...";
    }

    const init = async () => {
      this.authClient = await AuthClient.create();
    };

    init();
  },
};
</script>



