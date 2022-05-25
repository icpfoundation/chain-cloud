<style scoped>
.app { margin-top:1rem;
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
  height: 7.8rem;
  background: #ffffff;
  border-radius: 0.08rem;
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

.contentBox {
  height: 6.4rem;
  width: 100%;
  background: #fafafa;
  border: 0.01rem solid #e6e6e6;
  margin-top: 0.2rem;
}

.table {
  border-radius: 0.04rem;
  padding-bottom: 0.4rem;
  background: white;
  padding-bottom: 0.4rem;
}

.tableItem {
  width: 100%;
  height: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 0.01rem solid #ebebeb;
}

.itemWidth1 {
  width: 12rem;
  height: 1rem;
  display: flex;
  padding: 0 0.2rem;
  padding-top: 0.18rem;
}

.pepleImg {
  width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.1rem;
}

.itemWidth2 {
  flex: 1;
  height: 1rem;
  display: flex;
  justify-content: flex-end;
  font-size: 0.14rem;
  font-weight: 400;
  color: #666666;
  padding: 0 0.2rem;
  padding-top: 0.18rem;
}

.groupNameTop {
  font-size: 0.16rem;
  font-weight: 500;
  color: #333333;
  display: flex;
  align-items: center;
}

.toName {
  font-size: 0.12rem;
  font-weight: 400;
  color: #666666;
  margin-left: 0.1rem;
}

.groupNameInfo {
  display: flex;
  align-items: center;
}

.groupNameInfo img {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.1rem;
}

.groupNameInfoColor {
  color: #1776ff;
  margin: 0 0.1rem;
}

.groupTime {
  font-size: 12px;
  font-weight: 400;
  color: #333333;
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
      <div class="titleName">Activity</div>
      <span class="titlePath">Group1 / Project group 001 / Activity</span>
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
      <div class="contentBox">
        <div class="table">
          <div
            class="tableItem"
            v-for="(item, index) in tableData.tableList"
            :key="index"
          >
            <div class="itemWidth1">
              <img
                src="../../../../../assets/chain_cloud/group/pic_avatar01@2x.png"
                alt=""
                class="pepleImg"
              />
              <div class="groupName">
                <div class="groupNameTop">
                  <span>{{ item.name }}</span>
                  <div class="toName">{{ item.toName }}</div>
                </div>
                <div class="groupNameInfo">
                  <img
                    src="../../../../../assets/chain_cloud/group/icon_connect@2x.png"
                    alt=""
                  />
                  <span>{{ item.operation }}</span>
                  <span class="groupNameInfoColor">{{ item.branch }}</span>
                  <span>at</span>
                  <span class="groupNameInfoColor">{{ item.project }}</span>
                </div>
                <div class="groupTime">{{ item.size }} update</div>
              </div>
            </div>
            <div class="itemWidth2">{{ item.time }}</div>
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
</template>
<script>
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import { dateFormat } from "@/chain_cloud_assets/assets/js/util";
import { Principal } from "@dfinity/principal";
import {
  MANAGE_CANISTER_LOCALNET,
  TEST_USER,
  TEST_GROUP_ID,
} from "@/chain_cloud_assets/assets/js/config";
export default {
  data() {
    return {
      tabList: [
        {
          name: "All",
          select: true,
        },
        {
          name: "Push events",
          select: false,
        },
        {
          name: "Merge events",
          select: false,
        },
        {
          name: "Issue events",
          select: false,
        },
        {
          name: "Comments",
          select: false,
        },
        {
          name: "Team",
          select: false,
        },
      ],
      tableData: {
        tableList: [
          {
            name: "yong",
            groupInfo: "go-statemachine",
            time: "18 days ago",
            toName: "@shanshan",
            size: 556565,
            operation: "Pushed to branch",
            branch: "osp-base-rust-lastest",
            project: "Group/lotus",
          },
          {
            name: "yong1",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565,
            operation: "Pushed to branch",
            branch: "osp-base-rust-lastest",
            project: "Group/lotus",
          },
          {
            name: "yong2",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565,
            operation: "Pushed to branch",
            branch: "osp-base-rust-lastest",
            project: "Group/lotus",
          },
          {
            name: "yong3",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565,
            operation: "Pushed to branch",
            branch: "osp-base-rust-lastest",
            project: "Group/lotus",
          },
          {
            name: "yong4",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565,
            operation: "Pushed to branch",
            branch: "osp-base-rust-lastest",
            project: "Group/lotus",
          },
        ],
        total: 5,
        page: 1,
        pageSize: 3,
      },
    };
  },
  methods: {
    chooseFun(item, index) {
      this.tabList.forEach((element) => {
        element.select = false;
      });
      item.select = true;
    },
    headPageFun(value) {
      this.$Notice.info({
        title: "暂无后台数据",
        background: true,
        duration: 3,
      });
    },
  },
  async created() {
    let currentTime = BigInt(new Date().getTime()) / BigInt(1000);

    let user = Principal.fromText(TEST_USER);
    let getLogRes = await manageCanister.getLog(user, TEST_GROUP_ID, 1);
    for (let i = 0; i < getLogRes.length; i++) {
      for (let j = 0; j < getLogRes[i].length; j++) {
        let duration = parseInt(
          Number(currentTime - getLogRes[i][j][1] / BigInt(1000000000))
        );

        let create_time = "0 s ago";
        if (duration >= 86400) {
          create_time = `${parseInt(duration / 86400)} day ago`;
        } else if (duration >= 3600) {
          create_time = `${parseInt(duration / 3600)} hour ago`;
        } else if (duration >= 60) {
          create_time = `${parseInt(duration / 60)} min ago`;
        } else {
          create_time = `${duration} s ago`;
        }
        let logData =
          getLogRes[i][j][2][2].length > 30
            ? getLogRes[i][j][2][2].slice(0, 30) + "..."
            : getLogRes[i][j][2][2];
        this.tableData.tableList.push({
          name: getLogRes[i][j][0].toString(),
          //groupInfo: getLogRes[i][j][2],
          time: create_time,
          // toName: "@shanshan",
          // size: 556565,
          project: logData,
          operation: getLogRes[i][j][2][0],
        });
      }
    }
  },
};
</script>
