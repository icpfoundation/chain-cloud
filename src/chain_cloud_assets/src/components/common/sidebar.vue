<template>
  <div id="sidebar">
    <div><Header></Header></div>
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
                <i class="el-icon-location"> </i>
                <span>{{ this.principle }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1" @click="changingOver('overView')"
                  >Overview</el-menu-item
                >
                <el-menu-item index="1-2" @click="changingOver('hosteslist')"
                  >Hostes List</el-menu-item
                >
                <el-menu-item index="1-3" @click="changingOver('mertric')"
                  >Canister Mertric</el-menu-item
                >
                <el-menu-item index="1-4" @click="changingOver('canisterLog')"
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
  mounted() {
    let principle = this.$store.getters.getPrinciple();
    if (!principle) {
      this.$router.replace("/404");
    }
    this.principle = principle.toString();
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
      }
    },
  },
};
</script>
<style  scoped>
#sidebar {
  position: fixed;
  background: white;
  width: 100%;
  height: 100%;
}
.sidebar_left {
  width: 15%;
  bottom: 0;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  height: 80%;
  /* background-image: url("../../../assets/img/logo_difinity@2x.png");  */
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
.sidebar_content {
  width: 83%;
  display: flex;
  height: 85%;
  background-color: rgb(239, 241, 241);
}
</style>
