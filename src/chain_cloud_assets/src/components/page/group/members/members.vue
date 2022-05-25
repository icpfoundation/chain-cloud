<style scoped>
.app {
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
  background: #FFFFFF;
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
  color: #1776FF;
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
  background: #1776FF;
  border: 0.01rem solid #1776FF;
  color: #FFFFFF;
}

.search {
  width: 100%;
  height: 1.38rem;
  background: #FFFFFF;
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
  border-bottom: 0.01rem solid #E6E6E6;
}

.actionName {
  font-size: 0.16rem;
  color: #252B3A;
}

.contentBox {
  height: 6rem;
  width: 100%;
  background: #FAFAFA;
  border: 0.01rem solid #E6E6E6;
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
  border-bottom: 0.01rem solid #EBEBEB;
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
  justify-content: space-between;
}

.tableItem:hover {
  background: #FAFAFA;
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
  color: #48C982;
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
  background: #DC5050;
  border-radius: 0.04rem;
  border: 0.01rem solid #DC5050;
  text-align: center;
  line-height: 0.32rem;
  cursor: pointer;
  font-size: 0.13rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
}

.leaveStop {
  background: #F2F2F2;
  border-radius: 0.04rem;
  border: 0.01rem solid #D9D9D9;
  color: #CCCCCC;
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
      <span class="titlePath">Group1 / Project group 001 / Members</span>
    </div>
    <div class="head">
      <div class="headLeft">
        <span>Invite members to</span>
        <span class="headLeftName"></span>
      </div>
      <div class="headRight">
        <div class="cel buttonCom">Cancel</div>
        <div class="add buttonCom">Add to group</div>
      </div>
    </div>
    <div class="search">
      <div class="searchItem">
        <span>Uername or email address</span>
        <Input placeholder="Search for members by name, username, or email" suffix="ios-search"
          style="width:4.4rem;margin:0.1rem 0" :clearable="true" @keyup.enter.native="searchFun($event)"
          @on-clear="searchFun" />
        <div class="searchItemDec">Search for members by name, username, or email, or invite new ones using their email
          address.</div>
      </div>
      <div class="searchItem">
        <span>Select a role</span>
        <Select v-model="roleValue" style="width:4.4rem;margin:0.1rem 0">
          <Option v-for="(item, index) in roleList" :value="item.value" :key="index">{{ item.label }}</Option>
        </Select>
        <div class="searchItemDec">Search for members by name, username, or email, or invite new ones using their email
          address.</div>
      </div>
      <div class="searchItem">
        <span>Uername or email address</span>
        <DatePicker :clearable="false" format="yyyy-MM-dd" type="date" placement="bottom-end" placeholder="YYYY-MM-DD"
          style="width:4.4rem;margin:0.1rem 0">
        </DatePicker>
        <div class="searchItemDec">On this date, the member(s) will automatically lose access to this group and all of
          its projects.</div>
      </div>
    </div>
    <div class="content">
      <div class="leftBoxName">Existing members</div>
      <div class="contentBox">
        <div class="action">
          <div class="actionName">Members with access to Project Group 1</div>
          <div class="actionSearch">
            <Input placeholder="search" suffix="ios-search" style="width:2rem;margin-right:0.2rem" :clearable="true"
              @keyup.enter.native="searchFun($event)" @on-clear="searchFun" />
            <Select v-model="nameValue" style="width:2rem" placeholder="name">
              <Option v-for="(item, index) in nameList" :value="item.value" :key="index">{{ item.label }}</Option>
            </Select>
          </div>
        </div>
        <div class="table">
          <div class="tableItem" v-for="(item, index) in tableData.tableList" :key="index">
            <div class="itemWidth1">
              <img src="../../../../../assets/chain_cloud/group/pic_avatar01@2x.png" alt="" class="pepleImg">
              <div class="groupName">
                <div class="groupNameTop">
                  <span>{{ item.name }}</span>
                  <div class="toName">{{ item.toName }}</div>
                  <div class="meProject" v-if="item.isMe">It’s you</div>
                </div>
                <div class="groupNameInfo">
                  <span>Given access 3 years ago </span>
                  <div class="dot"></div>
                  <span>Expires in over 9 years</span>
                </div>
              </div>
            </div>
            <div class="itemWidth2">
              <Select v-model="item.nameValue" style="width:1rem;margin-right:0.2rem" placeholder="name">
                <Option v-for="(item, index) in nameList" :value="item.value" :key="index">{{ item.label }}</Option>
              </Select>
              <div class="leave" :class="{ leaveStop: item.isMe }">leave</div>
            </div>
          </div>
        </div>
         <div class="pageStyle">
          <Page v-if="tableData.total > 0" :total="tableData.total" :current="tableData.page" show-total
            :page-size="tableData.pageSize" size="small" @on-change="headPageFun" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      roleValue: '1',
      roleList: [
        {
          value: '1',
          label: 'Guest'
        },
        {
          value: '2',
          label: 'Reporter'
        },
        {
          value: '3',
          label: 'Developer'
        },
        {
          value: '4',
          label: 'Maintainer'
        }
      ],
      nameValue: "0",
      nameList: [
        {
          value: '1',
          label: 'Guest'
        },
        {
          value: '2',
          label: 'Reporter'
        },
        {
          value: '3',
          label: 'Developer'
        },
        {
          value: '4',
          label: 'Maintainer'
        }
      ],
      tableData: {
        tableList: [
          {
            name: "yong",
            groupInfo: "go-statemachine",
            time: "18 days ago",
            toName: "@shanshan",
            size: 556565,
            isMe: true,
            nameValue: "1"
          },
          {
            name: "yong1",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565,
            isMe: false,
            nameValue: "2"
          },
          {
            name: "yong2",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565,
            isMe: false,
            nameValue: "3"
          },
          {
            name: "yong3",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565,
            isMe: false,
            nameValue: "3"
          },
          {
            name: "yong4",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565,
            isMe: false,
            nameValue: "4"
          },
        ],
        total: 5,
        page: 1,
        pageSize: 3
      }
    }
  },
  methods: {
    searchFun() {
      this.$Notice.info({
        title: "暂无搜索",
        background: true,
        duration: 3
      });
    },
        headPageFun(value) {
      this.$Notice.info({
        title: "暂无后台数据",
        background: true,
        duration: 3
      });
    }
  },
  created() {
  },
}
</script>
