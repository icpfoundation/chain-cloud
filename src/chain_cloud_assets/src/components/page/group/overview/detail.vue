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
  display: flex;
  justify-content: space-between;
}

.leftBox {
  width: 8rem;
  margin-right: 0.2rem;
}

.rightBox {
  flex: 1;
  background: white;
  height: 7.8rem;
  background: #ffffff;
  border-radius: 0.08rem;
  padding: 0.2rem;
}
.rightBoxContent {
  height: 6.95rem;
  width: 100%;
  background: #fafafa;
  border: 0.01rem solid #e6e6e6;
}
.leftBoxtop {
  width: 100%;
  height: 4.23rem;
  background: #ffffff;
  border-radius: 0.08rem;
  padding: 0.2rem;
}

.leftBoxName {
  font-size: 0.2rem;
  font-weight: 500;
  color: #333333;
}

.leftBoxInfo {
  font-size: 0.16rem;
  font-weight: 600;
  color: #333333;
  display: flex;
  align-items: center;
}

.leftBoxInfo img {
  width: 0.44rem;
  height: 0.44rem;
  margin-right: 0.1rem;
}

.leftBoxLine {
  margin-top: 0.2rem;
  width: 100%;
  height: 0.01rem;
  background: #ebebeb;
}

.leftContent {
  margin-top: 0.2rem;
}

.leftContentItem {
  display: flex;
  flex-direction: column;
  font-size: 0.14rem;
  font-weight: 600;
  color: #333333;
  margin-bottom: 0.1rem;
}

.leftContentItemDec {
  margin-top: 0.02rem;
  font-weight: 400;
}

.leftBoxBottom {
  margin-top: 0.2rem;
  height: 2.68rem;
  background: #ffffff;
  border-radius: 0.08rem;
  padding: 0.2rem;
}

.leftBoxBottomContent {
  margin-top: 0.2rem;
}

.leftBoxBottomItem {
  height: 0.44rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  font-size: 0.14rem;
  color: #333333;
  justify-content: space-between;
}

.leftBoxBottomItemName {
  font-weight: 600;
}

.leftBoxBottomItem:hover {
  background: #fafafa;
}

.table {
  width: 100%;
  height: 620px;
  border-radius: 4px;
  background: white;
}

.tableItem {
  width: 100%;
  height: 0.8rem;
  border-bottom: 0.01rem solid #ebebeb;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
}
.tableItem:hover {
  background: #fafafa;
}
.groupName {
  height: 0.36rem;
  font-size: 0.16rem;
  font-weight: 500;
  color: #333333;
}

.groupNameInfo {
  font-size: 0.14rem;
  color: #666666;
}

.tableItem img {
  width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.2rem;
}

.member {
  border: 1px solid #1776ff;
  color: #1776ff;
}

.biaozhi {
  height: 0.2rem;
  border-radius: 0.1rem;
  border: 0.01rem solid #cccccc;
  padding: 0.01rem;
  font-size: 0.12rem;
  color: #666666;
  text-align: center;
  line-height: 0.2rem;
  margin-left: 0.1rem;
  padding: 0 0.1rem;
}

.groupNameTop {
  display: flex;
  align-items: center;
}

.pageStyle {
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
}
</style>

