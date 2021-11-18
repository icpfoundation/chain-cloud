<template>
  <div style="width: 100%">
    <el-row>
      <el-col :span="3">
        <div class="logoview">
          <img src="../../../assets/img/logo_icon@2x.png" alt="" />
        </div>
      </el-col>

      <el-col :span="17">
        <div style="width: 100%">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">Products</el-menu-item>
            <el-menu-item index="2">Documentation</el-menu-item>
            <el-menu-item index="3">Blog</el-menu-item>
            <el-menu-item index="4">Service</el-menu-item>
          </el-menu>
        </div>
      </el-col>

      <el-col :span="2">
        <el-select class="selectlang" v-model="value" placeholder="English">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-col>

      <el-col
        :span="2"
        class="loginviewCol hide"
        @mouseenter.native="enter"
        @mouseleave.native="leave"
      >
        <div class="loginview" @click.self="doSomething">
          <span> {{ principleShort }} </span>
          <img
            class="dfxlogo"
            src="../../../assets/img/logo_difinity@2x.png"
            alt="dfinity logo"
          />
        </div>
        <p @click.stop="doSomething">MORE</p>
        <p @click.stop="logoutAction">SIGNOUT</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";
import { DelegationIdentity } from "@dfinity/identity";
import { Principal } from "@dfinity/principal";
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
      principleShort: "LOGIN",
      maxTimeToLive: 120,
      authClient: null,
      activeIndex: "1",
    };
  },
  computed: {
    ...mapGetters(["getPrinciple"]),
  },
  components: {},
  methods: {
    ...mapActions(["setICIdentityConfig", "removeICIdentity"]),
    handleSelect: () => {},
    enter() {
      // let principal = this.getPrinciple();
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
        // let principle = this.getPrinciple();
        let principle = window.localStorage.getItem("principleString");
        if (principle == "" || principle == undefined || principle == null) {
          let that = this;
          this.authClient.login({
            identityProvider: this.IDENTITY_URL,
            onSuccess: () => {
              let identity = this.authClient.getIdentity();
              let principle = identity.getPrincipal();
              that.principle = principle;
              that.principleShort = principle.toString().substring(0, 8) + "...";
              that.setICIdentityConfig(principle);
              window.localStorage.setItem("principleString", principle.toString());
              console.log("Logged in with II principle: " + principle.toString());
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
    logoutAction: async function () {
      this.authClient.logout();
      this.removeICIdentity();
      this.principal = "LOGIN";
      this.principleShort = "LOGIN";
      this.leave();
    },
  },

  mounted() {
    // let principle = this.getPrinciple();
    let principle = window.localStorage.getItem("principleString");
    console.log("principle " + principle);

    if (principle) {
      this.principal = principle.toString();
      this.principleShort = principle.toString().substring(0, 8) + "...";
    }

    const init = async () => {
      this.authClient = await AuthClient.create();
    };

    init();
  },
  destroyed() {},
};
</script>

<style scoped>
.logoview {
  width: 100%;
  min-width: 168px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
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
  margin-top: 1%;
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
}
</style>
