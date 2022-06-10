<style scoped>
.app {
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

/* .typeItem:hover {
  background: #f8f8f8;
} */

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

.rightItem-project {
  width: 100%;
  min-height: 200px;
  font-size: 24px;
  font-weight: 600;
  color: #333333;
}

.rightItem-group {
  width: 100%;
  min-height: 200px;
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

  border-radius: 8px;
  border: 1px solid #e6e6e6;
  margin-right: 20px;
  margin-top: 4px;
}
.tableImg img {
  width: 100%;
  height: 100%;
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
.content_top_bg {
  width: 100%;
  height: 6%;
  position: relative;
}
.content_top_bg_content {
  height: 350px;
  position: relative;
  width: 1200px;
  margin: auto;
  /* margin-top: -74px; */
}
.teamscan_top_bg {
  width: 100%;
  height: 100%;

  position: absolute;
}
.content_top_bg_team_scan {
  width: 35%;
  height: 13%;
  position: absolute;
  bottom: 35%;
}
.banner_bg_teamscan {
  width: 100%;
  height: 70%;
  position: absolute;
  padding-right: 35px;
  padding-left: 10%;
  bottom: 0;
}
.itemActive {
  background: #1776ff;
}
</style>

<template>
  <div class="app">
    <div class="content_top_bg" style="">
      <img
        src="../../../../assets/chain_cloud/teamscan/teamscan_top_bg.png"
        alt=""
        class="teamscan_top_bg"
      />
      <div class="content_top_bg_content">
        <img
          src="../../../../assets/chain_cloud/teamscan/team_scan@2x.png"
          alt=""
          class="content_top_bg_team_scan"
        />
        <img
          src="../../../../assets/chain_cloud/teamscan/banner_bg_teamscan_dec@2x.png"
          alt=""
          class="banner_bg_teamscan"
        />
      </div>
    </div>
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
              :name="typeItem.name"
              @click="filterType(typeItem)"
            >
              {{ typeItem.name }}
            </div>
          </div>
          <div class="line"></div>
          <!-- <div class="typeList">
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
          </div> -->
        </div>
        <div class="right">
          <div class="rightItem-group" v-if="groupShow">
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
                <div class="tableImg" style="overflow: hidden">
                  <img :src="item.imageData" alt="" />
                </div>
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
          <div class="rightItem-project" v-if="projectShow">
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
                <div class="tableImg" style="overflow: hidden">
                  <img :src="item.imageData" alt="" />
                </div>
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
import { Principal } from "@dfinity/principal";
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import {
  TEST_USER,
  TEST_GROUP_ID,
} from "@/chain_cloud_assets/assets/js/config";
import { Loading } from "element-ui";

export default {
  data() {
    return {
      roleValue: null,
      keyword: "",
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
        tableList: [],
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
      // console.log(data)
    },
    inputFun(value) {
      this.inputValue = value;
    },
    searchFun() {
      this.groupList.splice(0);
      this.projectList.splice(0);
      this.projectShow = true;
      this.groupShow = true;
      for (let element of this.tableData.tableList) {
        let index = element.name.indexOf(this.inputValue);
        if (index != -1) {
          if (element.typeId === 1) {
            this.groupList.push(element);
          } else {
            this.projectList.push(element);
          }
        }
      }
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
    toGroupItemFun(item) {
      this.$router.push({
        name: "group",
        params: {
          user: item.by.toString(),
          groupId: item.groupId,
        },
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
    toProjectItemFun(item) {
      this.$router.push({
        name: "project",
        params: {
          user: item.user,
          groupId: item.groupId,
          projectId: item.projectId,
          owner: item.gitowner,
          repo: item.gitrepo,
        },
      });
    },
    filterType(item) {
      let ele = document.getElementsByClassName("itemActive");
      for (let i = 0; i < ele.length; i++) {
        ele[i].classList.remove("itemActive");
      }

      document.getElementsByName(item.name)[0].classList.add("itemActive");
      switch (item.name) {
        case "Group":
          this.projectShow = false;
          this.groupShow = true;
          break;
        case "Project":
          this.projectShow = true;
          this.groupShow = false;

          this.projectList = [];
          this.tableData.tableList.forEach((element) => {
            if (element.typeId == 2) {
              this.projectList.push(element);
            }
          });
          break;
        default:
          this.groupShow = false;
          this.projectShow = true;
          this.projectList = [];
          this.tableData.tableList.forEach((element) => {
            if (element.label == item.name) {
              this.projectList.push(element);
            }
          });
      }
    },
  },
  mounted() {},
  async mounted() {
    let topInstance = Loading.service({
      target: ".rightItem-group .table",
    });
    let projectLoading = Loading.service({
      target: ".rightItem-project .table",
    });
    let groupRes = await manageCanister.visibleProject();
    this.tableData.total = groupRes.length;
    let ImageRes = [];

    for (let i = 0; i < groupRes.length; i++) {
      for (let j = 0; j < groupRes[i].length; j++) {
        for (let k = 0; k < groupRes[i][j][2].projects.length; k++) {
          let label = "";
          if ("NFT" in groupRes[i][j][2].projects[k][1].function) {
            label = "NFT";
          } else {
            let projectType = Object.keys(
              groupRes[i][j][2].projects[k][1].function
            )[0];

            label =
              projectType.slice(0, 1).toLowerCase() + projectType.slice(1);
          }

          ImageRes.push(
            (async function (len) {
              let imageData = await manageCanister.getProjectImage(
                groupRes[i][j][0],
                groupRes[i][j][1],
                groupRes[i][j][2].projects[k][1].id
              );
              return [imageData, len];
            })(this.tableData.tableList.length)
          );
          let giturl = groupRes[i][j][2].projects[k][1].git_repo_url;
          let owner = giturl.split("/")[3];
          let repo = giturl.split("/")[4];

          this.tableData.tableList.push({
            value: groupRes[i][j][2].projects[k][1].name,
            label: label,
            name: groupRes[i][j][2].projects[k][1].name,
            by: groupRes[i][j][2].projects[k][1].create_by.toString(),
            dec: groupRes[i][j][2].projects[k][1].description,
            type: "Recommended",
            user: groupRes[i][j][0].toString(),
            groupId: groupRes[i][j][1],
            projectId: groupRes[i][j][2].projects[k][1].id,
            typeId: 2,
            imageData: "",
            gitowner: owner,
            gitrepo: repo,
          });
        }
      }
      for (let j = 0; j < groupRes[i].length; j++) {
        ImageRes.push(
          (async function (len) {
            let imageData = await manageCanister.getGroupImage(
              groupRes[i][j][0],
              groupRes[i][j][1]
            );
            return [imageData, len];
          })(this.tableData.tableList.length)
        );

        this.tableData.tableList.push({
          value: groupRes[i][j][2].name,
          label: groupRes[i][j][2].name,
          name: groupRes[i][j][2].name,
          by: groupRes[i][j][0],
          dec: groupRes[i][j][2].description,
          type: "Recommended",
          groupId: groupRes[i][j][2].id,
          imageData: "",
          typeId: 1,
        });

        this.tableData.total = this.tableData.tableList.length;
      }
    }
    Promise.all(ImageRes).then((res) => {
      for (let i = 0; i < res.length; i++) {
        let imageData = new TextDecoder().decode(Uint8Array.from(res[i][0]));
        this.tableData.tableList[res[i][1]].imageData = imageData;
      }
    });
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
    topInstance.close();
    projectLoading.close();
  },
};
</script>