<template>
  <div class="app">
    <div class="title">
      <div class="titleName">Detail</div>
      <span class="titlePath">{{ group.name }}/ Detail</span>
    </div>
    <div class="content">
      <div class="leftBox">
        <div class="leftBoxtop">
          <div class="leftBoxName">Group info</div>
          <div class="leftBoxInfo">
            <img
              src="../../../../../assets/chain_cloud/menu/pic_group_avatar@2x.png"
              alt=""
            />
            <span>{{ group.name }}</span>
          </div>
          <div class="leftBoxLine"></div>
          <div class="leftContent">
            <div class="leftContentItem">
              <span>Path</span>
              <span class="leftContentItemDec">{{ group.url }}</span>
            </div>
            <div class="leftContentItem">
              <span>Description</span>
              <span class="leftContentItemDec">{{ description }}</span>
            </div>
            <div class="leftContentItem">
              <span>Visibility level</span>
              <span class="leftContentItemDec">{{ visibility }}</span>
            </div>
            <div class="leftContentItem">
              <span>Created on</span>
              <span class="leftContentItemDec">{{ createdTime }}</span>
            </div>
            <div class="leftContentItem" style="margin-bottom: 0">
              <span>Storage</span>
              <span class="leftContentItemDec">{{ storageSize }}</span>
            </div>
          </div>
        </div>
        <div class="leftBoxBottom">
          <div class="leftBoxName">Project info</div>
          <div class="leftBoxBottomContent">
            <div
              class="leftBoxBottomItem"
              v-for="(item, index) in group.projects"
              :key="index"
            >
              <span class="leftBoxBottomItemName">{{ item.name }}</span>
              <span>{{ item.size }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="rightBox">
        <div class="leftBoxName" style="margin-bottom: 0.2rem">
          Group members
        </div>
        <div class="rightBoxContent">
          <div class="table">
            <div
              class="tableItem"
              v-for="(item, index) in tableData.tableList"
              :key="index"
            >
              <img
                src="../../../../../assets/chain_cloud/group/pic_avatar01@2x.png"
                alt=""
              />
              <div class="groupName">
                <div class="groupNameTop">
                  <span>{{ item.name }}</span>
                  <div
                    class="biaozhi"
                    v-if="item.isBizoZhi"
                    :class="{ member: item.biaozhi === 'Member' }"
                  >
                    {{ item.biaozhi }}
                  </div>
                </div>
                <div class="groupNameInfo">{{ item.groupInfo }}</div>
              </div>
            </div>
          </div>
          <div class="pageStyle">
            <Page
              v-if="tableData.total > 0"
              :total="tableData.total"
              :current="tableData.page"
              show-total
              :page-size="tableData.pageSize"
              size="small"
              @on-change="headPageFun"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import { dateFormat } from "@/chain_cloud_assets/assets/js/util";
import { Principal } from "@dfinity/principal";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      description: "This is a wonderful and beautiful team.",
      createdTime: "Apr 16,2019 7:54am",
      visibility: "Public",
      storageSize: "0 KB",
      group: {
        projects: [
          // {
          //   size: "860 KB",
          //   name: "Production group/project one",
          // },
        ],
        name: "",
        url: "",
      },
      tableData: {
        tableList: [
          // {
          //   name: "XXXXXX",
          //   groupInfo: "Given access 3 years ago",
          //   isBizoZhi: true,
          //   biaozhi: "Member",
          // },
          // {
          //   name: "XXXXXX",
          //   groupInfo: "Given access 3 years ago",
          //   isBizoZhi: true,
          //   biaozhi: "Owner",
          // },
          // {
          //   name: "XXXXXX",
          //   groupInfo: "Given access 3 years ago",
          //   isBizoZhi: true,
          //   biaozhi: "Member",
          // },
          // {
          //   name: "XXXXXX",
          //   groupInfo: "Given access 3 years ago",
          //   isBizoZhi: true,
          //   biaozhi: "Member",
          // },
          // {
          //   name: "XXXXXX",
          //   groupInfo: "Given access 3 years ago",
          //   isBizoZhi: true,
          //   biaozhi: "Member",
          // },
        ],
        total: 0,
        page: 1,
        pageSize: 3,
      },
    };
  },
  methods: {
    headPageFun(value) {
      this.$Notice.info({
        title: "暂无后台数据",
        background: true,
        duration: 3,
      });
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

    let getGroupInfoRes = await manage.getGroupInfo(account, groupId);
    if (getGroupInfoRes.Err) {
      throw getGroupInfoRes.Err;
      return;
    }
    this.description = getGroupInfoRes.Ok[0].description;
    this.createdTime = dateFormat(getGroupInfoRes.Ok[0].create_time);
    if ("Public" in getGroupInfoRes.Ok[0].visibility) {
      this.visibility = "Public";
    } else {
      this.visibility = "Private";
    }
    let currentTime = BigInt(new Date().getTime());
    let totalMemory_size = BigInt(0);
    this.group.name = getGroupInfoRes.Ok[0].name;
    this.group.url = getGroupInfoRes.Ok[0].url;
    for (let i = 0; i < getGroupInfoRes.Ok.length; i++) {
      for (let j = 0; j < getGroupInfoRes.Ok[0].projects.length; j++) {
        let memory_size = BigInt(0);
        for (
          let k = 0;
          k < getGroupInfoRes.Ok[0].projects[j][1].canisters.length;
          k++
        ) {
          let getCanisterStatusRes = await manage.getCanisterStatus(
            account,
            groupId,
            getGroupInfoRes.Ok[0].projects[j][1].id,
            getGroupInfoRes.Ok[0].projects[j][1].canisters[k]
          );

          if (getCanisterStatusRes.Ok) {
            memory_size = memory_size + getCanisterStatusRes.Ok[0].memory_size;
          }
        }
        totalMemory_size = totalMemory_size + memory_size;
        this.group.projects.push({
          size: `${memory_size / BigInt(1024)} KB`,
          name: getGroupInfoRes.Ok[0].projects[j][1].name,
        });
      }
      for (let k = 0; k < getGroupInfoRes.Ok[0].members.length; k++) {
        let duration = parseInt(
          Number(
            currentTime - BigInt(getGroupInfoRes.Ok[0].members[k][1].join_time)
          ) / 1000
        );
        let create_time = "";
        if (duration >= 86400) {
          create_time = `Given access ${parseInt(duration / 86400)} day ago`;
        } else if (duration >= 3600) {
          create_time = `Given access ${parseInt(duration / 3600)} hour ago`;
        } else if (duration >= 60) {
          create_time = `Given access ${parseInt(duration / 60)} min ago`;
        } else {
          create_time = `Given access ${duration} s ago`;
        }

        this.tableData.tableList.push({
          name: getGroupInfoRes.Ok[0].members[k][1].name,
          groupInfo: create_time,
          isBizoZhi: true,
          biaozhi: "Member",
        });
      }
    }
    this.storageSize = `${totalMemory_size / BigInt(1024)} KB`;
  },
};
</script>
