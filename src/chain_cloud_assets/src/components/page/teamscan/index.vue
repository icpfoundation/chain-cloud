<style scoped>
.app {
  margin-top: 100px;
  width: 100%;
  padding-bottom: 100px;
}

.content {
  width: 1200px;
  margin: 0 auto;
}

.search {
  width: 100%;
  display: flex;
}

.contentBox {
  margin-top: 10px;
  display: flex;
}

.left {
  width: 2.6rem;
  background: #ffffff;
  min-height: 100%;
  margin-right: 20px;
}

.typeList {
  width: 100%;
}

.typeTilte {
  font-size: 18px;
  font-weight: 600;
  color: #333333;
  width: 100%;
  height: 50px;
  margin-bottom: 4px;
  padding-left: 30px;
  line-height: 50px;
  padding: 0 10px;
}

.typeItem {
  width: 100%;
  height: 50px;
  margin-bottom: 4px;
  cursor: pointer;
  border-radius: 8px;
  padding-left: 20px;
  line-height: 50px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}

.typeItem:hover {
  background: #f8f8f8;
}

.line {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 10px;
}

.filterItem {
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filterItem img {
  width: 16px;
  height: 16px;
}

.right {
  flex: 1;
}

.rightItem {
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  color: #333333;
}

.itemTitle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}

.all {
  font-size: 14px;
  font-weight: 400;
  color: #1776ff;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.all img {
  width: 16px;
  height: 16px;
  margin-left: 5px;
}

