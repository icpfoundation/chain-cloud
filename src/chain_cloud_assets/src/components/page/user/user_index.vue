<style scoped>
.userapp {
  width: 100%;
  margin-top: 100px;
}

.head {
  width: 100%;
  height: 2.32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;
}

.head img {
  height: 0.8rem;
  width: 0.8rem;
}

.swifter {
  font-size: 0.2rem;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  margin-top: 0.2rem;
}

.time {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  margin-top: 0.1rem;
}

.headInfo {
  margin-top: 0.1rem;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
}

.content {
  width: 100%;
  background: white;
  padding-bottom: 100px;
}

.contentBox {
  width: 1160px;
  margin: 0 auto;
}

.contentTab {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contentItem {
  height: 42px;
  border-bottom: 1px solid white;
  padding: 0 1px;
  line-height: 42px;
  font-size: 16px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  cursor: pointer;
  margin-right: 0.1rem;
}

.contentItem:last-child {
  margin-right: 0;
}

.chooseClass {
  color: #1776ff;
  border-bottom: 1px solid #1776ff;
}

.components {
  margin-top: 40px;
}

.compenentsName {
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}

.table {
  margin-top: 20px;
}
.componentsContent {
  margin-top: 20px;
}
</style>

<template>
  <div class="userapp">
    <div class="head">
      <img
        src="../../../../assets/chain_cloud/group/pic_avatar01@2x.png"
        alt=""
      />
      <span class="swifter">{{ user.account }}</span>
      <span class="time">{{ user.createTime }} </span>
      <span class="headInfo">Internet identity: {{ user.account }}</span>
    </div>
    <div class="content">
      <div class="contentBox">
        <div class="contentTab">
          <div
            class="contentItem"
            v-for="(item, index) in conTabList"
            :key="index"
            :class="{ chooseClass: item.select }"
            @click="chooseFun(item)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="components">
          <span class="compenentsName">Most Recent {{ title }}</span>
          <div class="componentsContent">
            <UserOverview v-if="type === 1"></UserOverview>
            <UserActivity v-if="type === 2"></UserActivity>
            <UserGroups v-if="type === 3"></UserGroups>
            <UserProjects v-if="type === 4"></UserProjects>
            <UserPersonal v-if="type === 5"></UserPersonal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserOverview from "./user_overview";
import UserActivity from "./user_activity";
import UserGroups from "./user_groups";
import UserProjects from "./user_projects";
import UserPersonal from "./user_personal";
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import { Principal } from "@dfinity/principal";
import { dateFormat } from "@/chain_cloud_assets/assets/js/util";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        account: "",
        createTime: "",
      },
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
      conTabList: [
        {
          name: "Overview",
          id: 1,
          select: true,
        },
        {
          name: "Activity",
          id: 2,
          select: false,
        },
        {
          name: "Groups",
          id: 3,
          select: false,
        },
        {
          name: "Projects",
          id: 4,
          select: false,
        },
        {
          name: "Personal projects",
          id: 5,
          select: false,
        },
      ],
      type: 1,
      title: "Overview",
    };
  },
  components: {
    UserOverview,
    UserActivity,
    UserGroups,
    UserProjects,
    UserPersonal,
  },
  computed: {
    ...mapGetters(["getManageCanister"]),
    getmanagecanister() {
      return this.getManageCanister();
    },
  },
  watch: {
    async getmanagecanister(newdata, olddata) {
      await this.userConfig(newdata.identity);
    },
  },
  methods: {
    async userConfig(identity) {
      let canister = this.getManageCanister();
      this.user.account = identity.toString();
      let gerUserInfoRes = await canister.getUserInfo(identity);

      if (gerUserInfoRes.Ok) {
        this.user.createTime = dateFormat(
          gerUserInfoRes.Ok.create_time / BigInt(1000000)
        );
      }
    },
    toHome() {
      this.$router.push({
        name: "index",
      });
    },
    chooseFun(item) {
      this.conTabList.forEach((element) => {
        element.select = false;
      });
      item.select = true;
      this.type = item.id;
      this.title = item.name;
    },
  },
  async created() {
    let canister = this.getManageCanister();
    if (!canister) {
      throw "No login account";
    }
    await this.userConfig(canister.identity);
  },
};
</script>
