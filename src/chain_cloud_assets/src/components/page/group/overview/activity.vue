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

.content {
  background: white;
  height: 7.8rem;
  background: #FFFFFF;
  border-radius: 0.08rem;
  padding: 0.2rem;
}

.actiontab {
  display: flex;
  align-items: center;
}

.actionitem {
  padding: 0 0.1rem;
  font-size: 0.16rem;
  font-weight: 600;
  color: #333333;
  height: 0.32rem;
  margin-right: 0.1rem;
  line-height: 0.32rem;
  cursor: pointer;
  border-radius: 0.04rem;
}

.chooseClass {
  background: rgba(23, 118, 255, 0.1);
  color: #1776FF;
}

.contentBox {
  height: 6.4rem;
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
  height: 1rem;
  display: flex;
  align-items: center;
    border-bottom: 0.01rem solid #EBEBEB;
}

.itemWidth1 {
  width: 12rem;
  height: 1rem;
  display: flex;
  padding: 0 0.2rem;
  padding-top: 0.18rem;
}

.pepleImg {
  width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.1rem;
}

.itemWidth2 {
  flex: 1;
  height: 1rem;
  display: flex;
  justify-content: flex-end;
  font-size: 0.14rem;
  font-weight: 400;
  color: #666666;
  padding: 0 0.2rem;
   padding-top: 0.18rem;
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
}

.groupNameInfo img {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.1rem;
}

.groupNameInfoColor {
  color: #1776FF;
  margin: 0 0.1rem;
}

.groupTime {
  font-size: 12px;
  font-weight: 400;
  color: #333333;
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
      <div class="titleName">Activity</div>
      <span class="titlePath">Group1 / Project group 001 / Activity</span>
    </div>
    <div class="content">
      <div class="actiontab">
        <div class="actionitem" v-for="(item, index) in tabList" :key="index" :class="{ chooseClass: item.select }"
          @click="chooseFun(item, index)">{{ item.name }}</div>
      </div>
      <div class="contentBox">
        <div class="table">
          <div class="tableItem" v-for="(item, index) in tableData.tableList" :key="index">
            <div class="itemWidth1">
              <img src="../../../../../assets/chain_cloud/group/pic_avatar01@2x.png" alt="" class="pepleImg">
              <div class="groupName">
                <div class="groupNameTop">
                  <span>{{ item.name }}</span>
                  <div class="toName">{{ item.toName }}</div>
                </div>
                <div class="groupNameInfo">
                  <img src="../../../../../assets/chain_cloud/group/icon_connect@2x.png" alt="">
                  <span>Pushed to branch</span>
                  <span class="groupNameInfoColor">osp-base-rust-lastest</span>
                  <span>at</span>
                  <span class="groupNameInfoColor">Group/lotus</span>
                </div>
                <div class="groupTime">{{ item.size }} update</div>
              </div>
            </div>
            <div class="itemWidth2">{{ item.time }}</div>
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
      tabList: [
        {
          name: "All",
          select: true
        },
        {
          name: "Push events",
          select: false
        },
        {
          name: "Merge events",
          select: false
        },
        {
          name: "Issue events",
          select: false
        },
        {
          name: "Comments",
          select: false
        },
        {
          name: "Team",
          select: false
        },
      ],
      tableData: {
        tableList: [
          {
            name: "yong",
            groupInfo: "go-statemachine",
            time: "18 days ago",
            toName: "@shanshan",
            size: 556565
          },
          {
            name: "yong1",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565
          },
          {
            name: "yong2",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565
          },
          {
            name: "yong3",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565
          },
          {
            name: "yong4",
            groupInfo: "go-statemachine",
            time: "17 days ago",
            toName: "@shanshan",
            size: 556565
          },
        ],
        total: 5,
        page: 1,
        pageSize: 3
      }
    }
  },
  methods: {
    chooseFun(item, index) {
      this.tabList.forEach(element => {
        element.select = false
      })
      item.select = true;
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
