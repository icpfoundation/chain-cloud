<style scoped>
.app {
  margin-top: 1rem;
  width: 100%;
}

.title {
  height: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.titleName {
  font-size: 0.2rem;
  font-weight: 600;
  color: #333333;
}

.titlePath {
  font-size: 12px;
}

.content {
  background: white;
  width: 100%;
  padding: 0.2rem;
}

.actiontab {
  display: flex;
  align-items: center;
}

.actionitem {
  padding: 0 0.1rem;
  font-size: 0.16rem;
  font-weight: 600;
  color: #333333;
  height: 0.32rem;
  margin-right: 0.1rem;
  line-height: 0.32rem;
  cursor: pointer;
  border-radius: 0.04rem;
}

.chooseClass {
  background: rgba(23, 118, 255, 0.1);
  color: #1776ff;
}

.table {
  height: 7.66rem;
  border-radius: 0.04rem;
  border: 0.01rem solid #e6e6e6;
  margin-top: 0.2rem;
}

.tableHead {
  width: 100%;
  height: 0.44rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  font-size: 0.16rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  border-bottom: 0.01rem solid #ebebeb;
  justify-content: space-between;
}

.tableHeadRight {
  font-size: 0.14rem;
  font-family: UbuntuMono-Regular, UbuntuMono;
  font-weight: 400;
  color: #818181;
  margin-right: 0.05rem;
  display: flex;
  align-items: center;
}

.tableHeadRight img {
  width: 0.16rem;
  height: 0.16rem;
}

.tableBox {
  width: 100%;
  height: 7.2rem;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 0.2rem;
  display: flex;
  flex-direction: column;
}

.tableBox::-webkit-scrollbar {
  width: 0 !important;
}
</style>

<template>
  <div class="app">
    <div class="title">
      <div class="titleName">Interface</div>
      <span class="titlePath">Project info / Chain-Cloud / Interface</span>
    </div>
    <div class="content">
      <div class="actiontab">
        <div
          class="actionitem"
          v-for="(item, index) in tabList"
          :key="index"
          :class="{ chooseClass: item.select }"
          @click="chooseFun(item, index)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="table">
        <div class="tableHead">
          <span>Frosty_shadow_2438.did</span>
          <div class="tableHeadRight">
            <span>c24e6435</span>
            <img
              src="../../../../../assets/chain_cloud/teamscan/icon_copy_white@2x (1).png"
              alt=""
            />
          </div>
        </div>
        <div class="tableBox">
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
          <span>.title {</span>
          <span> height: 0.8rem;</span>
          <span> display: flex;</span>
          <span> flex-direction: column;</span>
          <span> justify-content: center;</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { canisterInterface } from "@/chain_cloud_assets/assets/js/interface";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
import { mapGetters } from "vuex";
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
export default {
  data() {
    return {
      tabList: [
        {
          name: "Candid",
          select: true,
          id: 1,
        },
        {
          name: "Motoko",
          select: false,
          id: 2,
        },
        {
          name: "Rust",
          select: false,
          id: 3,
        },
        {
          name: "TypeScri",
          select: false,
          id: 4,
        },
        {
          name: "JavaScri",
          select: false,
          id: 5,
        },
      ],
    };
  },
  methods: {
    chooseFun(item, index) {
      this.tabList.forEach((element) => {
        element.select = false;
      });
      item.select = true;
      if (item.id === 1) {
        this.activeBoolean = true;
        this.stableBoolean = true;
      } else if (item.id === 2) {
        this.activeBoolean = true;
        this.stableBoolean = false;
      } else if (item.id === 3) {
        this.activeBoolean = false;
        this.stableBoolean = true;
      }
    },
  },
  computed: {
    ...mapGetters(["getManageCanister"]),
  },
  async created() {
    let canister = this.getManageCanister();
    let manage = manageCanister;
    if (canister) {
      manage = canister;
    }
    let account = Principal.fromText(this.$route.params.user);
    let groupId = BigInt(this.$route.params.groupId);
    let projectId = BigInt(this.$route.params.projectId);
    let getProjectRest = await manage.getProjectInfo(
      account,
      groupId,
      projectId
    );
    if (getProjectRest.Ok.length > 0) {
      let agent = new HttpAgent({
        // host: "https://ic0.app",
        host: "https://localhost:8000",
      });
      for (let i = 0; i < getProjectRest.Ok[0].canisters.length; i++) {
        //Note: that only the cansiter developed by motoko can be used to obtain data,
        // and the interface of rust development needs to be exposed by the developer
        try {
          let res = await canisterInterface(
            agent,
            getProjectRest.Ok[0].canisters[i]
          );
          console.log("res", res);
        } catch (err) {
          console.log("get canister interface failed:", err);
        }
      }
    }
  },
};
</script>
