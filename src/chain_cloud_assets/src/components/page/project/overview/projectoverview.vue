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
  height: 2.68rem;
  border-radius: 0.08rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headItem {
  width: 7.9rem;
  background: white;
  padding: 0.2rem;
  height: 2.68rem;
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

.line {
  width: 100%;
  height: 0.01rem;
  background: #ebebeb;
  margin: 0.2rem 0;
}

.idInfo {
  margin-top: 0.1rem;
  font-size: 0.14rem;
  font-weight: 400;
  color: #333333;
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
  height: 6.63rem;
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
  padding-bottom: 0.4rem;
  background: white;
  padding-bottom: 0.4rem;
}

.itemCom {
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
}

.tableItem {
  height: 0.8rem;
  display: flex;
  align-items: center;
  background: white;
  border-bottom: 0.01rem solid #ebebeb;
  justify-content: space-between;
  padding: 0 0.2rem;
}

.tableItem:hover {
  background: #fafafa;
}

.item1 {
  display: flex;
  align-items: center;
}

.item3 {
  width: 1.12rem;
  height: 0.32rem;
  border-radius: 0.04rem;
  border: 0.01rem solid #1776ff;
  font-size: 0.14rem;
  font-family: UbuntuMono-Regular, UbuntuMono;
  font-weight: 400;
  color: #1776ff;
  padding-left: 0.1rem;
  position: relative;
  line-height: 0.32rem;
}

.item3Sub {
  width: 0.31rem;
  height: 0.31rem;
  background: #1776ff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
}

.item3Sub img {
  width: 0.16rem;
  height: 0.16rem;
}

.leibie {
  width: 0.36rem;
  height: 0.36rem;
  border-radius: 0.04rem;
  margin-right: 0.1rem;
}

.groupName {
  height: 0.36rem;
  font-size: 0.16rem;
  font-weight: 500;
  color: #333333;
}

.groupNameInfo {
  font-size: 0.12rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  display: flex;
  align-items: center;
}

.groupNameInfoTime {
  font-weight: 400;
  color: #666666;
  margin-left: 0.02rem;
}

.groupNameTop {
  font-size: 0.16rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}

.contentBox {
  height: 4.95rem;
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
      <div class="titleName">Overview</div>
      <span class="titlePath">Project info / Chain-Cloud / Overview</span>
    </div>
    <div class="head">
      <div class="headItem">
        <div class="headItemTitle">Project info</div>
        <div class="headItemLog">
          <img
            src="../../../../../assets/chain_cloud/menu/pic_group_avatar@2x.png"
            alt=""
          />
          <span>{{ project.name }}</span>
        </div>
        <div class="line"></div>
        <div class="idInfo">
          <div class="idInfoTitle">Project ID</div>
          <span>{{ project.id }}</span>
        </div>
        <div class="idInfo">
          <div class="idInfoTitle">Link</div>
          <span>{{ project.gitURl }}</span>
        </div>
      </div>
      <div class="headItem">
        <div class="headItemTitle">Branchs info</div>
        <div class="headItemTable">
          <div class="headTableItem tab">
            <span>Branch number</span>
            <span>102</span>
          </div>
          <div class="headTableItem">
            <span>Active branch</span>
            <span>12</span>
          </div>
          <div class="headTableItem">
            <span>Stable branch</span>
            <span>12</span>
          </div>
          <div class="headTableItem">
            <span>Last modified</span>
            <span>12</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="contentTitle">Commits</div>
      <div class="contentBox">
        <div class="table">
          <div
            class="tableItem"
            v-for="(item, index) in tableData.tableList"
            :key="index"
          >
            <div class="item1">
              <img
                class="leibie"
                src="../../../../../assets/chain_cloud/group/pic_avatar01@2x.png"
                alt=""
              />
              <div class="groupName">
                <div class="groupNameTop">
                  <span>{{ item.projectName }}</span>
                </div>
                <div class="groupNameInfo">
                  <span>{{ item.author }}</span>
                  <span class="groupNameInfoTime">{{ item.time }}</span>
                </div>
              </div>
            </div>
            <div class="item3">
              <span>c24e6435</span>
              <div class="item3Sub">
                <img
                  src="../../../../../assets/chain_cloud/teamscan/icon_copy_white@2x.png"
                  alt=""
                />
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
import { Principal } from "@dfinity/principal";

export default {
  data() {
    return {
      project: {
        name: "Chain-Cloud",
        id: 0,
        gitURl: "http://github.com/icpfoundation/chain-cloud.git",
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
          {
            projectName: "tidy go.sum",
            author: "yongyu",
            time: "18 days ago",
          },
          {
            projectName: "tidy go.sum",
            author: "yongyu",
            time: "18 days ago",
          },
          {
            projectName: "tidy go.sum",
            author: "yongyu",
            time: "18 days ago",
          },
          {
            projectName: "tidy go.sum",
            author: "yongyu",
            time: "18 days ago",
          },
          {
            projectName: "tidy go.sum",
            author: "yongyu",
            time: "18 days ago",
          },
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

  async created() {
    let url = window.location.href;
    console.log(url);
    if (!this.$route.params) {
      throw "params  not found";
    }
    let account = Principal.fromText(this.$route.params.user);
    let groupId = BigInt(this.$route.params.groupId);
    let projectId = BigInt(this.$route.params.projectId);
    let getProjectRest = await manageCanister.getProjectInfo(
      account,
      groupId,
      projectId
    );
    if (getProjectRest.Err) {
      throw getProjectRest.Err;
    }

    if (getProjectRest.Ok.length > 0) {
      this.project.name = getProjectRest.Ok[0].name;
      this.project.id = getProjectRest.Ok[0].id;
      this.project.gitURl = getProjectRest.Ok[0].git_repo_url;
    }
  },
};
</script>
