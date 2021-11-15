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

      <el-col :span="2">
        <div class="loginview" v-on:click="doSomething">
          <span> {{ principal }} </span>
          <img
            class="dfxlogo"
            src="../../../assets/img/logo_difinity@2x.png"
            alt="dfinity logo"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";
import { DelegationIdentity } from "@dfinity/identity";
import { Principal } from "@dfinity/principal";

export default {
  name: "headerview",
  data() {
    return {
      activeIndex: "1",
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
      principal: "LOGIN",
      maxTimeToLive: 120,
      authClient: null,
    };
  },
  components: {},
  methods: {
    handleSelect: () => {},
    doSomething: async function (event) {
      if (event) {
        let principal = localStorage.getItem("principal");
        if (principal == "" || principal == undefined || principal == null) {
          let that = this;
          this.authClient.login({
            identityProvider: this.IDENTITY_URL,
            onSuccess: () => {
              let identity = this.authClient.getIdentity();
              let principle = identity.getPrincipal();
              that.principal = principle;

              //mddqv-su6qd-sf36a-oyjxd-rw46x-jbzp7-676e6-erlgh-atism-kr46c-zqe

              localStorage.setItem("principal", that.principal);

              console.log(identity);
              console.log("Logged in with II principle:  " + principle);
              console.log("Logged in with II principle: " + that.principle);
            },
            onError: (str) => {
              console.log("Error while logging with II: " + str);
            },
          });
        } else {
          console.log(this.$router.path);
          if (this.$router.path != "/xxx") {
            this.$router.push("/xxx");
          }
        }
      }
    },
  },
  mounted() {
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
  background: linear-gradient(270deg, #0059ff 0%, #1776ff 100%);
  box-shadow: 0px 10px 26px 0px rgba(0, 35, 84, 0.5);
  border-radius: 4px;

  padding-left: 10px;
  margin-top: 12%;
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.loginview span {
  color: #ffffff;
  line-height: 17px;
}

.dfxlogo {
  width: 26px;
  height: 13px;
}
</style>
