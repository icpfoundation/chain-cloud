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
  background: white;
  height: 10.5rem;
  background: #ffffff;
  border-radius: 0.08rem;
  padding: 0.2rem;
}

.leftBoxName {
  font-size: 0.2rem;
  font-weight: 500;
  color: #333333;
}

.contentInfo {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
  margin-top: 0.02rem;
}

.contentName {
  width: 7.2rem;
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
  justify-content: space-between;
}

.nameItem {
  display: flex;
  font-size: 0.13rem;
  font-weight: 500;
  color: #333333;
  flex-direction: column;
}

.description {
  font-size: 0.13rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  width: 7.2rem;
  margin-top: 0.4rem;
}

.fileBox {
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  flex: 1;
}

.fileBox img {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.1rem;
}

.fileButtonBox {
  height: 0.6rem;
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
  margin-left: 0.1rem;
}

.radioSel {
  font-size: 12px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
}

.radioImg {
  width: 0.16rem;
  height: 0.16rem;
  margin-top: 0.04rem;
}

.radioBox {
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
}

.saveButton {
  margin-top: 1rem;
  width: 1rem;
  height: 0.32rem;
  background: #1776ff;
  border-radius: 0.04rem;
  border: 0.01rem solid #1776ff;
  text-align: center;
  line-height: 0.32rem;
  font-size: 0.13rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
}

.savaButtonDisable {
  background: #a0a0a0;
}
.upFileButton {
  width: 1.15rem;
  height: 0.32rem;
  border-radius: 0.04rem;
  border: 0.01rem solid #818181;
  text-align: center;
  line-height: 0.32rem;
  cursor: pointer;
  margin-right: 0.1rem;
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
  height: 0.32rem;
  background: #f8f8f8;
  border-radius: 0.02rem;
  padding: 0 0.1rem;
  line-height: 0.32rem;
  font-size: 0.14rem;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #333333;
}
.ivu-spin-fix {
  height: 130%;
}

.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
</style>

<template>
  <div class="app">
    <div class="title">
      <div class="titleName">Setting</div>
      <span class="titlePath">{{ project.name }} / Setting</span>
    </div>
    <div class="content">
      <Spin fix size="large" v-show="loading">
        <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
        <div>Loading</div>
      </Spin>
      <!-- <div class="leftBoxName">Naming, visibility</div>
      <div class="contentInfo">
        Update your project name, description, avatar, and visibility.
      </div> -->
      <div class="contentName">
        <div class="nameItem">
          <span>Project name</span>
          <Input
            placeholder="Production group"
            style="width: 3.2rem; margin-top: 0.1rem"
            :clearable="true"
            :disabled="disabled"
            v-model="project['name']"
          />
        </div>
        <div class="nameItem">
          <span>Project ID</span>
          <Input
            placeholder="Group ID"
            style="width: 3.2rem; margin-top: 0.1rem"
            :clearable="true"
            disabled
            v-model="project['id']"
          />
        </div>
      </div>
      <div class="description">
        <span>Project description (optional)</span>
        <Input
          type="textarea"
          style="width: 100%; margin-top: 0.1rem"
          placeholder="Multiline input"
          :disabled="disabled"
          v-model="project['description']"
        />
      </div>
      <div class="description">
        <span>Project git url (optional)</span>
        <Input
          type="textarea"
          style="width: 100%; margin-top: 0.1rem"
          placeholder="Multiline input"
          :disabled="disabled"
          v-model="project['url']"
        />
      </div>

      <div class="description">
        <span>Project Canister (optional)</span>
        <Input
          type="textarea"
          style="width: 100%; margin-top: 0.1rem"
          placeholder=""
          :disabled="disabled"
          v-model="project['canister']"
        />
      </div>
      <div class="description">
        <span>Project avatar</span>
        <div class="fileBox">
          <img :src="project['imageData']" alt="" />
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
                  >The group and its projects can only be viewed by
                  mambers.</span
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
                <span class="radioDec"
                  >The group and any pubilc projects can be viewed without any
                  authentication.</span
                >
              </Radio>
            </div>
          </Radio-group>
        </div>
      </div>
      <div
        :class="disabled ? 'saveButton savaButtonDisable' : 'saveButton '"
        @click="saveFun"
      >
        Save change
      </div>
    </div>
  </div>
