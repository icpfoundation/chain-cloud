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
}

.footertitle {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
}

.footerInfoItem {
  margin-top: 10px;
  font-size: 14px;
  color: #666666;
  display: flex;
  align-items: center;
}

.infoItem {
  width: 135px;
  margin-right: 10px;
  cursor: pointer;
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
  color: #1776FF;
  display: flex;
  align-items: center;
  width: 135px;
  height: 36px;
  background: #E7F1FF;
  border-radius: 4px;
  border: 1px solid #D6E6FE;
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

.imgbox {
  margin-top: 14px;
  display: flex;
  align-items: center;
}

.imgbox img {
  margin-left: 20px;
  width: 24px;
  height: 24px;
}

.line {
  width: 100%;
  height: 1px;
  background: #E5E5E5;
}

.netCom {
  margin: 0 auto;
  width: 1200px;
  height: 60px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #666666;
}
</style>

<template>
  <div class="footerApp">
    <div class="footertop">
      <div class="footItem">
        <span class="footertitle">TEAM</span>
        <div class="footerInfoItem">
          <div class="infoItem" @click="topagesFun(1)">Group</div>
          <div class="infoItem" @click="topagesFun(2)">Project</div>
        </div>
        <div class="footerInfoItem">
          <div class="infoItem" @click="topagesFun(3)">New group</div>
          <div class="infoItem" @click="topagesFun(4)">New project</div>
        </div>
        <div class="start">
          <span class="coding">Easy coding</span>
          <div class="startButton">
            <span>Get Start</span>
            <img src="../../../assets/img/home/startbtn.png" alt="">
          </div>
        </div>
      </div>
      <div class="footItem"></div>
      <div class="footItem footItemImgBox">
        <img src="../../../assets/chain_cloud/teamscan/nav_logo@2x.png" alt="" class="footItemLogo">
        <div class="footItemImgBoxInfo">
          <span>Follow us</span>
          <div class="imgbox">
            <img src="../../../assets/chain_cloud/teamscan/wechat@2x.png" alt="">
            <img src="../../../assets/chain_cloud/teamscan/twitter@2x.png" alt="">
            <img src="../../../assets/chain_cloud/teamscan/facebook@2x.png" alt="">
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
    return {
    }
  },
  methods: {
    topagesFun(type) {
      if (type === 1) {
        this.$router.push({
          name: "group_index"
        })
      } else if (type === 2) {
        this.$router.push({
          name: "project_index"
        })
      } else if (type === 3) {
        this.$router.push({
          name: "group_add"
        })
      } else if (type === 4) {
        this.$router.push({
          name: "project_add"
        })
      }
    }
  },
  created() {
  },
}
</script>
