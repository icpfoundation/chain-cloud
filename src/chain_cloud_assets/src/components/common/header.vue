<style scoped>
.headerApp {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  height: 74px;
  justify-content: space-between;
}
/* .tabar {
  margin-left: 272px;
} */
.logo {
  width: 142px;
  height: 22px;
}

.menuBox {
  display: flex;
  align-items: center;
  background: none;
}
.loginviewCol {
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: relative;
}
.loginview {
  width: 122px;
  height: 30px;
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
  position: relative;
  cursor: pointer;
  background: linear-gradient(270deg, #0059ff 0%, #1776ff 100%);
}

.loginview span {
  color: #ffffff;
  line-height: 17px;
}
.tab {
  position: absolute;
  left: 0;
  width: 122px;
  top: 30px;
}
.tabItem {
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  height: 30px;
  color: #0059ff;
  transition: height 0.5s;
  text-align: center;
  font-size: 13px;
  line-height: 30px;
  background: white;
}
.tabItem:hover {
  background: linear-gradient(270deg, #0059ff 0%, #1776ff 100%);
  color: white;
  cursor: pointer;
}

/* .hide p {
  height: 0px;
}
.exhibit p {
  height: 30px;
}
.exhibit p:hover {
  background: rgb(8, 101, 189);
} */
.dfxlogo {
  width: 26px;
  height: 13px;
  margin-left: 10px;
}
.name {
  margin-left: 20px;
  cursor: pointer;
}
</style>

<template>
  <div class="headerApp">
    <img
      src="../../../assets/img/nav_logo@2x.png"
      @click="gohome"
      alt=""
      class="logo"
    />
    <div class="tabar">
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        class="menuBox"
      >
        <el-menu-item index="1">IDE</el-menu-item>
        <el-menu-item index="2">TEAM-SCAN</el-menu-item>
        <el-menu-item index="3">ABOUT US</el-menu-item>
      </el-menu>
    </div>
    <div class="loginviewCol" @mouseleave="leave">
      <div class="loginview" @mouseenter="enter" @click.self="doSomething">
        <span @click.self="doSomething"> {{ principleShort }} </span>
        <img
          class="dfxlogo"
          src="../../../assets/img/logo_difinity@2x.png"
          alt="dfinity logo"
          @click.self="doSomething"
        />
      </div>
      <div class="tab" v-if="tabShow && principleShort != 'Login'">
        <div @click.stop="doSomething" class="tabItem">Your profile</div>
        <div @click.stop="logoutAction" class="tabItem">Sign out</div>
      </div>
      <!-- <span
        class="name"
        @click="toPersonFun"
        v-if="principleShort != 'Login'"
        >{{ principleShort }}</span
      > -->
    </div>
  </div>
</template>

<script>
import { AuthClient } from "@dfinity/auth-client";
import { mapActions, mapGetters } from "vuex";
import {
  initManageCanister,
  initPlug,
} from "@/chain_cloud_assets/assets/js/actor";
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
      tabShow: false,
    };
  },
  computed: {
    ...mapGetters(["getPrinciple", "getManageCanister"]),
  },
  components: {},
  methods: {
    ...mapActions([
      "setICIdentityConfig",
      "removeICIdentity",
      "manageCanisterConfig",
    ]),

    handleSelect(key, keyPath) {
      this.activeIndex = key;

      switch (this.activeIndex) {
        case "1":
          window.open("https://k4qes-raaaa-aaaan-qah5q-cai.raw.ic0.app/");
          break;

        case "2":
          if (this.$router.currentRoute.path != "/doc") {
            this.$router.push({
              name: "teamscan_index",
            });
            // this.$router.name("/teamscan_index");
          }
          break;

        case "3":
          // if (this.$router.currentRoute.path != "/blog") {
          //   this.$router.push("/blog");
          // }
          this.$router.push({
            name: "aboutus",
          });
          break;

        case "4":
          if (this.$router.currentRoute.path != "/service") {
            this.$router.push("/service");
          }
          break;

        default:
          break;
      }
    },

    enter() {
      this.tabShow = true;
      // let principle = window.localStorage.getItem("principleString");
      // if (principle) {
      //   let loginview = document.getElementsByClassName("loginviewCol");
      //   loginview[0].setAttribute("class", "loginviewCol exhibit");
      // }
    },

    leave() {
      this.tabShow = false;
      // let loginview = document.getElementsByClassName("loginviewCol");
      // loginview[0].setAttribute("class", "loginviewCol hide");
    },

    async plugLogin() {
      let manageCansiter = this.getManageCanister();
      if (!manageCansiter) {
        let manageCanister = await initPlug();
        this.manageCanisterConfig(manageCanister);

        this.principle = manageCanister.identity;
        this.principleShort =
          manageCanister.identity.toString().substring(0, 8) + "...";
      } else {
        if (this.$router.path != "/user") {
          this.$router.push("/user");
        }
      }
    },
    doSomething: async function (event) {
      this.tabShow = false;
      if (event) {
        let manageCansiter = this.getManageCanister();
        let principle = window.localStorage.getItem("principleString");
        if (!manageCansiter) {
          let that = this;
          this.authClient.login({
            identityProvider: this.IDENTITY_URL,
            onSuccess: async () => {
              let identity = this.authClient.getIdentity();
              let manageCanister = initManageCanister(identity);
              this.manageCanisterConfig(manageCanister);

              // window.manageCanister = manageCanister;
              // localStorage.setItem("identity", identity);
              let principle = identity.getPrincipal();
              that.principle = principle;
              that.principleShort =
                principle.toString().substring(0, 8) + "...";
              // that.setICIdentityConfig(principle, identity);
              // window.localStorage.setItem(
              //   "principleString",
              //   principle.toString()
              // );
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
          if (this.$router.path != "/user") {
            this.$router.push("/user");
          }
        }
      }
    },

    gohome() {
      if (this.$router.currentRoute.path != "/home") {
        this.$router.push("/home");
      }
    },
    toPersonFun() {
      this.$router.push({
        name: "user_index",
      });
    },
    logoutAction: async function () {
      this.tabShow = false;
      this.authClient.logout();
      this.removeICIdentity();
      this.principal = "Login";
      this.principleShort = "Login";
      this.leave();
      this.manageCanisterConfig(null);
    },
  },

  mounted() {
    switch (this.$router.currentRoute.path) {
      case "/home":
        this.activeIndex = "1";
        break;
      case "/doc":
        this.activeIndex = "2";
        break;
      case "/blog":
        this.activeIndex = "3";
        break;
      case "/service":
        this.activeIndex = "4";
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



