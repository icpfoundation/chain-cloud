<template>
  <div id="sidebar">
    <div class="sidebar_head"><Header></Header></div>
    <div class="sidebar_left">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="1"
            :default-openeds="openeds"
            class="el-menu-vertical-demo"
          >
            <el-submenu index="1">
              <template slot="title">
                <i
                  class="el-icon-location"
                  style="
                    background-image: url('../../../assets/img/logo_difinity@2x.png');
                  "
                >
                </i>
                <span>{{ this.principle }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item
                  index="1-1"
                  class="overView"
                  @click="changingOver('overView')"
                  >Overview</el-menu-item
                >
                <el-menu-item
                  index="1-2"
                  class="hosteslist"
                  @click="changingOver('hosteslist')"
                  >Hostes List</el-menu-item
                >
                <el-menu-item
                  index="1-3"
                  class="mertric"
                  @click="changingOver('mertric')"
                  >Canister Mertric</el-menu-item
                >
                <el-menu-item
                  index="1-4"
                  class="canisterLog"
                  @click="changingOver('canisterLog')"
                  >Canister Log</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="sidebar_content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "./header.vue";

export default {
  name: "Sidebar",
  components: { Header },
  data() {
    return {
      openeds: ["1"],
      principle: null,
    };
  },
  created() {
    localStorage.setItem(
      "chain_cloud",
      '{"_arr":{"0":48,"1":155,"2":18,"3":7,"4":33,"5":139,"6":178,"7":61,"8":208,"9":83,"10":202,"11":118,"12":163,"13":249,"14":223,"15":104,"16":105,"17":64,"18":79,"19":62,"20":11,"21":11,"22":70,"23":55,"24":238,"25":133,"26":243,"27":231,"28":2},"_isPrincipal":true}'
    );
  },
  mounted() {
    let principle = this.$store.getters.getPrinciple();
    if (!principle) {
      alert("Please login");
      this.$router.replace("/404");
    }
    this.principle = principle.toString();
    switch (this.$route.path) {
      case "/sidebar":
        let overView = document.getElementsByClassName("overView");
        overView[0].click();
        break;
      case "/sidebar/hosteslist":
        let hosteslist = document.getElementsByClassName("hosteslist");
        hosteslist[0].click();
        break;
      case "/sidebar/mertric":
        let mertric = document.getElementsByClassName("mertric");
        mertric[0].click();
        break;
      case "/sidebar/canisterLog":
        let canisterLog = document.getElementsByClassName("canisterLog");
        canisterLog[0].click();
        break;
    }
  },
  methods: {
    changingOver(tag) {
      switch (tag) {
        case "overView":
          if (this.$route.path != "/sidebar") {
            this.$router.replace("/sidebar");
          }

          break;
        case "hosteslist":
          if (this.$route.path != "/sidebar/hosteslist") {
            this.$router.replace("/sidebar/hosteslist");
          }
          break;
        case "mertric":
          if (this.$route.path != "/sidebar/mertric") {
            this.$router.replace("/sidebar/mertric");
          }
          break;
        case "canisterLog":
          if (this.$route.path != "/sidebar/canisterLog") {
            this.$router.replace("/sidebar/canisterLog");
          }
      }
    },
  },
};
</script>
<style  scoped>
#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  width: 100%;
  height: 100%;
}
.sidebar_head {
  height: 8%;
}

@media screen and (min-width: 700px) {
  .sidebar_left {
    width: 15%;
    bottom: 0;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sidebar_content {
    width: 84%;
    display: flex;
    height: 90%;
    background-color: rgb(239, 241, 241);
  }
}

@media screen and (max-width: 700px) {
  .sidebar_left {
    width: 100%;
    bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .sidebar_content {
    width: 100%;
    display: flex;
    height: 100%;

    background-color: rgb(239, 241, 241);
  }

  #sidebar {
    overflow: scroll;
  }
}
.sidebar_head {
  width: 100%;
}
.el-col-12 {
  width: 90%;
  height: 100%;
  margin-left: 5%;
}
.el-menu {
  border: none;
}

.el-menu-item {
  border-radius: 12px;
  margin-top: 10px;
  color: rgb(151, 150, 150);
  padding: 0 10px;
}

.el-menu-item.is-active,
.el-menu-item-group__title {
  background-color: #0071ff;
  color: white;
}

.el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
  min-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.el-icon-location:before {
  content: none;
}
.el-submenu [class^="el-icon-"] {
  width: 30%;
}
.el-icon-location {
  height: 50px;
  width: 50px !important;
  background-position: center;
  background-size: 80%;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-color: black;
  min-width: 45px;
}

.el-submenu__title span {
  display: inline-block;
  width: 55%;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 900;
}
.el-menu-vertical-demo .el-menu::before {
  content: none !important;
}
</style>
