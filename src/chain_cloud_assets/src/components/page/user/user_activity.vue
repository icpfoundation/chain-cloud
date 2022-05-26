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
  border: 1px solid #E6E6E6;
  overflow: hidden;
  overflow-y: auto;
}

.tableItem {
  width: 100%;
  height: 100px;
  padding: 20px;
  border-bottom: 1px solid #EBEBEB;
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
  color: #1776FF;
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
</style>

<template>
  <div class="app">
    <div class="content">
      <div class="comItem">
        <div class="table">
          <div class="tableItem" v-for="(item, index) in activeList" :key="index">
            <img src="../../../../assets/chain_cloud/teamscan/icon_connect@2x (1).png" alt="" class="connect">
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeList: [
        {
          name: "XXX",
          toname: "@haoshanshan",
          fromaddress: "osp-base-rust-lastest-osp-base-rust-lastest-",
          toaddress: "Group/lotuss/",
          commitNum: "372bb51",
          time: "18 days ago"
        },
        {
          name: "XXX",
          toname: "@haoshanshan",
          fromaddress: "osp-base-rust-lastest-osp-base-rust-lastest-",
          toaddress: "Group/lotuss/",
          commitNum: "372bb51",
          time: "18 days ago"
        },
        {
          name: "XXX",
          toname: "@haoshanshan",
          fromaddress: "osp-base-rust-lastest-osp-base-rust-lastest-",
          toaddress: "Group/lotuss/",
          commitNum: "372bb51",
          time: "18 days ago"
        },
        {
          name: "XXX",
          toname: "@haoshanshan",
          fromaddress: "osp-base-rust-lastest-osp-base-rust-lastest-",
          toaddress: "Group/lotuss/",
          commitNum: "372bb51",
          time: "18 days ago"
        }
      ],
    }
  },
  methods: {
  },
  created() {
  },
}
</script>
