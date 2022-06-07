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

.content {
  width: 100%;
  padding: 0.2rem;
  border-radius: 0.04rem;
  background: white;
  margin-top: 0.2rem;
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
  color: #1776ff;
}

.table {
  border-radius: 0.04rem;
  background: white;
  border: 0.01rem solid #e6e6e6;
}

.tableHead {
  width: 100%;
  height: 0.44rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  background: #fafafa;
  font-size: 0.16rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  border-bottom: 0.01rem solid #e6e6e6;
}

.tableMar {
  margin-top: 0.2rem;
}

.itemCom {
  display: flex;
  align-items: center;
  padding: 0 0.2rem;
}

.tableItem {
  height: 0.8rem;
  display: flex;
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
  padding-top: 0.18rem;
}

.item3 {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  padding-top: 0.18rem;
}

.leibie {
  width: 0.16rem;
  height: 0.16rem;
  margin-right: 0.1rem;
}

.groupName {
  height: 0.36rem;
  font-size: 0.16rem;
  font-weight: 500;
  color: #333333;
  margin-top: -0.04rem;
}

.groupNameInfo {
  font-size: 0.14rem;
  font-family: UbuntuMono-Regular, UbuntuMono;
  font-weight: 400;
  color: #1776ff;
  display: flex;
  align-items: center;
}

.groupNameInfoTime {
  font-weight: 400;
  color: #666666;
  margin-left: 0.02rem;
  font-size: 0.14rem;
}

.groupNameTop {
  font-size: 0.16rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  display: flex;
  align-items: center;
  height: 0.2rem;
}

.protected {
  font-size: 11px;
  font-weight: 500;
  color: #48c982;
  padding: 0 0.1rem;
  height: 0.2rem;
  background: rgba(85, 200, 137, 0.2);
  border-radius: 0.04rem;
  margin: 0 0.1rem;
  line-height: 0.2rem;
}

.default {
  font-size: 11px;
  font-weight: 500;
  color: #1776ff;
  padding: 0 0.1rem;
  height: 0.2rem;
  background: rgba(23, 118, 255, 0.2);
  border-radius: 0.04rem;
  line-height: 0.2rem;
}

.contentBox {
  width: 100%;
  margin-top: 0.2rem;
}

.pageStyle {
  display: flex;
  justify-content: center;
  height: 0.72rem;
  align-items: center;
  background: #fafafa;
}
</style>

<template>
  <div class="app">
    <div class="title">
      <div class="titleName">Branches</div>
      <span class="titlePath">Project info / Chain-Cloud / Branches</span>
    </div>
    <div class="content">
      <div class="actiontab">
        <div
          class="actionitem"
          v-for="(item, index) in tabList"
          :key="index"
          :class="{ chooseClass: item.select }"
          @click="chooseFun(item, index)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="contentBox">
        <div class="table" v-if="activeBoolean">
          <div class="tableHead">Active branches</div>
          <div
            class="tableItem"
            v-for="(item, index) in tableData.tableList"
            :key="index"
          >
            <div class="item1">
              <img
                class="leibie"
                src="../../../../../assets/chain_cloud/teamscan/icon_branch@2x.png"
                alt=""
              />
              <div class="groupName">
                <div class="groupNameTop">
                  <span>{{ item.projectName }}</span>
                  <div v-if="item.protected == true" class="protected">
                    Protected
                  </div>
                  <!-- <div class="default">Default</div> -->
                </div>
                <div class="groupNameInfo">
                  <span>{{ item.commit }}</span>
                  <span class="groupNameInfoTime">{{ item.typemerge }}</span>
                </div>
              </div>
            </div>
            <div class="item3">
              <span>{{ item.time }}</span>
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
        <div
          class="table"
          :class="{ tableMar: activeBoolean }"
          v-if="stableBoolean"
        >
          <div class="tableHead">Stable branches</div>
          <div
            class="tableItem"
            v-for="(item, index) in tableData.tableList"
            :key="index"
          >
            <div class="item1">
              <img
                class="leibie"
                src="../../../../../assets/chain_cloud/teamscan/icon_branch@2x.png"
                alt=""
              />
              <div class="groupName">
                <div class="groupNameTop">
                  <span>{{ item.projectName }}</span>
                  <div v-if="item.protected == true" class="protected">
                    Protected
                  </div>
                  <!-- <div class="default">Default</div> -->
                </div>
                <div class="groupNameInfo">
                  <span>{{ item.commit }}</span>
                  <span class="groupNameInfoTime">{{ item.typemerge }}</span>
                </div>
              </div>
            </div>
            <div class="item3">
              <span>{{ item.time }}</span>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeBoolean: true,
      stableBoolean: true,
      tabList: [
        {
          name: "All",
          select: true,
          id: 1,
        },
        {
          name: "Active",
          select: false,
          id: 2,
        },
        {
          name: "Stable",
          select: false,
          id: 3,
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
        tableList: [],
        total: 0,
        page: 1,
        pageSize: 10,
      },
    };
  },
  methods: {
    chooseFun(item, index) {
      this.tabList.forEach((element) => {
        element.select = false;
      });
      item.select = true;
      if (item.id === 1) {
        this.activeBoolean = true;
        this.stableBoolean = true;
      } else if (item.id === 2) {
        this.activeBoolean = true;
        this.stableBoolean = false;
      } else if (item.id === 3) {
        this.activeBoolean = false;
        this.stableBoolean = true;
      }
    },
    headPageFun(value) {
      this.$Notice.info({
        title: "暂无后台数据",
        background: true,
        duration: 3,
      });
    },
  },
  created() {
    let url = window.location.href;
    console.log(url);

    let owner = this.$route.params.owner;
    let repo = this.$route.params.repo;

    let retkey = owner + "-" + repo;
    let retlocal = window.localStorage.getItem(retkey);
    if (retlocal == null || retlocal == undefined || retlocal.length == 0) {
      console.log("make a request");
    } else {
      let itemss = JSON.parse(retlocal);
      console.log("itemss");
      console.log(itemss);
      this.tableData.tableList = itemss;
      this.tableData.total = itemss.length;
    }
  },
};
</script>
