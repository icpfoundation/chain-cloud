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
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 3rem;
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
  overflow: hidden;
  table-layout: fixed;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 6rem;
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
                <span class="toname" :title="item.name">{{ item.name }}</span>
                <span>{{ item.toname }}</span>
              </div>
              <div class="tableContentInfo">
                <span>operation</span>
                <span class="mergestyle">{{ item.fromaddress }}</span>
                <span>at</span>
                <span class="mergestyle">{{ item.toaddress }}</span>
              </div>
              <div class="tableContentBottom">data: {{ item.commitNum }}</div>
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
            <div class="grouptype" style="overflow: hidden">
              <img
                :src="item.imageData"
                alt=""
                style="width: 100%; height: 100%"
              />
            </div>
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
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["getManageCanister"]),
  },
  methods: {},
  async created() {
    let manageCanister = this.getManageCanister();
    if (!manageCanister) {
      throw "No login account";
    }
    let account = manageCanister.identity;
    let getUserInfoRes = await manageCanister.getUserInfo(account);

    if (getUserInfoRes.Ok) {
      let currentTime = BigInt(new Date().getTime()) / BigInt(1000);
      let currentTimeProject = BigInt(new Date().getTime());
      let imageRes = [];
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

        for (
          let j = 0;
          j < getUserInfoRes.Ok.groups[i][1].projects.length;
          j++
        ) {
          if (
            "Public" in getUserInfoRes.Ok.groups[i][1].projects[j][1].visibility
          ) {
            continue;
          }
          let duration = parseInt(
            Number(
              currentTimeProject -
                BigInt(
                  getUserInfoRes.Ok.groups[i][1].projects[j][1].create_time
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

          imageRes.push(
            (async function (len) {
              let imageData = await manageCanister.getProjectImage(
                account,
                getUserInfoRes.Ok.groups[i][1].id,
                getUserInfoRes.Ok.groups[i][1].projects[j][1].id
              );
              return [imageData, len];
            })(this.projectList.length)
          );

          this.projectList.push({
            groupType: "",
            name: getUserInfoRes.Ok.groups[i][1].projects[j][1].name,
            id: getUserInfoRes.Ok.groups[i][1].projects[j][1].id,
            type: "Maintainer",
            info: getUserInfoRes.Ok.groups[i][1].projects[j][1].description,
            xingNum: 0,
            time: create_time,
            imageData: "",
          });
        }
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
      });
      Promise.all(imageRes).then((res) => {
        for (let i = 0; i < res.length; i++) {
          let imageData = new TextDecoder().decode(Uint8Array.from(res[i][0]));
          this.projectList[res[i][1]].imageData = imageData;
        }
      });
    }
  },
};
</script>
