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
  margin-bottom: 10px;
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
        <span>New group</span>
      </div>

      <div class="line"></div>

      <div class="contentbox">
        <Spin fix size="large" v-show="loading">
          <Icon type="ios-loading" size="18" class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
        <div class="left">
          <div class="wordStyle">
            Groups allow you to manage and collaborate across multiple projects.
            Members of a group have access to all of its projects.
          </div>
          <div class="wordStyle">
            Groups can also be nested by creating subgroups.
          </div>
          <div class="wordStyle">
            Projects that belong to a group are prefixed with the group
            namespace. Existing projects may be moved into a group.
          </div>
        </div>
        <div class="right">
          <!-- <div class="nameItem">
            <span>Group Id</span>
            <Input
              placeholder="Production group"
              style="width: 320px; margin-top: 10px"
              :clearable="true"
              v-model="group['id']"
            />
          </div> -->
          <div class="nameItem">
            <span>Group name</span>
            <Input
              placeholder="Production group"
              style="width: 720px; margin-top: 10px"
              :clearable="true"
              v-model="group['name']"
            />
          </div>
          <div class="nameItem">
            <span>Group url (optional)</span>
            <Input
              placeholder="my-awesome-group"
              style="width: 720px; margin-top: 10px"
              :clearable="true"
              v-model="group['url']"
            />
          </div>
          <div class="description">
            <span>Group description (optional)</span>
            <Input
              type="textarea"
              style="width: 100%; margin-top: 10px"
              placeholder="Multiline input"
              v-model="group['description']"
            />
          </div>
          <div class="description">
            <span>Group avatar</span>
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
                      >The group and its projects can only be viewed by
                      members.</span
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
                      >The group and any pubilc projects can be viewed without
                      any authentication.</span
                    >
                  </Radio>
                </div>
              </Radio-group>
            </div>
          </div>
          <div class="saveButton" @click="saveFun">Create group</div>
        </div>
      </div>
    </div>

    <div class="lineBottom"></div>
  </div>
</template>
<script>
import { manageCanister } from "@/chain_cloud_assets/assets/js/actor";
import { Principal } from "@dfinity/principal";
import { mapGetters } from "vuex";
import { Loading } from "element-ui";
export default {
  data() {
    return {
      loading: false,
      type: "Public",
      fileName: "No file chosen…",
      imgurl: require("../../../../../assets/chain_cloud/menu/pic_group_avatar@2x.png"),
      group: {
        id: 0,
        name: "",
        description: "",
        visibility: null,
        create_time: 0,
        projects: [],
        members: [],
        url: "",
      },
    };
  },
  methods: {
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

      this.group.id = Number(this.group.id);

      let account = manageCanister.identity;
      this.loading = true;
      // let addUserRes = await manageCanister.addUser(account.toString(), {
      //   Public: null,
      // });
      // if (addUserRes.Err) {
      //   console.log(addUserRes.Err);
      // }
      let getUserInfoRes = await manageCanister.getUserInfo(account);

      let nonce = BigInt(1);
      for (let i = 0; i < getUserInfoRes.Ok.groups.length; i++) {
        if (nonce < getUserInfoRes.Ok.groups[i][0]) {
          nonce = getUserInfoRes.Ok.groups[i][0];
        }
      }
      nonce = nonce + BigInt(1);
      this.group.id = nonce;
      let currentTime = new Date().getTime();
      this.group.create_time = currentTime;
      this.group.visibility =
        this.type == "Public" ? { Public: null } : { Private: null };
      this.group.members = [
        [
          account,
          {
            name: "management",
            authority: { Operational: null },
            identity: account,
            join_time: currentTime,
            expiration_time: [],
          },
        ],
      ];

      let addGroupRes = await manageCanister.addGroup(account, this.group);
      if (addGroupRes.Err) {
        this.loading = false;
        let err = "Add failed: " + addGroupRes.Err;
        this.$Notice.info({
          title: err,
          background: true,
          duration: 3,
        });
        return;
      }
      let enc = new TextEncoder();
      let imageStoreRes = await manageCanister.groupImageStore(
        account,
        this.group.id,
        Array.from(enc.encode(this.imgurl))
      );
      if (imageStoreRes.Err) {
        console.log("Picture storage failed", imageStoreRes.Err);
      }
      this.loading = false;
      this.$Notice.info({
        title: "Successfully added",
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
  computed: {
    ...mapGetters(["getManageCanister"]),
  },
  created() {},
};
</script>
