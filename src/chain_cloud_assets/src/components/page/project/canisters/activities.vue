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

.tab {
  background: #fafafa;
  font-weight: 600;
}

.content {
  width: 100%;
  padding: 0.2rem;
  border-radius: 0.04rem;
  background: white;
}

.contentTitle {
  font-size: 0.2rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}

.table {
  border-radius: 0.04rem;
}

.tableHead {
  height: 0.44rem;
  background: #fafafa;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  border-bottom: 0.01rem solid #e6e6e6;
}

.tableHeadTime {
  font-size: 0.14rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #1776ff;
  width: 0.88rem;
  height: 0.2rem;
  background: rgba(23, 118, 255, 0.2);
  border-radius: 0.02rem;
  line-height: 0.22rem;
  text-align: center;
}

.itemCom {
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
}

.tableItem {
  display: flex;
  background: white;
  border-bottom: 0.01rem solid #ebebeb;
  padding: 0.2rem;
}

.tableItem:hover {
  background: #fafafa;
}
.tableItem:last-child {
  border-bottom: 0px solid;
}
.leibie {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.1rem;
}

.groupName {
  font-size: 12px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #333333;
}

.groupNameItem {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  display: flex;
  align-items: center;
  margin-top: 0.1rem;
}

.groupNameItemtime {
  font-weight: 400;
  color: #666666;
  margin-left: 0.02rem;
}

.groupNameItemTo {
  color: #333333;
  margin: 0 0.1rem 0 0.4rem;
}

.contentBox {
  width: 100%;
  background: #fafafa;
  border: 0.01rem solid #e6e6e6;
  margin-top: 0.2rem;
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
      <div class="titleName">Activities</div>
      <span class="titlePath">Project info / Chain-Cloud / Activities</span>
    </div>
    <div class="content">
      <div class="contentTitle">Canister Activities</div>
      <div class="contentBox">
        <div class="table">
          <div class="tableHead">
            <div class="tableHeadTime">June 2021</div>
          </div>
          <div
            class="tableItem"
            v-for="(item, index) in tableData.tableList"
            :key="index"
          >
            <img
              class="leibie"
              src="../../../../../assets/chain_cloud/teamscan/icon_connect@2x.png"
              alt=""
            />
            <div class="groupName">
              <span>10th June</span>
              <div class="groupNameItem">
                <span class="groupNameItemtime">{{ item.time }}</span>
                <span class="groupNameItemTo">{{ item.operation }}</span>
                <span>{{ item.data }}</span>
              </div>
              <div class="groupNameItem">
                <span class="groupNameItemtime">{{ item.time }}</span>
                <span class="groupNameItemTo">{{ item.operation }}</span>
                <span>{{ item.data }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import { Principal } from "@dfinity/principal";
import { formatDate } from "@/chain_cloud_assets/assets/js/util";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      tabList: [
        {
          name: "All public projects",
          select: true,
        },
        {
          name: "My projects",
          select: false,
        },
      ],
      groupValue: "1",
      groupList: [
        {
          value: "1",
          label: "Default",
        },
        {
          value: "2",
          label: "Create time",
        },
      ],
      tableData: {
        tableList: [
          // {
          //   projectName: "tidy go.sum",
          //   author: "yongyu",
          //   time: "18 days ago",
          // },
          // {
          //   projectName: "tidy go.sum",
          //   author: "yongyu",
          //   time: "18 days ago",
          // },
          // {
          //   projectName: "tidy go.sum",
          //   author: "yongyu",
          //   time: "18 days ago",
          // },
          // {
          //   projectName: "tidy go.sum",
          //   author: "yongyu",
          //   time: "18 days ago",
          // },
          // {
          //   projectName: "tidy go.sum",
          //   author: "yongyu",
          //   time: "18 days ago",
          // },
        ],
        total: 5,
        page: 1,
        pageSize: 3,
      },
    };
  },
  computed: {
    ...mapGetters(["getManageCanister"]),
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
  async created() {
    let url = window.location.href;
    console.log(url);
    let canister = this.getManageCanister();
    let manage = manageCanister;
    if (canister) {
      manage = canister;
    }
    let account = Principal.fromText(this.$route.params.user);
    let groupId = BigInt(this.$route.params.groupId);
    let projectId = BigInt(this.$route.params.projectId);
    let currentTime = BigInt(new Date().getTime()) / BigInt(1000);
    let getLogRes = await manage.getLog(account, groupId, 1);

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
          getLogRes[i][j][3][0].length > 30
            ? getLogRes[i][j][3][0].slice(0, 30) + "..."
            : getLogRes[i][j][3][0];

        let operation = "";
        if ("UpdateProjectCanister" in getLogRes[i][j][2]) {
          if (getLogRes[i][j][2].UpdateProjectCanister[1] != projectId) {
            continue;
          }
          operation = getLogRes[i][j][2].UpdateProjectCanister[2];
        } else {
          continue;
        }

        this.tableData.tableList.push({
          name: getLogRes[i][j][0].toString(),
          time: create_time,
          project: projectId,
          operation: operation,
          data: logData,
        });
      }
    }
  },
};
</script>
