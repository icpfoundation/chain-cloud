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
  align-items: center;
}

.tableItemgroupTimeItem {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #666666;
  margin-left: 10px;
}

.tableItemgroupTimeItem img {
  width: 24px;
  height: 24px;
}

.groupContentInfo {
  justify-items: center;
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
            @click="getGroupInfo(item)"
          >
            <div class="grouptype" style="overflow: hidden">
              <img
                :src="item.imageData"
                alt=""
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="groupContent" :class="{ groupContentInfo: item.info }">
              <span class="groupName">{{ item.name }}</span>
              <span>{{ item.info }}</span>
            </div>
            <div class="tableItemgroupTime">
              <div class="tableItemgroupTimeItem">
                <img
                  src="../../../../assets/chain_cloud/teamscan/icon_shuqian@2x.png"
                  alt=""
                />
                <span>{{ item.shuqian }}</span>
              </div>
              <div class="tableItemgroupTimeItem">
                <img
                  src="../../../../assets/chain_cloud/teamscan/icon_peoples@2x.png"
                  alt=""
                />
                <span>{{ item.peoplese }}</span>
              </div>

              <div class="tableItemgroupTimeItem">
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
              </div>
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
        //   info: "filecoin mining pool rust-fil-sector-builder",
        //   shuqian: 1,
        //   peoplese: 1,
        //   xingNum: 0,
        // },
        // {
        //   groupType: "F",
        //   name: "XXXXX",
        //   id: 2,
        //   info: "filecoin mining pool rust-fil-sector-builder",
        //   shuqian: 2,
        //   peoplese: 2,
        //   xingNum: 1,
        // },
        // {
        //   groupType: "Z",
        //   name: "XXXXX",
        //   id: 3,
        //   info: "filecoin mining pool rust-fil-sector-builder",
        //   shuqian: 3,
        //   peoplese: 3,
        //   xingNum: 2,
        // },
      ],
    };
  },
  computed: {
    ...mapGetters(["getManageCanister"]),
  },
  methods: {
    getGroupInfo(item) {
      let manageCanister = this.getManageCanister();
      if (!manageCanister) {
        throw "No login account";
      }
      let account = manageCanister.identity;
      this.$router.push({
        name: "group",
        params: {
          user: account.toString(),
          groupId: item.id,
        },
      });
    },
    async groupInfo() {
      let manageCanister = this.getManageCanister();
      if (!manageCanister) {
        throw "No login account";
      }
      let account = manageCanister.identity;
      let getUserInfoRes = await manageCanister.getUserInfo(account);
      for (let i = 0; i < getUserInfoRes.Ok.relation_project.length; i++) {
        console.log("getUserInfoRes");
        let user = getUserInfoRes.Ok.relation_project[0][0];
        //
        for (
          let j = 0;
          j < getUserInfoRes.Ok.relation_project[i][1].length;
          j++
        ) {
          try {
            let res = await manageCanister.getGroupInfo(
              user,
              getUserInfoRes.Ok.relation_project[i][1][j].group_id
            );

            this.projectList.push({
              groupType: "Z",
              name: res.Ok[0].name,
              id: res.Ok[0].id,
              info: res.Ok[0].description,
              shuqian: 0,
              peoplese: res.Ok[0].members.length,
              xingNum: 0,
              imageData: "",
            });
          } catch (err) {
            console.log("err:", err);
          }
        }
      }

      if (getUserInfoRes.Ok) {
        let groupImage = [];
        for (let i = 0; i < getUserInfoRes.Ok.groups.length; i++) {
          try {
            groupImage.push(
              (async function (len) {
                let imageData = await manageCanister.getGroupImage(
                  account,
                  getUserInfoRes.Ok.groups[i][1].id
                );
                return [imageData, len];
              })(this.projectList.length)
            );

            //imageData = new TextDecoder().decode(Uint8Array.from(imageData));
            this.projectList.push({
              groupType: "Z",
              name: getUserInfoRes.Ok.groups[i][1].name,
              id: getUserInfoRes.Ok.groups[i][1].id,
              info: getUserInfoRes.Ok.groups[i][1].description,
              shuqian: 0,
              peoplese: getUserInfoRes.Ok.groups[i][1].members.length,
              xingNum: 0,
              imageData: "",
            });
          } catch (err) {
            this.projectList.push({
              groupType: "Z",
              name: getUserInfoRes.Ok.groups[i][1].name,
              id: getUserInfoRes.Ok.groups[i][1].id,
              info: getUserInfoRes.Ok.groups[i][1].description,
              shuqian: 0,
              peoplese: getUserInfoRes.Ok.groups[i][1].members.length,
              xingNum: 0,
              imageData: "",
            });
          }

          // this.projectList.push({
          //   groupType: "Z",
          //   name: getUserInfoRes.Ok.groups[i][1].name,
          //   id: getUserInfoRes.Ok.groups[i][1].id,
          //   info: getUserInfoRes.Ok.groups[i][1].description,
          //   shuqian: 3,
          //   peoplese: getUserInfoRes.Ok.groups[i][1].members.length,
          //   xingNum: 2,
          // });
        }
        Promise.all(groupImage).then((res) => {
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
      let removeRes = await manageCanister.removeGroup(
        manageCanister.identity,
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
  async created() {
    await this.groupInfo();
  },
};
</script>
