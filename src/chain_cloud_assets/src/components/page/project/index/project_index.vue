<style scoped>
.app {
  width: 100%;
  background: white;
}

.content {
  width: 1200px;
  margin: 0 auto;
}

.head {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 44px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  margin-bottom: 20px;
}

.addGroup {
  width: 115px;
  height: 32px;
  background: #1776FF;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #FFFFFF;
  cursor: pointer;
}
.addGroup img{
  width: 16px;
  height: 16px;
}
.line {
  width: 100%;
  height: 1px;
  background: #333333;
  margin: 40px 0  20px 0;
}

.table {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
}

.tableItem {
  width: 560px;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  cursor: pointer;
}
.tableItem:hover{
background: #F8F8F8;
}
.tableImg {
  width: 60px;
  height: 60px;
  background: #558678;
  border-radius: 8px;
  border: 1px solid #E6E6E6;
  margin-right: 20px;
  margin-top: 4px;
}

.tableInfo {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tableItemName {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
}

.tableItemBy {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  margin-top: 2px;
}

.tableItemBy img {
  width: 16px;
  height: 16px;
  margin-left: 5px;
}

.tableItemDec {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  margin-top: 2px;
}

.tableItemDiv {
  display: flex;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #CCCCCC;
  margin-top: 4px;
  align-items: center;
  width: 130px;
  justify-content: center;
}
.pageStyle {
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
background: #FAFAFA;
height: 72px;
align-items: center;
}
.tableImg img{
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="app">
    <div class="content">
      <div class="head">
        <span>Projects</span>
        <div class="addGroup" @click="addFun">
          <img src="../../../../../assets/chain_cloud/group/icon_add_white@2x (1).png" alt="">
          <span>New Project</span>
        </div>
      </div>
      <div class="table">
        <div class="tableItem"  v-for="(item, index) in tableData.tableList" :key="index" @click="toProjectFun(item)">
          <div class="tableImg">
            <img src="../../../../../assets/chain_cloud/teamscan/icon_projct@2x.png" alt="">
          </div>
          <div class="tableInfo">
            <span class="tableItemName">{{ item.name }}</span>
            <div class="tableItemBy">
              <span>{{item.by}}</span>
              <img src="../../../../../assets/chain_cloud/group/icon_check@2x.png" alt="">
            </div>
            <div class="tableItemDec">{{ item.dec }}</div>
            <div class="tableItemDiv">{{item.type}}</div>
          </div>
        </div>
      </div>
       <div class="pageStyle">
          <Page v-if="tableData.total > 0" :total="tableData.total" :current="tableData.page" show-total
            :page-size="tableData.pageSize" size="small" @on-change="headPageFun" />
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       tableData: {
        tableList: [
          {
            name: "yong1",
            by: "By imgbot",
            dec: "A GitHub app that optimizes your images",
            type: "Recommended",
          },
           {
            name: "yong2",
            by: "By imgbot",
            dec: "A GitHub app that optimizes your images",
            type: "Recommended",
          },
          {
            name: "yong3",
            by: "By imgbot",
            dec: "Daily,automatic backups of your repos and metadata. Restore your backups with metadata in seconds + Sync to your S3 or Azure",
            type: "Recommended",
          },
         {
            name: "yong4",
            by: "By imgbot",
            dec: "A GitHub app that optimizes your images",
            type: "Recommended",
          },
         {
            name: "yong5",
            by: "By imgbot",
            dec: "A GitHub app that optimizes your images",
            type: "Recommended",
          },
        ],
        total: 5,
        page: 1,
        pageSize: 3
      }
    }
  },
  methods: {
     headPageFun(value) {
      this.$Notice.info({
        title: "暂无后台数据",
        background: true,
        duration: 3
      });
    },
    addFun(){
      this.$router.push({
        name:"project_add"
      })
    },
    toProjectFun(item){
      this.$router.push({
        name:"project"
      })
    }
  },
  created() {
  },
}
</script>
