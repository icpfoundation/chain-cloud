<style scoped>
.app {
  width: 100%;
  background: white;
}

.content {
  width: 1200px;
  margin: 0 auto;

  position: relative;
}

.head {
  width: 1200px;

  align-items: center;
  justify-content: space-between;
  font-size: 44px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;

  margin: auto;
  position: absolute;
  bottom: 30%;
  margin-left: calc(50% - 600px);
}

.addGroup {
  width: 115px;
  height: 32px;
  background: #1776ff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  margin-top: 30px;
}
.addGroup img {
  width: 16px;
  height: 16px;
}

.line {
  width: 100%;
  height: 1px;
  background: #333333;
  margin: 40px 0 20px 0;
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
.tableItem:hover {
  background: #f8f8f8;
}
.tableImg {
  width: 60px;
  height: 60px;
  background: #558678;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
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
  border: 1px solid #cccccc;
  margin-top: 4px;
  align-items: center;
  width: 130px;
  justify-content: center;
}
.pageStyle {
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
  background: #fafafa;
  height: 72px;
  align-items: center;
}
.tableImg img {
  width: 100%;
  height: 100%;
}
.head_bg {
  position: relative;

  width: 100%;
  height: 8%;
}
.teamscan_top_bg {
  width: 100%;
}
</style>

<template>
  <div class="app">
    <div class="head_bg">
      <img
        src="../../../../../assets/chain_cloud/teamscan/teamscan_top_bg.png"
        alt=""
        class="teamscan_top_bg"
      />
      <div class="head">
        <div>
          <span>Projects</span>
        </div>

        <div class="addGroup" @click="addFun">
          <img
            src="../../../../../assets/chain_cloud/group/icon_add_white@2x (1).png"
            alt=""
          />

          <span>New Project</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="table">
        <div
          class="tableItem"
          v-for="(item, index) in tableData.tableList"
          :key="index"
          @click="toProjectFun(item)"
        >
          <div class="tableImg">
            <img :src="item.imageData" alt="" />
          </div>
          <div class="tableInfo">
            <span class="tableItemName">{{ item.name }}</span>
            <div class="tableItemBy">
              <span>{{ item.by }}</span>
              <img
                src="../../../../../assets/chain_cloud/group/icon_check@2x.png"
                alt=""
              />
            </div>
            <div class="tableItemDec">{{ item.dec }}</div>
            <div class="tableItemDiv">{{ item.type }}</div>
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
</template>
<script>
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import { Principal } from "@dfinity/principal";

export default {
  data() {
    return {
      tableData: {
        tableList: [],
        total: 0,
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
    addFun() {
      this.$router.push({
        name: "project_add",
      });
    },
    toProjectFun(item) {
      this.$router.push({
        name: "project",
        params: {
          user: item.user,
          groupId: item.groupId,
          projectId: item.projectId,
        },
      });
    },
  },
  async created() {
    let groupRes = await manageCanister.visibleProject();
    for (let i = 0; i < groupRes.length; i++) {
      for (let j = 0; j < groupRes[i].length; j++) {
        this.tableData.total = groupRes[i][j][2].projects.length;
        for (let k = 0; k < groupRes[i][j][2].projects.length; k++) {
          try {
            let imageData = await manageCanister.getProjectImage(
              groupRes[i][j][0],
              groupRes[i][j][1],
              groupRes[i][j][2].projects[k][1].id
            );

            imageData = new TextDecoder().decode(Uint8Array.from(imageData));

            this.tableData.tableList.push({
              name: groupRes[i][j][2].projects[k][1].name,
              by: groupRes[i][j][2].projects[k][1].create_by.toString(),
              dec: groupRes[i][j][2].projects[k][1].description,
              type: "Recommended",
              user: groupRes[i][j][0].toString(),
              groupId: groupRes[i][j][1],
              projectId: groupRes[i][j][2].projects[k][1].id,
              imageData: imageData,
            });
          } catch (err) {
            this.tableData.tableList.push({
              name: groupRes[i][j][2].projects[k][1].name,
              by: groupRes[i][j][2].projects[k][1].create_by.toString(),
              dec: groupRes[i][j][2].projects[k][1].description,
              type: "Recommended",
              user: groupRes[i][j][0].toString(),
              groupId: groupRes[i][j][1],
              projectId: groupRes[i][j][2].projects[k][1].id,
            });
          }
        }
      }
    }
  },
};
</script>
