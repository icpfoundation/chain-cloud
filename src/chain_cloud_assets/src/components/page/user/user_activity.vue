<style scoped>
.app {
  width: 100%;
}

.content {
  display: flex;
  justify-content: space-between;
}

.comItem {
  width: 100%;
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
}

.mergestyle {
  font-size: 12px;
  color: #1776ff;
  margin: 0 10px;
}

.tableContentBottom {
  font-size: 12px;
  color: #333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.tableItemTime {
  font-size: 12px;
  color: #666666;
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>

<template>
  <div class="app">
    <div class="content">
      <div class="comItem">
        <div class="table">
          <el-empty
            :image-size="50"
            description="No data"
            v-if="activeList.length == 0"
          >
          </el-empty>
          <div
            v-else
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
                <span>operation</span>
                <span class="mergestyle">{{ item.fromaddress }}</span>
                <span>at</span>
                <span class="mergestyle">{{ item.toaddress }}</span>
              </div>
              <div class="tableContentBottom">data:{{ item.commitNum }}</div>
            </div>
            <div class="tableItemTime">{{ item.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import { Principal } from "@dfinity/principal";
import { mapGetters } from "vuex";
import { Loading } from "element-ui";
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
    };
  },
  computed: {
    ...mapGetters(["getManageCanister"]),
  },
  methods: {},
  async mounted() {
    let manageCanister = this.getManageCanister();
    if (!manageCanister) {
      throw "No login account";
    }
    let account = manageCanister.identity;
    let activityInstance = Loading.service({
      target: ".table",
    });
    let getUserInfoRes = await manageCanister.getUserInfo(account);

    if (getUserInfoRes.Ok) {
      let currentTime = BigInt(new Date().getTime()) / BigInt(1000);
      let logRes = [];
      for (let i = 0; i < getUserInfoRes.Ok.groups.length; i++) {
        logRes.push(
          (async function () {
            let getLogRes = await manageCanister.getLog(
              account,
              getUserInfoRes.Ok.groups[i][1].id,
              1
            );
            return getLogRes;
          })()
        );
      }
      if (logRes.length == 0) {
        activityInstance.close();
      }
      Promise.all(logRes).then((getLogRes) => {
        for (let j = 0; j < getLogRes.length; j++) {
          for (let k = 0; k < getLogRes[j].length; k++) {
            for (let v = 0; v < getLogRes[j][k].length; v++) {
              if (getLogRes[j][k][v][0].toString() == account.toString()) {
                let duration = parseInt(
                  Number(
                    currentTime -
                      BigInt(getLogRes[j][k][v][1]) / BigInt(1000000000)
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
                let toaddress = "";
                let commitNum = getLogRes[j][k][v][3][0];
                if ("UpdateGroup" in getLogRes[j][k][v][2]) {
                  fromaddress = getLogRes[j][k][v][2].UpdateGroup[1];
                  toaddress = `groupId: ${getLogRes[j][k][v][2].UpdateGroup[0]}`;
                }
                if ("UpdateProject" in getLogRes[j][k][v][2]) {
                  fromaddress = getLogRes[j][k][v][2].UpdateProject[2];
                  toaddress = `groupId: ${getLogRes[j][k][v][2].UpdateProject[0]}, projectId:${getLogRes[j][k][v][2].UpdateProject[1]}`;
                }
                if ("UpdateProjectCanister" in getLogRes[j][k][v][2]) {
                  fromaddress = getLogRes[j][k][v][2].UpdateProjectCanister[2];
                  toaddress = `groupId: ${getLogRes[j][k][v][2].UpdateProjectCanister[0]}, projectId:${getLogRes[j][k][v][2].UpdateProjectCanister[1]}`;
                }
                this.activeList.push({
                  name: getLogRes[j][k][v][0].toString(),
                  toname: "",
                  fromaddress: fromaddress,
                  toaddress: toaddress,
                  commitNum: commitNum,
                  time: create_time,
                });
              }
            }
          }
        }
        activityInstance.close();
      });
    }
  },
};
</script>
