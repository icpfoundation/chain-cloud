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
  cursor: pointer;
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
  align-items: flex-end;
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
.tableItemgroupTimeItem {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.delete {
  width: 0.8rem;
  height: 0.32rem;
  background: #dc5050;
  border-radius: 0.04rem;
  border: 0.01rem solid #dc5050;
  text-align: center;
  line-height: 0.32rem;
  cursor: pointer;
  font-size: 0.13rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
}
.projectdescription {
  width: 60%;
  height: 40%;
  overflow: hidden;
  bottom: 10%;
  position: absolute;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>

<template>
  <div class="app">
    <div class="content">
      <div class="comItem">
        <div class="table">
          <div
            class="tableItem"
            v-for="(item, index) in projectList"
            :key="index"
            @click="getProjectInfo(item)"
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
              <span class="projectdescription">{{ item.info }}</span>
            </div>
            <div class="tableItemgroupTime">
              <div class="tableItemgroupTimeTop">
                <div class="tableItemgroupTimeItem">
                  <img
                    src="../../../../assets/chain_cloud/teamscan/icon_xing_s@2x.png"
                    alt=""
                  />
                  <span>{{ item.xingNum }}</span>
                </div>
                <div class="tableItemgroupTimeItem">
                  <img
                    src="../../../../assets/chain_cloud/teamscan/icon_branch@2x.png"
                    alt=""
                  />
                  <span>{{ item.branchNum }}</span>
                </div>
                <div class="tableItemgroupTimeItem" v-if="item.isdelet">
                  <img
                    src="../../../../assets/chain_cloud/teamscan/icon_delete@2x.png"
                    alt=""
                  />
                </div>
              </div>
              <span>{{ item.time }}</span>
              <div class="delete" @click.stop="deleteGroup(item)">delete</div>
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
      projectList: [
        // {
        //   groupType: "G",
        //   name: "XXXXX",
        //   id: 1,
        //   type: "Maintainer",
        //   info: "filecoin mining pool rust-fil-sector-builder",
        //   xingNum: 0,
        //   time: "Updata 8 days ago",
        //   branchNum: 0,
        //   isdelet: false,
        // },
        // {
        //   groupType: "F",
        //   name: "XXXXX",
        //   id: 2,
        //   type: "Maintainer",
        //   info: "filecoin mining pool rust-fil-sector-builder",
        //   xingNum: 1,
        //   time: "Updata 8 days ago",
        //   branchNum: 1,
        //   isdelet: true,
        // },
        // {
        //   groupType: "Z",
        //   name: "XXXXX",
        //   id: 3,
        //   type: "Maintainer",
        //   info: "filecoin mining pool rust-fil-sector-builder",
        //   xingNum: 2,
        //   time: "Updata 8 days ago",
        //   branchNum: 2,
        //   isdelet: false,
        // },
      ],
    };
  },
  methods: {
    getProjectInfo(item) {
      let manageCanister = this.getManageCanister();
      if (!manageCanister) {
        throw "No login account";
      }
      let account = manageCanister.identity;
      this.$router.push({
        name: "project",
        params: {
          user: account.toString(),
          groupId: item.groupId,
          projectId: item.id,
        },
      });
    },
    async projectInfo() {
      let manageCanister = this.getManageCanister();
      if (!manageCanister) {
        throw "No login account";
      }
      let account = manageCanister.identity;
      let getUserInfoRes = await manageCanister.getUserInfo(account);

      if (getUserInfoRes.Ok) {
        let currentTime = BigInt(new Date().getTime());
        let imageRes = [];
        for (let i = 0; i < getUserInfoRes.Ok.groups.length; i++) {
          for (
            let j = 0;
            j < getUserInfoRes.Ok.groups[i][1].projects.length;
            j++
          ) {
            if (
              "Public" in
              getUserInfoRes.Ok.groups[i][1].projects[j][1].visibility
            ) {
              continue;
            }
            let duration = parseInt(
              Number(
                currentTime -
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
            try {
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

              // imageData = new TextDecoder().decode(Uint8Array.from(imageData));
              this.projectList.push({
                groupId: getUserInfoRes.Ok.groups[i][1].id,
                groupType: "",
                name: getUserInfoRes.Ok.groups[i][1].projects[j][1].name,
                id: getUserInfoRes.Ok.groups[i][1].projects[j][1].id,
                type: "Maintainer",
                info: getUserInfoRes.Ok.groups[i][1].projects[j][1].description,
                xingNum: 0,
                time: create_time,
                imageData: "",
              });
            } catch (err) {
              this.projectList.push({
                groupId: getUserInfoRes.Ok.groups[i][1].id,
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
        }
        Promise.all(imageRes).then((res) => {
          for (let i = 0; i < res.length; i++) {
            let imageData = new TextDecoder().decode(
              Uint8Array.from(res[i][0])
            );
            this.projectList[res[i][1]].imageData = imageData;
          }
        });
      }
    },
    async deleteGroup(item) {
      let manageCanister = this.getManageCanister();
      if (!manageCanister) {
        throw "No login account";
      }
      let removeRes = await manageCanister.removeProject(
        manageCanister.identity,
        item.groupId,
        item.id
      );
      if ("Ok" in removeRes) {
        this.$Notice.info({
          title: "Deletion succeeded",
          background: true,
          duration: 3,
        });
        for (let i = 0; i < this.projectList.length; i++) {
          if (this.projectList[i].id == item.id) {
            this.projectList.splice(i, 1);
          }
        }
      } else {
        this.$Notice.info({
          title: "Delete failed: " + removeRes.Err,
          background: true,
          duration: 3,
        });
      }
    },
  },
  computed: {
    ...mapGetters(["getManageCanister"]),
  },
  async created() {
    await this.projectInfo();
  },
};
</script>
