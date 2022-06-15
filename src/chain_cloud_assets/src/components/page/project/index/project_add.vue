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

.head {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 44px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
}

.line {
  width: 100%;
  height: 1px;
  background: #333333;
  margin: 20px 0 0 0;
}

.contentbox {
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.left {
  width: 280px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #818181;
  padding-right: 20px;
  border-right: 1px solid #cccccc;
}

.right {
  flex: 1;
  padding-left: 60px;
}

.wordStyle {
  margin-top: 20px;
}

.nameItem {
  display: flex;
  font-size: 13px;
  font-weight: 500;
  color: #333333;
  flex-direction: column;
  margin-top: 20px;
}

.description {
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  width: 720px;
  margin-top: 30px;
}

.fileBox {
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex: 1;
}

.fileBox img {
  width: 60px;
  height: 60px;
  margin-right: 10px;
}

.fileButtonBox {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #818181;
  position: relative;
}

.visibiliBox {
  display: flex;
  flex-direction: column;
}

.appleStyle {
  display: flex;
  flex-direction: column;
}

.radioDec {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #818181;
  margin-left: 10px;
}

.radioSel {
  font-size: 12px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
}

.radioImg {
  width: 16px;
  height: 16px;
  margin-top: 4px;
}

.radioBox {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.upFileButton {
  width: 115px;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #818181;
  text-align: center;
  line-height: 32px;
  cursor: pointer;
  margin-right: 10px;
}

.fileUpNone {
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
  width: 100%;
}

.fileTop {
  display: flex;
  align-items: center;
}

.fileName {
  flex: 1;
  height: 32px;
  background: #f8f8f8;
  border-radius: 2px;
  padding: 0 0.1rem;
  line-height: 32px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
}

.saveButton {
  margin-top: 60px;
  margin-bottom: 10px;
  width: 108px;
  height: 32px;
  background: #1776ff;
  border-radius: 4px;
  border: 1px solid #1776ff;
  text-align: center;
  line-height: 32px;
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
}

.lineBottom {
  width: 100%;
  height: 1px;
  background: #f1f1f1;
}
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
</style>

<template>
  <div class="app">
    <div class="content">
      <div class="head">
        <span>New project</span>
      </div>

      <div class="line"></div>

      <div class="contentbox">
        <Spin fix size="large" v-show="loading">
          <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
        <div class="left">
          <div class="wordStyle">
            Projects allow you to manage and collaborate across multiple
            projects. Members of a group have access to all of its projects.
          </div>
          <div class="wordStyle">
            Projects can also be nested by creating subgroups.
          </div>
          <div class="wordStyle">
            Projects that belong to a group are prefixed with the group
            namespace. Existing projects may be moved into a group.
          </div>
        </div>
        <div class="right">
          <!-- <div class="nameItem">
            <span>Projects Id</span>
            <Input
              placeholder="Production project"
              style="width: 320px; margin-top: 10px"
              :clearable="true"
              v-model="project['id']"
            />
          </div> -->
          <div class="nameItem">
            <span>Project name</span>
            <Input
              placeholder="Project name"
              style="width: 320px; margin-top: 10px"
              :clearable="true"
              v-model="project['name']"
            />
          </div>

          <div class="nameItem">
            <span>Project URL</span>
            <Input
              placeholder="my-awesome-project"
              style="width: 720px; margin-top: 10px"
              :clearable="true"
              v-model="project['git_repo_url']"
            />
          </div>
          <div class="nameItem">
            <span>Select a group</span>
            <!-- <Input
              placeholder="group id"
              style="width: 720px; margin-top: 10px"
              :clearable="true"
              v-model="project['in_group']"
            /> -->
            <Select v-model="groupId" style="width: 100%">
              <Option
                v-for="(item, index) in group"
                :value="item"
                :key="index"
                placeholder="please select"
                >{{ item.name }}</Option
              >
            </Select>
          </div>
          <div class="description">
            <span>Project description (optional)</span>
            <Input
              type="textarea"
              style="width: 100%; margin-top: 10px"
              placeholder="Multiline input"
              v-model="project['description']"
            />
          </div>
          <div class="description">
            <span>Project type</span>
            <Select
              v-model="projectType"
              style="width: 100%"
              v-if="projectTypeList.length > 0"
            >
              <Option
                v-for="(item, index) in projectTypeList"
                :value="item.value"
                :key="index"
                placeholder="please select"
                >{{ item.label }}</Option
              >
            </Select>
          </div>
          <!-- <div class="nameItem">
            <span
              >To Account Identity: (If you want to create a project under
              another account, fill in the address of the target account
              here)</span
            >
            <Input
              placeholder="to account identity"
              style="width: 320px; margin-top: 10px"
              :clearable="true"
              v-model="toAccount"
            />
          </div> -->
          <div class="nameItem">
            <span>Project Canisters (eg ["xxx","xxx"])</span>
            <Input
              placeholder="to account identity"
              style="width: 320px; margin-top: 10px"
              :clearable="true"
              v-model="canisters"
            />
          </div>
          <div class="description">
            <span>Project avatar</span>
            <div class="fileBox">
              <img :src="imgurl" alt="" />
              <div class="fileButtonBox">
                <div class="fileTop">
                  <div class="upFileButton" style="margin-top: 0">
                    <span>Choose picture</span>
                    <input
                      type="file"
                      class="fileUpNone"
                      accept="image/*"
                      @change="previewImage($event)"
                    />
                  </div>
                  <div class="fileName">{{ fileName }}</div>
                </div>
                <span>The maximum file size allowed is 200KB.</span>
              </div>
            </div>
          </div>
          <div class="description">
            <span>Visibility level</span>
            <div class="visibiliBox">
              <Radio-group v-model="type">
                <div class="radioBox">
                  <Radio label="Private">
                    <img
                      src="../../../../../assets/chain_cloud/group/icon_private@2x.png"
                      alt=""
                      class="radioImg"
                    />
                    <span class="radioSel">Private</span>
                    <span class="radioDec"
                      >This project can only be viewed by members in the same
                      group</span
                    >
                  </Radio>
                </div>
                <div class="radioBox">
                  <Radio label="Public">
                    <img
                      src="../../../../../assets/chain_cloud/group/icon_pubilc@2x.png"
                      alt=""
                      class="radioImg"
                    />
                    <span class="radioSel">Public</span>
                    <span class="radioDec">
                      This project can be viewed without any
                      authentication.</span
                    >
                  </Radio>
                </div>
              </Radio-group>
            </div>
          </div>
          <div class="saveButton" @click="saveFun">Create project</div>
        </div>
      </div>
    </div>
    <div class="lineBottom"></div>
  </div>
</template>
<script>
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import { Principal } from "@dfinity/principal";
import { TEST_CANISTER } from "@/chain_cloud_assets/assets/js/config";
import { mapGetters } from "vuex";
import { Loading } from "element-ui";
export default {
  data() {
    return {
      vLoading: [],
      toAccount: "",
      canisters: "",
      loading: false,
      project: {
        id: 0,
        members: [],
        canister_cycle_floor: BigInt("1000000000000"),
        name: "",
        create_by: "",
        description: "",
        git_repo_url: "",
        create_time: 0,
        canisters: [],
        visibility: null,
        in_group: 0,
        function: {},
      },
      groupId: [],
      group: [],
      projectTypeList: [
        {
          value: "wallet",
          label: "wallet",
        },
        {
          value: "infrastructure",
          label: "infrastructure",
        },
        {
          value: "NFT",
          label: "NFT",
        },
        {
          value: "authentication",
          label: "authentication",
        },
        {
          value: "tools",
          label: "tools",
        },
        {
          value: "dapp",
          label: "dapp",
        },
        {
          value: "sns",
          label: "sns",
        },
        {
          value: "defi",
          label: "defi",
        },
        {
          value: "games",
          label: "games",
        },
        {
          value: "official",
          label: "official",
        },
        {
          value: "bridge",
          label: "bridge",
        },
        {
          value: "swap",
          label: "swap",
        },
        {
          value: "metaverse",
          label: "metaverse",
        },
      ],
      projectType: null,
      type: "Public",
      fileName: "No file chosen…",
      imgurl: require("../../../../../assets/chain_cloud/menu/pic_group_avatar@2x.png"),
    };
  },
  computed: {
    ...mapGetters(["getManageCanister"]),
  },
  watch: {
    toAccount: async function (newdata, olddata) {
      try {
        let account = Principal.fromText(newdata).toString();

        await this.configGroupInfo(account);
      } catch (err) {
        console.log("invalid account");
      }
    },
  },
  methods: {
    async configGroupInfo(account) {
      this.group = [];

      let manageCanister = this.getManageCanister();
      let getUserInfoRes = await manageCanister.getUserInfo(
        Principal.fromText(account)
      );
      if ("Err" in getUserInfoRes) {
        throw getUserInfoRes.Err;
      }

      for (let i = 0; i < getUserInfoRes.Ok.groups.length; i++) {
        let nonce = BigInt(1);
        for (
          let j = 0;
          j < getUserInfoRes.Ok.groups[i][1].projects.length;
          j++
        ) {
          if (nonce < getUserInfoRes.Ok.groups[i][1].projects[j][0]) {
            nonce = getUserInfoRes.Ok.groups[i][1].projects[j][0];
          }
        }
        nonce = nonce + BigInt(1);
        this.group.push({
          name: getUserInfoRes.Ok.groups[i][1].name,
          id: getUserInfoRes.Ok.groups[i][1].id.toString(),
          projectNonce: nonce.toString(),
        });
      }
    },
    async saveFun() {
      let manageCanister = this.getManageCanister();

      if (!manageCanister) {
        this.$Notice.info({
          title: "Please log in to the account",
          background: true,
          duration: 3,
        });
        return;
      }
      this.loading = true;
      if (this.toAccount == "") {
        this.toAccount = manageCanister.identity.toString();
      } else {
        try {
          this.toAccount = Principal.fromText(this.toAccount);
          this.toAccount = this.toAccount.toString();
        } catch (err) {
          console.log("invalid to account");
          this.loading = false;
          return;
        }
      }

      this.project.canisters = [];
      if (this.canisters != "") {
        let canisterRes = JSON.parse(this.canisters);
        for (let i = 0; i < canisterRes.length; i++) {
          try {
            this.project.canisters.push(Principal.fromText(canisterRes[i]));
          } catch (err) {
            this.loading = false;
            throw "Invalid canister id";
          }
        }
      }

      this.project.in_group = BigInt(this.groupId.id);
      this.project.id = BigInt(this.groupId.projectNonce);
      this.project.create_time = new Date().getTime();
      this.project.create_by = manageCanister.identity;
      this.project.visibility =
        this.type == "Public" ? { Public: null } : { Private: null };
      this.project.members = [
        [
          manageCanister.identity,
          {
            join_time: BigInt(new Date().getTime()),
            name: "manage",
            authority: { Operational: null },
            identity: manageCanister.identity,
            expiration_time: [],
          },
        ],
      ];

      let projectType = {};
      if (!this.projectType) {
        this.loading = false;
        throw "select Projects type";
      }
      if (this.projectType == "NFT") {
        projectType[this.projectType] = null;
      } else {
        let types =
          this.projectType.slice(0, 1).toUpperCase() +
          this.projectType.slice(1);

        projectType[types] = null;
      }
      this.project.function = projectType;
      let addProjectRes = await manageCanister.addProject(
        Principal.fromText(this.toAccount),
        this.project.in_group,
        this.project
      );

      let info = "";
      if ("Ok" in addProjectRes) {
        info = "Successfully added";
        let enc = new TextEncoder();
        let imageStoreRes = await manageCanister.projectImageStore(
          Principal.fromText(this.toAccount),
          this.project.in_group,
          this.project.id,
          Array.from(enc.encode(this.imgurl))
        );
      } else {
        info = "Add failed: " + addProjectRes.Err;
      }
      this.loading = false;
      this.$Notice.info({
        title: info,
        background: true,
        duration: 3,
      });
    },
    previewImage(e) {
      var dt = e.target;
      for (var i = 0; i !== dt.files.length; i++) {
        let that = this; //改变this指向
        let files = dt.files[0]; //图片文件名
        if (!e || !window.FileReader) return; // 看是否支持FileReader
        let reader = new FileReader();
        reader.readAsDataURL(files); // 关键一步，在这里转换的
        reader.onloadend = function () {
          that.imgurl = this.result; //赋值
        };
        this.fileName = dt.files[i].name;
      }
    },
  },
  async mounted() {
    let manageCanister = this.getManageCanister();
    if (!manageCanister) {
      this.$Notice.info({
        title: "Please log in to the account",
        background: true,
        duration: 3,
      });
      this.$router.push({
        name: "project_index",
      });
    }

    await this.configGroupInfo(manageCanister.identity.toString());
  },
};
</script>
