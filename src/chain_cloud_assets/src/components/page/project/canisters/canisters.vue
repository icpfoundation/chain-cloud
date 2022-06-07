<style scoped>
.app {
  margin-top: 100px;
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

.head {
  width: 100%;
  border-radius: 0.08rem;
  background: white;
  padding: 0.2rem;
}

.headBox {
  width: 100%;
  display: flex;
  margin-top: 0.2rem;
  align-items: center;
}

.headItem {
  background: #f8f8f8;
  padding: 0.2rem;
  height: 2.4rem;
}

.headLeft {
  width: 4.4rem;
  margin-right: 0.2rem;
  height: 100%;
}

.headRight {
  flex: 1;
  height: 100%;
}

.headRightItem {
  font-size: 0.14rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
}

.headRightItemtitle {
  width: 1.4rem;
  font-weight: 600;
  margin-right: 0.2rem;
}

.headItemTitle {
  font-size: 0.2rem;
  font-weight: 500;
  color: #333333;
  margin-bottom: 0.2rem;
}

.headItemLog {
  display: flex;
  align-items: center;
  font-size: 0.16rem;
  font-weight: 600;
  color: #333333;
}

.headItemLog img {
  width: 0.44rem;
  height: 0.44rem;
  margin-right: 0.1rem;
}

.headItemLogCloud {
  height: 0.44rem;
}

.headItemLogCloudTop {
  display: flex;
}

.headItemLogCloudRunning {
  width: 0.7rem;
  text-align: center;
  line-height: 0.2rem;
  height: 0.2rem;
  background: rgba(85, 200, 137, 0.2);
  border-radius: 0.04rem;
  font-size: 11px;
  font-weight: 500;
  color: #48c982;
  margin-left: 0.1rem;
}

.headItemLogCloudid {
  font-size: 12px;
  color: #333333;
}

.line {
  width: 100%;
  height: 0.01rem;
  background: #ebebeb;
  margin: 0.2rem 0;
}

.idInfo {
  margin-bottom: 0.1rem;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.idInfoTitle {
  font-weight: 600;
  margin-bottom: 0.02rem;
}

.headItemTable {
  width: 100%;
  height: 1.8rem;
  border-radius: 0.04rem;
  border: 0.01rem solid #e6e6e6;
}

.headTableItem {
  height: 0.44rem;
  background: #fafafa;
  border-radius: 0.04rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  font-size: 0.14rem;
  color: #333333;
  border-bottom: 0.01rem solid #ebebeb;
}

.headTableItem:last-child {
  border-bottom: none;
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
  margin-top: 0.2rem;
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
      <div class="titleName">Canisters</div>
      <span class="titlePath">{{ project.name }} / Canisters</span>
    </div>
    <div class="head">
      <div class="headItemTitle">All canister info</div>

      <el-empty
        :image-size="50"
        description="No data"
        v-if="project.canisters.length == 0"
      >
      </el-empty>
      <div
        v-else
        class="headBox"
        v-for="(item, index) in project.canisters"
        :key="index"
      >
        <div class="headItem headLeft">
          <div class="headItemLog">
            <img
              src="../../../../../assets/chain_cloud/menu/pic_group_avatar@2x.png"
              alt=""
            />
            <div class="headItemLogCloud">
              <div class="headItemLogCloudTop">
                <span>{{ project.name }}</span>
                <div class="headItemLogCloudRunning">Running</div>
              </div>
              <span class="headItemLogCloudid">ID:{{ item.id }}</span>
            </div>
          </div>
          <div class="line"></div>
          <div class="idInfo">
            <div class="idInfoTitle">Created time</div>
            <span>{{ project.createdTime }}</span>
          </div>
          <div class="idInfo">
            <div class="idInfoTitle">Update time</div>
            <span>{{ project.updateTime }}</span>
          </div>
        </div>
        <div class="headItem headRight">
          <div class="headRightItem">
            <div class="headRightItemtitle">Module hash</div>
            <span>{{ item.module_hash }} </span>
          </div>
          <div class="headRightItem">
            <div class="headRightItemtitle">Controller</div>
            <span> {{ item.controllers }}</span>
          </div>
          <div class="headRightItem">
            <div class="headRightItemtitle">Memory allocation</div>
            <span>{{ item.memory_allocation }}</span>
          </div>
          <div class="headRightItem">
            <div class="headRightItemtitle">Compute allocation</div>
            <span>{{ item.compute_allocation }}</span>
          </div>
          <div class="headRightItem">
            <div class="headRightItemtitle">Memory Size</div>
            <span>{{ item.memory_size }}</span>
          </div>
          <div class="headRightItem">
            <div class="headRightItemtitle">Freezing threshold</div>
            <span>{{ item.freezing_threshold }}</span>
          </div>
          <div class="headRightItem">
            <div class="headRightItemtitle">Balance</div>
            <span>{{ item.cycles }} Cycles</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="contentTitle">Canister Activities</div>
      <div class="contentBox">
        <div class="table">
          <div class="tableHead">
            <div class="tableHeadTime">June 2022</div>
          </div>
          <el-empty
            :image-size="50"
            description="No data"
            v-if="project.canisters.length == 0"
          >
          </el-empty>
          <div
            v-else
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
                <span class="groupNameItemTo">{{ item.action }}</span>
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
import { getCanisterInfo } from "@/chain_cloud_assets/assets/js/agent";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      project: {
        createdTime: "unknown",
        updateTime: "unknown",
        id: 0,
        name: "",
        canisters: [],
      },
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
          //   {
          //     projectName: "tidy go.sum",
          //     author: "yongyu",
          //     time: "18 days ago",
          //     action: "",
          //     data: "",
          //   },
          //   {
          //     projectName: "tidy go.sum",
          //     author: "yongyu",
          //     time: "18 days ago",
          //     action: "",
          //     data: "",
          //   },
          //   {
          //     projectName: "tidy go.sum",
          //     author: "yongyu",
          //     time: "18 days ago",
          //     action: "",
          //     data: "",
          //   },
          //   {
          //     projectName: "tidy go.sum",
          //     author: "yongyu",
          //     time: "18 days ago",
          //     action: "",
          //     data: "",
          //   },
          //   {
          //     projectName: "tidy go.sum",
          //     author: "yongyu",
          //     time: "18 days ago",
          //     action: "",
          //     data: "",
          //   },
        ],
        total: 5,
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
    let url = window.location.href;
    if (!this.$route.params) {
      throw "params  not found";
    }
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

    if (getProjectRest.Err) {
      throw getProjectRest.Err;
    }

    let formatTime = formatDate(
      getProjectRest.Ok[0].create_time,
      "yyyy-MM-dd hh:mm:ss"
    );
    this.project.createdTime = formatTime;
    this.project.updateTime = formatTime;
    this.project.name = getProjectRest.Ok[0].name;
    if (getProjectRest.Ok.length > 0) {
      for (let i = 0; i < getProjectRest.Ok[0].canisters.length; i++) {
        let getCanisterStatusRes = await manage.getCanisterStatus(
          account,
          groupId,
          projectId,
          getProjectRest.Ok[0].canisters[i]
        );
        if (getCanisterStatusRes.Ok) {
          console.log("getCanisterStatusRes.Ok", getCanisterStatusRes.Ok);
          this.project.canisters.push({
            id: getProjectRest.Ok[0].canisters[i].toString(),
            cycles: getCanisterStatusRes.Ok[0].cycles,
            memory_size: getCanisterStatusRes.Ok[0].memory_size,
            module_hash: Buffer.from(
              getCanisterStatusRes.Ok[0].module_hash
            ).toString("hex"),
            status:
              "running" in getCanisterStatusRes.Ok[0].status
                ? "Runing"
                : "Stop",
            compute_allocation:
              getCanisterStatusRes.Ok[0].settings.compute_allocation[0],
            controllers:
              getCanisterStatusRes.Ok[0].settings.controllers[0].toString(),
            freezing_threshold:
              getCanisterStatusRes.Ok[0].settings.freezing_threshold[0],
            memory_allocation:
              getCanisterStatusRes.Ok[0].settings.memory_allocation[0],
          });
        } else {
          let getCanisterInfoRes = await getCanisterInfo(
            getProjectRest.Ok[0].canisters[i].toString()
          );
          console.log("getCanisterInfoRes", getCanisterInfoRes);
          this.project.canisters.push({
            id: getProjectRest.Ok[0].canisters[i].toString(),
            cycles: 0,
            memory_size: "unknown",
            module_hash: getCanisterInfoRes.moduleHash,
            status: "unknown",
            compute_allocation: "unknown",
            controllers: getCanisterInfoRes.controllerId,
            freezing_threshold: "unknown",
            memory_allocation: "unknown",
          });
        }
      }

      let currentTime = BigInt(new Date().getTime()) / BigInt(1000);
      let getLogRes = await manage.getLog(account, groupId, 1);
      for (let i = 0; i < getLogRes.length; i++) {
        for (let j = 0; j < getLogRes[i].length; j++) {
          if (
            "UpdateProject" in getLogRes[i][j][2] ||
            "UpdateProjectCanister" in getLogRes[i][j][2]
          ) {
            let duration = parseInt(
              Number(
                currentTime - BigInt(getLogRes[i][j][1]) / BigInt(1000000000)
              )
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

            if ("UpdateProject" in getLogRes[i][j][2]) {
              if (getLogRes[i][j][2].UpdateProject[1] == projectId) {
                this.tableData.tableList.push({
                  projectName: this.project.name,
                  author: "yongyu",
                  time: create_time,
                  action: getLogRes[i][j][2].UpdateProject[2],
                  data: getLogRes[i][j][3],
                });
              }
            }
            if ("UpdateProjectCanister" in getLogRes[i][j][2]) {
              if (getLogRes[i][j][2].UpdateProjectCanister[1] == projectId) {
                this.tableData.tableList.push({
                  projectName: this.project.name,
                  author: "yongyu",
                  time: create_time,
                  action: getLogRes[i][j][2].UpdateProjectCanister[2],
                  data: getLogRes[i][j][3],
                });
              }
            }
          }
        }
      }
    }
  },
};
</script>
