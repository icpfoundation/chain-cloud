<style scoped>
.footerApp {
  width: 100%;
  background: white;
}

.footertop {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  align-items: center;
}

.footItem {
  width: 400px;
  padding: 40px 0;
  display: flex;
}
.footItemBox {
  font-size: 14px;
  color: #666666;
}
.footertitle {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  margin-bottom: 20px;
}

.footerInfoItem {
  font-size: 14px;
  color: #666666;
  display: flex;
  align-items: center;
}

.infoItem {
  width: 135px;
  cursor: pointer;
  margin-bottom: 5px;
}
.infoItem:hover {
  color: #1776ff;
}
.infoItem:last-child {
  margin-bottom: 0;
}
.start {
  display: flex;
  align-items: center;
  margin-top: 30px;
}

.startButton {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #1776ff;
  display: flex;
  align-items: center;
  width: 135px;
  height: 36px;
  background: #e7f1ff;
  border-radius: 4px;
  border: 1px solid #d6e6fe;
  justify-content: center;
  cursor: pointer;
}

.startButton img {
  width: 16px;
  height: 16px;
  margin-left: 10px;
}

.coding {
  width: 135px;
  margin-right: 10px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}

.footItemImgBox {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  justify-content: space-between;
}

.footItemLogo {
  width: 155px;
  height: 24px;
}

.footItemImgBoxInfo {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 60px;
}

.imgBox {
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.imgBox:last-child {
  margin-bottom: 0;
}
.imgboxImg {
  margin-right: 10px;
  width: 16px;
  height: 16px;
}
.imgBoxInfo {
  width: 0.5rem;
}
.line {
  width: 100%;
  height: 1px;
  background: #e5e5e5;
}

.netCom {
  margin: 0 auto;
  width: 1200px;
  height: 60px;
  background: #ffffff;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
  justify-content: center;
}
</style>

<template>
  <div class="footerApp">
    <div class="footertop">
      <div class="footItem">
        <div class="footItemBox">
          <div class="footertitle">TEAM</div>
          <div class="infoItem" @click="topagesFun(1)">Group</div>
          <div class="infoItem" @click="topagesFun(2)">Project</div>
          <div class="infoItem" @click="topagesFun(3)">New group</div>
          <div class="infoItem" @click="topagesFun(4)">New project</div>
        </div>
        <div class="footItemBox">
          <div class="footertitle">EASY CODING</div>
          <div class="infoItem" @click="topagesFun(5)">Code editor</div>
        </div>
      </div>
      <div class="footItem"></div>
      <div class="footItem footItemImgBox">
        <img
          src="../../../assets/chain_cloud/teamscan/nav_logo@2x.png"
          alt=""
          class="footItemLogo"
        />
        <div class="footItemImgBoxInfo">
          <div class="imgBox">
            <img
              src="../../../assets/chain_cloud/teamscan/github@2x.png"
              alt=""
              class="imgboxImg"
            />
            <div class="imgBoxInfo">
              <a href="https://github.com/icpfoundation" target="_blank"
                >GitHub</a
              >
            </div>
          </div>
          <div class="imgBox">
            <img
              src="../../../assets/chain_cloud/teamscan/twitter@2x.png"
              alt=""
              class="imgboxImg"
            />
            <div class="imgBoxInfo">
              <a href="https://twitter.com/ICP_ChainCloud" target="_blank"
                >Twitter</a
              >
            </div>
          </div>
          <div class="imgBox">
            <img
              src="../../../assets/chain_cloud/teamscan/youtube@2x.png"
              alt=""
              class="imgboxImg"
            />
            <div class="imgBoxInfo">
              <a
                href="https://www.youtube.com/channel/UC5upoHevUM_ztfqu884odow"
                target="_blank"
                >YouTube</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="netCom">© 2022 chaincloud.com</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    topagesFun(type) {
      if (type === 1) {
        this.$router.push({
          name: "group_index",
        });
      } else if (type === 2) {
        this.$router.push({
          name: "project_index",
        });
      } else if (type === 3) {
        this.$router.push({
          name: "group_add",
        });
      } else if (type === 4) {
        this.$router.push({
          name: "project_add",
        });
      } else if (type === 5) {
        let principle = window.localStorage.getItem("principleString");
        if (principle == undefined || principle == "" || principle == null) {
          this.$message({
            showClose: true,
            message: "Warning, should login first",
            type: "warning",
          });
          return;
        }

        let targetUrl =
          "https://k4qes-raaaa-aaaan-qah5q-cai.raw.ic0.app/#principal=" +
          principle;
        window.open(targetUrl);
      }
    },
  },
  created() {},
};
</script>