</template>
<script>
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import { dateFormat } from "@/chain_cloud_assets/assets/js/util";
import { Principal } from "@dfinity/principal";
import {
  MANAGE_CANISTER_LOCALNET,
  TEST_USER,
  TEST_GROUP_ID,
} from "@/chain_cloud_assets/assets/js/config";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      loading: false,
      disabled: true,
      project: {
        id: 0,
        name: "",
        description: "",
        byGroupId: 0,
        imageData: "",
        url: "",
        canister: "",
        cycleFloor: 0,
      },
      type: "Public",
      fileName: "No file chosen…",
      imgurl: require("../../../../../assets/chain_cloud/menu/pic_group_avatar@2x.png"),
    };
  },
  computed: {
    ...mapGetters(["getManageCanister"]),
  },
  methods: {
    async saveFun() {
      if (this.disabled) {
        return;
      }
      let account = Principal.fromText(this.$route.params.user);
      let visibility =
        this.type == "Public" ? { Public: null } : { Private: null };
      let manageCanister = this.getManageCanister();
      if (!manageCanister) {
        throw "No login account";
      }
      this.loading = true;
      let canister = [];
      if (this.project.canister != "") {
        let canisterRes = JSON.parse(this.project.canister);
        for (let i = 0; i < canisterRes.length; i++) {
          try {
            canister.push(Principal.fromText(canisterRes[i]));
          } catch (err) {
            this.loading = false;
            throw "Invalid canister id";
          }
        }
      }
      let updateProjectRes = await manageCanister.updateProjectBasicInformation(
        account,
        BigInt(this.project.byGroupId),
        BigInt(this.project.id),
        this.project.name,
        this.project.description,
        visibility,
        this.project.url,
        this.project.cycleFloor,
        canister
      );
      if (updateProjectRes.Err) {
        this.loading = false;
        this.$Notice.info({
          title: "Modification failed:" + updateProjectRes.Err,
          background: true,
          duration: 3,
        });
        throw updateProjectRes.Err;
      }

      let enc = new TextEncoder();
      let imageStoreRes = await manageCanister.projectImageStore(
        account,
        BigInt(this.project.byGroupId),
        BigInt(this.project.id),
        Array.from(enc.encode(this.project.imageData))
      );
      if (imageStoreRes.Err) {
        this.loading = false;
        throw imageStoreRes.Err;
        return;
      }
      this.loading = false;
      this.$Notice.info({
        title: "Modified successfully",
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
          let enc = new TextEncoder();
          that.project.imageData = new TextDecoder().decode(
            Uint8Array.from(enc.encode(this.result))
          );
        };
        this.fileName = dt.files[i].name;
      }
    },
  },
  async created() {
    let account = Principal.fromText(this.$route.params.user);
    let groupId = Number(this.$route.params.groupId);
    let projectId = Number(this.$route.params.projectId);
    this.project.byGroupId = groupId;
    this.project.id = projectId;
    let canister = this.getManageCanister();
    let manage = manageCanister;
    if (canister) {
      manage = canister;
    }

    let getProjectRes = await manage.getProjectInfo(
      account,
      groupId,
      projectId
    );

    if (getProjectRes.Err) {
      throw getProjectRes.Err;
    }
    if (getProjectRes.Ok.length > 0) {
      if ("Private" in getProjectRes.Ok[0].visibility) {
        this.type = "Private";
      } else {
        this.type = "Public";
      }
      this.project.name = getProjectRes.Ok[0].name;
      this.project.description = getProjectRes.Ok[0].description;
      this.project.url = getProjectRes.Ok[0].git_repo_url;
      this.project.cycleFloor = getProjectRes.Ok[0].canister_cycle_floor;
      this.project.description = getProjectRes.Ok[0].description;
      let arr = [];
      for (let i = 0; i < getProjectRes.Ok[0].canisters.length; i++) {
        arr.push(getProjectRes.Ok[0].canisters[i].toString());
      }
      this.project.canister = JSON.stringify(arr);
    }
    for (let i = 0; i < getProjectRes.Ok[0].members.length; i++) {
      let opt = false;
      if ("Operational" in getProjectRes.Ok[0].members[i][1].authority) {
        opt = true;
      }
      if ("Write" in getProjectRes.Ok[0].members[i][1].authority) {
        opt = true;
      }
      if (
        manage.identity &&
        manage.identity.toString() ==
          getProjectRes.Ok[0].members[i][0].toString() &&
        opt
      ) {
        this.disabled = false;
      }
    }
    let imageData = await manageCanister.getProjectImage(
      account,
      groupId,
      projectId
    );
    this.project.imageData = new TextDecoder().decode(
      Uint8Array.from(imageData)
    );
  },
};
</script>