.table {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.tableItem {
  width: 450px;
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
  font-size: 12px;
  font-weight: 400;
  color: #666666;
}
</style>

<template>
  <div class="app">
    <div class="content">
      <div class="search">
        <Select
          style="margin-right: 20px"
          v-model="roleValue"
          @on-query-change="inputFun"
          :clearable="true"
          allow-create
          not-found-text="no data"
          @on-clear="clearFun"
          :filterable="true"
          @on-change="selectFun"
          :label-in-value="true"
          placeholder="please select"
        >
          <Option
            v-for="(item, index) in tableData.tableList"
            @click.native="getMoreParams(item)"
            :value="item.value"
            :key="index"
            >{{ item.label }}</Option
          >
        </Select>
        <Button @click="searchFun" type="primary">search</Button>
      </div>
      <div class="contentBox">
        <div class="left">
          <div class="typeList" v-for="(item, index) in typeList" :key="index">
            <div class="typeTilte">{{ item.name }}</div>
            <div
              class="typeItem"
              v-for="(typeItem, typeIndex) in item.list"
              :key="typeIndex"
            >
              {{ typeItem.name }}
            </div>
          </div>
          <div class="line"></div>
          <div class="typeList">
            <div class="typeTilte">Filters</div>
            <div
              class="typeItem filterItem"
              v-for="(item, index) in filtersList"
              :key="index"
              @click="chooseFun(item)"
            >
              <span> {{ item.name }}</span>
              <img
                src="../../../../assets/chain_cloud/teamscan/icon_add_gray@2x.png"
                alt=""
                v-if="!item.select"
              />
              <img
                src="../../../../assets/chain_cloud/teamscan/icon_gou@2x.png"
                alt=""
                v-else
              />
            </div>
          </div>
        </div>
        <div class="right">
          <div class="rightItem" v-if="groupShow">
            <div class="itemTitle">
              <span>Groups</span>
              <span class="all" @click="toGroupFun">
                <span>View all</span>
                <img
                  src="../../../../assets/chain_cloud/teamscan/icon_arrow_right_blue@2x.png"
                  alt=""
                />
              </span>
            </div>
            <div class="table">
              <div
                class="tableItem"
                v-for="(item, index) in groupList"
                :key="index"
                @click="toGroupItemFun(item)"
              >
                <div class="tableImg"></div>
                <div class="tableInfo">
                  <span class="tableItemName">{{ item.name }}</span>
                  <div class="tableItemBy">
                    <span>{{ item.by }}</span>
                    <img
                      src="../../../../assets/chain_cloud/group/icon_check@2x.png"
                      alt=""
                    />
                  </div>
                  <div class="tableItemDec">{{ item.dec }}</div>
                  <div class="tableItemDiv">{{ item.type }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="rightItem" v-if="projectShow">
            <div class="itemTitle">
              <span>Projects</span>
              <span class="all" @click="toProjectFun">
                <span>View all</span>
                <img
                  src="../../../../assets/chain_cloud/teamscan/icon_arrow_right_blue@2x.png"
                  alt=""
                />
              </span>
            </div>
            <div class="table">
              <div
                class="tableItem"
                v-for="(item, index) in projectList"
                :key="index"
                @click="toProjectItemFun(item)"
              >
                <div class="tableImg"></div>
                <div class="tableInfo">
                  <span class="tableItemName">{{ item.name }}</span>
                  <div class="tableItemBy">
                    <span>{{ item.by }}</span>
                    <img
                      src="../../../../assets/chain_cloud/group/icon_check@2x.png"
                      alt=""
                    />
                  </div>
                  <div class="tableItemDec">{{ item.dec }}</div>
                  <div class="tableItemDiv">{{ item.type }}</div>
                </div>
              </div>
            </div>
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
      roleValue: null,
      typeList: [
        {
          name: "Types",
          id: 1,
          list: [
            {
              name: "Group",
              id: "group",
            },
            {
              name: "Project",
              id: "project",
            },
          ],
        },
        {
          name: "Categories",
          id: 2,
          list: [
            {
              name: "wallet",
              id: "wallet",
            },
            {
              name: "infrastructure",
              id: "infrastructure",
            },
            {
              name: "NFT",
              id: "nFT",
            },
            {
              name: "authentication",
              id: "authentication",
            },
            {
              name: "tools",
              id: "tools",
            },
            {
              name: "social",
              id: "social",
            },

            {
              name: "dapp",
              id: "dapp",
            },
            {
              name: "explorer",
              id: "explorer",
            },
            {
              name: "sns",
              id: "sns",
            },
            {
              name: "defi",
              id: "defi",
            },
            {
              name: "games",
              id: "games",
            },
            {
              name: "official",
              id: "official",
            },
            {
              name: "bridge",
              id: "bridge",
            },
            {
              name: "swap",
              id: "swap",
            },
            {
              name: "metaverse",
              id: "metaverse",
            },
          ],
        },
      ],
      selectList: [1],
      filtersList: [
        {
          name: "Free",
          select: true,
          id: 1,
        },
        {
          name: "Free Trials",
          select: false,
          id: 2,
        },
        {
          name: "GitHub Enterprise",
          select: false,
          id: 3,
        },
        {
          name: "Paid",
          select: false,
          id: 4,
        },
      ],
      tableData: {
        tableList: [
          {
            value: "yong1",
            label: "yong1",
            typeId: 1,
            name: "yong1",
            by: "By imgbot",
            dec: "A GitHub app that optimizes your images",
            type: "Recommended",
          },
          {
            value: "yong2",
            label: "yong2",
            typeId: 1,
            name: "yong2",
            by: "By imgbot",
            dec: "A GitHub app that optimizes your images",
            type: "Recommended",
          },
          {
            value: "yong3",
            label: "yong3",
            typeId: 1,
            name: "yong3",
            by: "By imgbot",
            dec: "Daily,automatic backups of your repos and metadata. Restore your backups with metadata in seconds + Sync to your S3 or Azure",
            type: "Recommended",
          },
          {
            value: "feng1",
            label: "feng1",
            typeId: 1,
            name: "feng1",
            by: "By imgbot",
            dec: "Daily,automatic backups of your repos and metadata. Restore your backups with metadata in seconds + Sync to your S3 or Azure",
            type: "Recommended",
          },
          {
            value: "feng1",
            label: "feng1",
            typeId: 2,
            name: "feng1",
            by: "By imgbot",
            dec: "Daily,automatic backups of your repos and metadata. Restore your backups with metadata in seconds + Sync to your S3 or Azure",
            type: "Recommended",
          },
          {
            value: "yong4",
            label: "yong4",
            typeId: 2,
            name: "yong4",
            by: "By imgbot",
            dec: "A GitHub app that optimizes your images",
            type: "Recommended",
          },
          {
            value: "yong5",
            label: "yong5",
            typeId: 2,
            name: "yong5",
            by: "By imgbot",
            dec: "A GitHub app that optimizes your images",
            type: "Recommended",
          },
        ],
        total: 5,
        page: 1,
        pageSize: 3,
      },
      projectList: [],
      groupList: [],
      projectShow: true,
      groupShow: true,
      inputValue: null,
    };
  },
  methods: {
    selectFun(data) {
      console.log("selectFun");
      // console.log(data)
    },
    inputFun(value) {
      this.inputValue = value;
    },
    searchFun() {
      console.log(this.inputValue);
      let groupList = [];
      let projectList = [];
      this.tableData.tableList.forEach((element) => {
        let index = element.name.indexOf(this.inputValue);
        if (index != -1) {
          if (element.typeId === 1) {
            groupList.push(element);
          } else {
            projectList.push(element);
          }
          this.groupList = groupList.slice(0, 8);
          this.projectList = projectList.slice(0, 8);
        }
      });
    },
    clearFun() {
      let groupList = [];
      let projectList = [];
      this.tableData.tableList.forEach((element) => {
        if (element.typeId === 1) {
          groupList.push(element);
        } else {
          projectList.push(element);
        }
      });
      this.groupList = groupList.slice(0, 8);
      this.projectList = projectList.slice(0, 8);
      this.projectShow = true;
      this.groupShow = true;
    },
    getMoreParams(item) {
      console.log("getMoreParams");
      this.roleValue = item.value;
      let arr = [];
      if (item.typeId === 1) {
        this.projectShow = false;
        this.groupShow = true;
        this.tableData.tableList.forEach((element) => {
          if (element.name === item.name) {
            arr.push(element);
          }
        });
        this.groupList = arr;
      } else {
        this.projectShow = true;
        this.groupShow = false;
        this.tableData.tableList.forEach((element) => {
          if (element.name === item.name) {
            arr.push(element);
          }
        });
        this.projectList = arr;
      }
    },
    chooseFun(item) {
      item.select = !item.select;
      console.log("dsfdsf");
      let arr = [];
      this.filtersList.forEach((element) => {
        if (element.select) {
          arr.push(element.id);
        }
      });
      this.selectList = arr;
      if (arr.length === 0) {
        this.filtersList[0].select = true;
        this.selectList = [1];
      }
    },
    toGroupItemFun() {
      this.$router.push({
        name: "group_index",
      });
    },
    toGroupFun() {
      this.$router.push({
        name: "group_index",
      });
    },
    toProjectFun() {
      this.$router.push({
        name: "project_index",
      });
    },
    toProjectItemFun() {
      this.$router.push({
        name: "project_index",
      });
    },
  },
  created() {
    let groupList = [];
    let projectList = [];
    this.tableData.tableList.forEach((element) => {
      if (element.typeId === 1) {
        groupList.push(element);
      } else {
        projectList.push(element);
      }
    });
    this.groupList = groupList.slice(0, 8);
    this.projectList = projectList.slice(0, 8);
  },
};
</script>
