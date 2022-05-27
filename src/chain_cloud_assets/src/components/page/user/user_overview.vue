<style scoped>
.app {
  width: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
}

.comItem {
  width: 570px;
}

.comItemTitle {
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}

.table {
  width: 100%;
  height: 800px;
  margin-top: 20px;
  border: 1px solid #e6e6e6;
  overflow: hidden;
  overflow-y: auto;
}

.tableItem {
  width: 100%;
  height: 100px;
  padding: 20px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: flex-start;
  position: relative;
}

.connect {
  width: 16px;
  height: 16px;
  margin-right: 10px;
}

.tableContent {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tableContentTop {
  font-size: 12px;
  color: #666666;
  display: flex;
  align-items: center;
}

.toname {
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
}

.tableContentInfo {
  width: 500px;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mergestyle {
  font-size: 12px;
  color: #1776ff;
  margin: 0 10px;
}

.tableContentBottom {
  font-size: 12px;
  color: #333333;
}

.tableItemTime {
  font-size: 12px;
  color: #666666;
  position: absolute;
  top: 20px;
  right: 20px;
}

.grouptype {
  width: 36px;
  height: 36px;
  background: #1776ff;
  border-radius: 4px;
  text-align: center;
  line-height: 36px;
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-right: 10px;
}

.groupContent {
  height: 36px;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  color: #666666;
}

.groupContentTop {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}

.typeImg {
  width: 16px;
  height: 16px;
  margin-left: 5px;
  margin-right: 10px;
}

.type {
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  font-size: 12px;
  color: #666666;
}

.tableItemgroupTime {
  position: absolute;
  right: 20px;
  top: 0;
  height: 100%;
  font-size: 12px;
  color: #666666;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tableItemgroupTimeTop {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666666;
}

.tableItemgroupTimeTop img {
  width: 16px;
  height: 16px;
}
</style>

<template>
  <div class="app">
    <div class="content">
      <div class="comItem">
        <div class="comItemTitle">Activity</div>
        <div class="table">
          <div
            class="tableItem"
            v-for="(item, index) in activeList"
            :key="index"
          >
            <img
              src="../../../../assets/chain_cloud/teamscan/icon_connect@2x (1).png"
              alt=""
              class="connect"
            />
            <div class="tableContent">
              <div class="tableContentTop">
                <span class="toname">{{ item.name }}</span>
                <span>{{ item.toname }}</span>
              </div>
              <div class="tableContentInfo">
                <span>Pushed to branch</span>
                <span class="mergestyle">{{ item.fromaddress }}</span>
                <span>at</span>
                <span class="mergestyle">{{ item.toaddress }}</span>
              </div>
              <div class="tableContentBottom">{{ item.commitNum }} update</div>
            </div>
            <div class="tableItemTime">{{ item.time }}</div>
          </div>
        </div>
      </div>
      <div class="comItem">
        <div class="comItemTitle">Personal projects</div>
        <div class="table">
          <div
            class="tableItem"
            v-for="(item, index) in projectList"
            :key="index"
          >
            <div class="grouptype">{{ item.groupType }}</div>
            <div class="groupContent">
              <div class="groupContentTop">
                <span class="groupName">{{ item.name }}</span>
                <img
                  src="../../../../assets/chain_cloud/teamscan/icon_private@2x.png"
                  alt=""
                  v-if="item.id === 1"
                  class="typeImg"
                />
                <img
                  src="../../../../assets/chain_cloud/teamscan/icon_internal@2x.png"
                  alt=""
                  v-else-if="item.id === 2"
                  class="typeImg"
                />
                <img
                  src="../../../../assets/chain_cloud/teamscan/icon_pubilc@2x.png"
                  alt=""
                  v-else
                  class="typeImg"
                />
                <div class="type">{{ item.type }}</div>
              </div>
              <span>{{ item.info }}</span>
            </div>
            <div class="tableItemgroupTime">
              <div class="tableItemgroupTimeTop">
                <img
                  src="../../../../assets/chain_cloud/teamscan/icon_xing_s@2x.png"
                  alt=""
                />
                <span>{{ item.xingNum }}</span>
              </div>
              <span>{{ item.time }}</span>
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
import {
  MANAGE_CANISTER_LOCALNET,
  TEST_USER,
  TEST_GROUP_ID,
  TEST_CANISTER,
} from "@/chain_cloud_assets/assets/js/config";
export default {
  data() {
    return {
      activeList: [
        // {
        //   name: "XXX",
        //   toname: "@haoshanshan",
        //   fromaddress: "osp-base-rust-lastest-osp-base-rust-lastest-",
        //   toaddress: "Group/lotuss/",
        //   commitNum: "372bb51",
        //   time: "18 days ago",
        // },
        // {
        //   name: "XXX",
        //   toname: "@haoshanshan",
        //   fromaddress: "osp-base-rust-lastest-osp-base-rust-lastest-",
        //   toaddress: "Group/lotuss/",
        //   commitNum: "372bb51",
        //   time: "18 days ago",
        // },
        // {
        //   name: "XXX",
        //   toname: "@haoshanshan",
        //   fromaddress: "osp-base-rust-lastest-osp-base-rust-lastest-",
        //   toaddress: "Group/lotuss/",
        //   commitNum: "372bb51",
        //   time: "18 days ago",
        // },
        // {
        //   name: "XXX",
        //   toname: "@haoshanshan",
        //   fromaddress: "osp-base-rust-lastest-osp-base-rust-lastest-",
        //   toaddress: "Group/lotuss/",
        //   commitNum: "372bb51",
        //   time: "18 days ago",
        // },
      ],
      projectList: [
        // {
        //   groupType: "G",
        //   name: "XXXXX",
        //   id: 1,
        //   type: "Maintainer",
        //   info: "filecoin mining pool rust-fil-sector-builder",
        //   xingNum: 0,
        //   time: "Updata 8 days ago",
        // },
        // {
        //   groupType: "F",
        //   name: "XXXXX",
        //   id: 2,
        //   type: "Maintainer",
        //   info: "filecoin mining pool rust-fil-sector-builder",
        //   xingNum: 1,
        //   time: "Updata 8 days ago",
        // },
        // {
        //   groupType: "Z",
        //   name: "XXXXX",
        //   id: 3,
        //   type: "Maintainer",
        //   info: "filecoin mining pool rust-fil-sector-builder",
        //   xingNum: 2,
        //   time: "Updata 8 days ago",
        // },
      ],
    };
  },
  methods: {},
  async created() {
    let account = Principal.fromText(TEST_USER);
    let getUserInfoRes = await manageCanister.getUserInfo(account);

    if (getUserInfoRes.Ok) {
      let currentTime = BigInt(new Date().getTime()) / BigInt(1000);

      for (let i = 0; i < getUserInfoRes.Ok.groups.length; i++) {
        let getLogRes = await manageCanister.getLog(
          account,
          getUserInfoRes.Ok.groups[i][1].id,
          1
        );

        console.log(getLogRes)

        for (let j = 0; j < getLogRes.length; j++) {
          for (let k = 0; k < getLogRes[j].length; k++) {
            if (getLogRes[j][k][0].toString() == TEST_USER) {
              let duration = parseInt(
                Number(
                  currentTime - BigInt(getLogRes[j][k][1]) / BigInt(1000000000)
                )
              );
              let create_time = "";
              if (duration >= 86400) {
                create_time = ` ${parseInt(duration / 86400)} day ago`;
              } else if (duration >= 3600) {
                create_time = `${parseInt(duration / 3600)} hour ago`;
              } else if (duration >= 60) {
                create_time = `${parseInt(duration / 60)} min ago`;
              } else {
                create_time = `${duration} s ago`;
              }

              let fromaddress = "";
              if ("UpdateGroup" in getLogRes[j][k][2]) {
                fromaddress = getLogRes[j][k][2].UpdateGroup[1];
              }
              if ("UpdateProject" in getLogRes[j][k][2]) {
                fromaddress = getLogRes[j][k][2].UpdateProject[2];
              }
              if ("UpdateProjectCanister" in getLogRes[j][k][2]) {
                fromaddress = getLogRes[j][k][2].UpdateProjectCanister[2];
              }
              this.activeList.push({
                name: getLogRes[j][k][0].toString(),
                toname: "",
                fromaddress: fromaddress,
                toaddress: "",
                commitNum: "",
                time: create_time,
              });
            }
          }

          for (
            let v = 0;
            v < getUserInfoRes.Ok.groups[i][1].projects.length;
            v++
          ) {
            let duration = parseInt(
              Number(
                currentTime -
                  BigInt(
                    getUserInfoRes.Ok.groups[i][1].projects[v][1].create_time
                  )
              ) / 1000
            );

            let create_time = "0 s ago";
            if (duration >= 86400) {
              create_time = `create ${parseInt(duration / 86400)} day ago`;
            } else if (duration >= 3600) {
              create_time = `create ${parseInt(duration / 3600)} hour ago`;
            } else if (duration >= 60) {
              create_time = `create ${parseInt(duration / 60)} min ago`;
            } else {
              create_time = `create ${duration} s ago`;
            }
            this.projectList.push({
              groupType: "",
              name: getUserInfoRes.Ok.groups[i][1].projects[v][1].name,
              id: getUserInfoRes.Ok.groups[i][1].projects[v][1].id,
              type: "Maintainer",
              info: getUserInfoRes.Ok.groups[i][1].projects[v][1].description,
              xingNum: 2,
              time: create_time,
            });
          }
        }
      }
    }
  },
};
</script>
