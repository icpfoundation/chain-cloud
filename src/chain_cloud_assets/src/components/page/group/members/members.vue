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

.head {
  width: 100%;
  height: 0.72rem;
  background: #ffffff;
  border-radius: 0.08rem;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headLeft {
  font-size: 0.16rem;
  font-weight: 600;
  color: #333333;
}

.headLeftName {
  color: #1776ff;
  margin-left: 0.1rem;
}

.headRight {
  display: flex;
  align-items: center;
}

.buttonCom {
  padding: 0 0.1rem;
  font-size: 0.13rem;
  font-weight: 500;
  height: 0.32rem;
  line-height: 0.32rem;
  border-radius: 0.04rem;
  cursor: pointer;
}

.cel {
  border: 0.01rem solid #818181;
  color: #818181;
  margin-right: 0.1rem;
}

.add {
  background: #1776ff;
  border: 0.01rem solid #1776ff;
  color: #ffffff;
}

.search {
  width: 100%;
  height: 1.38rem;
  background: #ffffff;
  border-radius: 0.08rem;
  margin-top: 0.01rem;
  display: flex;
  padding: 0.2rem;
}

.searchItem {
  margin-right: 0.4rem;
  font-size: 0.13rem;
  font-weight: 500;
  color: #333333;
  width: 4.4rem;
  display: flex;
  flex-direction: column;
}

.searchItemDec {
  font-size: 12px;
  color: #818181;
}

.content {
  width: 100%;
  height: 6.98rem;
  padding: 0.2rem;
  border-radius: 0.04rem;
  background: white;
  margin-top: 0.2rem;
}

.leftBoxName {
  font-size: 0.2rem;
  font-weight: 500;
  color: #333333;
}

.action {
  display: flex;
  justify-content: space-between;
  height: 0.72rem;
  padding: 0 0.2rem;
  align-items: center;
  background: white;
  border-bottom: 0.01rem solid #e6e6e6;
}

.actionName {
  font-size: 0.16rem;
  color: #252b3a;
}

.contentBox {
  height: 6rem;
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
  height: 0.8rem;
  border-bottom: 0.01rem solid #ebebeb;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  justify-content: space-between;
}

.tableItem:hover {
  background: #fafafa;
}

.pepleImg {
  width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.1rem;
}

.meProject {
  width: 0.54rem;
  height: 0.2rem;
  background: rgba(85, 200, 137, 0.2);
  border-radius: 0.04rem;
  font-size: 11px;
  font-weight: 500;
  color: #48c982;
  text-align: center;
  line-height: 0.2rem;
  margin-left: 0.1rem;
  font-weight: 400;
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
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
}

.dot {
  width: 0.02rem;
  height: 0.02rem;
  border-radius: 50%;
  background: #666666;
  margin: 0 0.1rem;
}

.groupName {
  height: 0.36rem;
}

.itemWidth1 {
  display: flex;
  padding: 0 0.2rem;
  align-items: center;
}

.leave {
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

.authority {
  width: 1rem;
  height: 0.32rem;
  border-radius: 0.04rem;
  border: 0.01rem solid #666666;
  text-align: center;
  line-height: 0.32rem;
  font-size: 0.13rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #666666;
  margin-right: 0.2rem;
}
.leaveStop {
  background: #f2f2f2;
  border-radius: 0.04rem;
  border: 0.01rem solid #d9d9d9;
  color: #cccccc;
}

.itemWidth2 {
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
      <div class="titleName">Members</div>
      <span class="titlePath">{{ group.name }} / Members</span>
    </div>
    <div class="head">
      <div class="headLeft">
        <span>Invite members to</span>
        <span class="headLeftName"></span>
      </div>
      <div class="headRight">
        <!-- <div class="cel buttonCom">Cancel</div> -->
        <div class="add buttonCom" @click="addGroupMember">Add to group</div>
      </div>
    </div>
    <div class="search">
      <div class="searchItem">
        <span>User identity</span>
        <Input
          placeholder="Search for members by name, username, or email"
          suffix="ios-search"
          style="width: 3.4rem; margin: 0.1rem 0"
          :clearable="true"
          @keyup.enter.native="searchFun($event)"
          @on-clear="searchFun"
          v-model="memeber['identity']"
        />
        <div class="searchItemDec">Input user identity</div>
      </div>
      <div class="searchItem">
        <span>User name</span>
        <Input
          placeholder="Search for members by name, username, or email"
          suffix="ios-search"
          style="width: 3.4rem; margin: 0.1rem 0"
          :clearable="true"
          @keyup.enter.native="searchFun($event)"
          @on-clear="searchFun"
          v-model="memeber['name']"
        />
        <div class="searchItemDec">Input a display name</div>
      </div>
      <div class="searchItem">
        <span>Select an authority</span>
        <Select v-model="roleValue" style="width: 3.4rem; margin: 0.1rem 0">
          <Option
            v-for="(item, index) in roleList"
            :value="item.value"
            :key="index"
            placeholder="please select"
            >{{ item.label }}</Option
          >
        </Select>
        <div class="searchItemDec">Choose a role permission</div>
      </div>
      <div class="searchItem">
        <span>Expiration time</span>
        <DatePicker
          :clearable="false"
          format="yyyy-MM-dd"
          type="date"
          placement="bottom-end"
          placeholder="YYYY-MM-DD"
          style="width: 3.4rem; margin: 0.1rem 0"
          @on-change="onChanage"
        >
        </DatePicker>
        <div class="searchItemDec">
          After this date,the member will automatically lose access to this
          group and all of its projects.
        </div>
      </div>
    </div>
    <div class="content">
      <div class="leftBoxName">Existing members</div>
      <div class="contentBox">
        <div class="action">
          <div class="actionName">Members with access to {{ group.name }}</div>
          <div class="actionSearch">
            <Input
              placeholder="search"
              suffix="ios-search"
              style="width: 2rem; margin-right: 0.2rem"
              :clearable="true"
              @keyup.enter.native="searchFun($event)"
              @on-clear="searchFun"
              v-model="searchName"
            />
            <Select v-model="nameValue" style="width: 2rem" placeholder="name">
              <Option
                v-for="(item, index) in nameList"
                :value="item.value"
                :key="index"
                placeholder="please select"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
        </div>
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
                  <div class="meProject" v-if="item.isMe">It’s you</div>
                </div>
                <div class="groupNameInfo">
                  <span>{{ item.time }} </span>
                  <div class="dot"></div>
                  <span>{{ item.expires }}</span>
                </div>
              </div>
            </div>
            <div class="itemWidth2">
              <!-- <Select
                v-model="item.nameValue"
                style="width: 1rem; margin-right: 0.2rem"
                placeholder="name"
              >
                <Option
                  v-for="(item, index) in nameList"
                  :value="item.value"
                  :key="index"
                  >{{ item.label }}</Option
                >
              </Select> -->
              <div class="authority">{{ item.authority }}</div>
              <div
                class="leave"
                :class="{ leaveStop: item.isMe }"
                @click="removeGroupMember(item)"
              >
                Leave
              </div>
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
</template>
<script>
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import { dateFormat } from "@/chain_cloud_assets/assets/js/util";
import { Principal } from "@dfinity/principal";
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      group: {
        name: "",
      },
      searchName: "",
      searchRes: [],
      memeber: {
        join_time: 0,
        name: "",
        authority: null,
        identity: "",
        expiration_time: [],
      },
      roleValue: "1",
      roleList: [
        {
          value: "1",
          label: "Reporter",
        },
        {
          value: "2",
          label: "Developer",
        },
        {
          value: "3",
          label: "Maintainer",
        },
      ],
      nameValue: "0",

      nameList: [
        {
          value: "1",
          label: "Reporter",
        },
        {
          value: "2",
          label: "Developer",
        },
        {
          value: "3",
          label: "Maintainer",
        },
      ],
      tableData: {
        tableList: [
          // {
          //   name: "yong",
          //   groupInfo: "go-statemachine",
          //   time: "Given access 3 years ago",
          //   toName: "@shanshan",
          //   size: 556565,
          //   isMe: true,
          //   nameValue: "1",
          //   expires: "Expires in over 9 years",
          // },
          // {
          //   name: "yong1",
          //   groupInfo: "go-statemachine",
          //   time: "Given access 3 years ago",
          //   toName: "@shanshan",
          //   size: 556565,
          //   isMe: false,
          //   nameValue: "2",
          //   expires: "Expires in over 9 years",
          // },
          // {
          //   name: "yong2",
          //   groupInfo: "go-statemachine",
          //   time: "Given access 3 years ago",
          //   toName: "@shanshan",
          //   size: 556565,
          //   isMe: false,
          //   nameValue: "3",
          //   expires: "Expires in over 9 years",
          // },
          // {
          //   name: "yong3",
          //   groupInfo: "go-statemachine",
          //   time: "Given access 3 years ago",
          //   toName: "@shanshan",
          //   size: 556565,
          //   isMe: false,
          //   nameValue: "3",
          //   expires: "Expires in over 9 years",
          // },
          // {
          //   name: "yong4",
          //   groupInfo: "go-statemachine",
          //   time: "Given access 3 years ago",
          //   toName: "@shanshan",
          //   size: 556565,
          //   isMe: false,
          //   nameValue: "4",
          //   expires: "Expires in over 9 years",
          // },
        ],
        total: 0,
        page: 1,
        pageSize: 3,
      },
    };
  },
  methods: {
    searchFun() {
      if (this.searchName == "") {
        this.tableData.tableList = this.searchRes;
        this.tableData.total = this.tableData.tableList.length;
      } else {
        let Res = [];
        this.tableData.tableList.forEach((element) => {
          if (element.name == this.searchName) {
            Res.push(element);
          }
        });
        if (Res.length == 0) {
          this.$Notice.info({
            title: "not found",
            background: true,
            duration: 3,
          });
        }
        this.tableData.tableList = Res;
        this.tableData.total = Res.length;
      }
    },
    headPageFun(value) {
      this.$Notice.info({
        title: "暂无后台数据",
        background: true,
        duration: 3,
      });
    },
    onChanage(date, dateString) {
      let expir = BigInt(new Date(date).getTime()) * BigInt(1000000);

      this.memeber.expiration_time = [expir];
    },

    async addGroupMember() {
      switch (this.roleValue) {
        case "1":
          this.memeber.authority = { Read: null };
          break;
        case "2":
          this.memeber.authority = { Write: null };
          break;
        case "3":
          this.memeber.authority = { Operational: null };
      }
      this.memeber.join_time = new Date().getTime();

      this.memeber.identity = Principal.fromText(this.memeber.identity);
      let canister = this.getManageCanister();
      if (!canister) {
        throw "Account not logged in";
      }
      let account = Principal.fromText(this.$route.params.user);
      let groupId = BigInt(this.$route.params.groupId);

      let addGroupMemberRes = await canister.addGroupMember(
        account,
        groupId,
        this.memeber
      );

      if ("Ok" in addGroupMemberRes) {
        this.$Notice.info({
          title: "Successfully added",
          background: true,
          duration: 3,
        });
        this.tableData.tableList = [];
        await this.getMember();
      } else {
        this.$Notice.info({
          title: "Add failed" + addGroupMemberRes.Err,
          background: true,
          duration: 3,
        });
      }
    },
    async getMember() {
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
      this.group.name = getGroupInfoRes.Ok[0].name;
      let currentTime = BigInt(new Date().getTime());
      for (let i = 0; i < getGroupInfoRes.Ok.length; i++) {
        this.tableData.total = getGroupInfoRes.Ok[0].members.length;
        for (let k = 0; k < getGroupInfoRes.Ok[0].members.length; k++) {
          let auth = "Reporter";
          if ("Read" in getGroupInfoRes.Ok[0].members[k][1].authority) {
          } else if ("Write" in getGroupInfoRes.Ok[0].members[k][1].authority) {
            auth = "Developer";
          } else {
            auth = "Maintainer";
          }
          let duration = parseInt(
            Number(
              currentTime -
                BigInt(getGroupInfoRes.Ok[0].members[k][1].join_time)
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

          let expires = "";
          if (getGroupInfoRes.Ok[0].members[k][1].expiration_time.length == 0) {
            expires = "forever";
          } else {
            expires = moment(
              new Date(
                Number(
                  getGroupInfoRes.Ok[0].members[k][1].expiration_time[0] /
                    BigInt(1000000)
                )
              )
            ).format("yyyy-MM-DD");
          }
          this.tableData.tableList.push({
            name: getGroupInfoRes.Ok[0].members[k][1].name,
            time: create_time,
            expires: expires,
            identity: getGroupInfoRes.Ok[0].members[k][1].identity,
            authority: auth,
          });
        }
      }
      this.searchRes = this.tableData.tableList;
    },
    async removeGroupMember(item) {
      let canister = this.getManageCanister();
      if (!canister) {
        throw "Account not logged in";
      }
      let account = Principal.fromText(this.$route.params.user);
      let groupId = BigInt(this.$route.params.groupId);

      let rmGroupMemberRes = await canister.removeGroupMember(
        account,
        groupId,
        item.identity
      );

      if ("Ok" in rmGroupMemberRes) {
        this.$Notice.info({
          title: "Removed successfully",
          background: true,
          duration: 3,
        });
        this.tableData.tableList = [];
        await this.getMember();
      } else {
        this.$Notice.info({
          title: "Remove failed",
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
    await this.getMember();
  },
};
</script>
