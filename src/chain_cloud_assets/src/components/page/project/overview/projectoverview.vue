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
  /* height: 6.63rem; */
  padding: 0.2rem;
  border-radius: 0.04rem;
  background: white;
  margin-top: 0.3rem;
}

.contentTitle {
  font-size: 0.2rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  margin-top: 0.2rem;
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
  cursor: pointer;
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
  overflow: scroll;
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
      <span class="titlePath">{{ project.name }}/ Overview</span>
    </div>
    <div class="head">
      <div class="headItem">
        <div class="headItemTitle">Project info</div>
        <div class="headItemLog">
          <img :src="project['imageData']" alt="" />
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
        <div class="idInfo">
          <div class="idInfoTitle">Visibility Level</div>
          <span>{{ project.visibility }}</span>
        </div>
      </div>
      <div class="headItem">
        <div class="headItemTitle">Branchs info</div>
        <div class="headItemTable">
          <div class="headTableItem tab">
            <span>Branch number</span>
            <span>{{ tableData.total }}</span>
          </div>
          <div class="headTableItem">
            <span>Active branch</span>
            <span>{{ branch.active }}</span>
          </div>
          <div class="headTableItem">
            <span>Stable branch</span>
            <span>{{ branch.stable }}</span>
          </div>
          <div class="headTableItem">
            <span>Last modified</span>
            <span>{{ branch.lastModify }}</span>
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
              <span>{{ item.commit }}</span>
              <div class="item3Sub" @click="copydata(item.commit)">
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
import { mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      branch: {
        active: 0,
        stable: 0,
        lastModify: 0,
      },
      project: {
        name: "",
        id: 0,
        gitURl: "",
        visibility: "",
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
        tableList: [],
        total: 0,
        page: 1,
        pageSize: 30,
      },
    };
  },
  methods: {
    copydata(data) {
      navigator.clipboard.writeText(data);
    },
    headPageFun(value) {
      this.$Notice.info({
        title: "暂无后台数据",
        background: true,
        duration: 3,
      });
    },
    loadbranchinfo(owner, repo) {
      let retkey = owner + "-" + repo;
      let retlocal = window.localStorage.getItem(retkey);
      if (retlocal == null || retlocal == undefined || retlocal.length == 0) {
        let gitbranchurl =
          "https://api.github.com/repos/" +
          owner +
          "/" +
          repo +
          "/" +
          "branches";
        let that = this;
        this.axios
          .get(gitbranchurl, {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          })
          .then(function (response) {
            let ret = response.data;
            console.log("response", ret);
            for (let i = 0; i < ret.length; i++) {
              const element = ret[i];

              that.axios
                .get(element.commit.url, {
                  headers: {
                    Accept: "application/vnd.github.v3+json",
                  },
                })
                .then(function (response) {
                  let commtinfo = response.data;
                  let obj = {
                    projectName: element.name,
                    commit: element.commit.sha.substring(0, 12),
                    typemerge: "  " + commtinfo.commit.message,
                    time: commtinfo.commit.author.date,
                  };
                  that.tableData.tableList.push(obj);

                  if (i == ret.length - 1) {
                    that.tableData.total = that.tableData.tableList.length;
                    let retcache = JSON.stringify(that.tableData.tableList);
                    window.localStorage.setItem(retkey, retcache);
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        let itemss = JSON.parse(retlocal);
        this.tableData.tableList = itemss;
        this.tableData.total = itemss.length;
      }
      let currentTime = new Date().getTime();
      let that = this;
      this.tableData.tableList.forEach((ele) => {
        let t = new Date(
          moment(ele.time, "YYYY-MM-DD'T'HH:mm:SS'Z'")
        ).getTime();
        let day = Math.floor((currentTime - t) / 1000 / 3600 / 24);
        if (day <= 1) {
          that.branch.lastModify = that.branch.lastModify + 1;
        } else if (day > 1 && day <= 7) {
          that.branch.active = that.branch.active + 1;
        } else {
          that.branch.stable = that.branch.stable + 1;
        }
      });
    },
  },
  computed: {
    ...mapGetters(["getManageCanister"]),
  },
  async created() {
    let url = window.location.href;
    if (!this.$route.params) {
      throw "params  not found";
    }
    let canister = this.getManageCanister();
    let manage = manageCanister;
    if (canister) {
      manage = canister;
    }

    let account = Principal.fromText(this.$route.params.user);
    let groupId = BigInt(this.$route.params.groupId);
    let projectId = BigInt(this.$route.params.projectId);
    try {
      let imageData = await manageCanister.getProjectImage(
        account,
        groupId,
        projectId
      );

      this.project.imageData = new TextDecoder().decode(
        Uint8Array.from(imageData)
      );
    } catch (err) {}
    let getProjectRest = await manage.getProjectInfo(
      account,
      groupId,
      projectId
    );
    if (getProjectRest.Err) {
      throw getProjectRest.Err;
    }

    if (getProjectRest.Ok.length > 0) {
      if ("Public" in getProjectRest.Ok[0].visibility) {
        this.project.visibility = "Public";
      } else {
        this.project.visibility = "Private";
      }
      this.project.name = getProjectRest.Ok[0].name;
      this.project.id = getProjectRest.Ok[0].id;
      this.project.gitURl = getProjectRest.Ok[0].git_repo_url;
    }

    let owner = this.$route.params.owner;
    let repo = this.$route.params.repo;

    this.loadbranchinfo(owner, repo);
  },
};
</script>
