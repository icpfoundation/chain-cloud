<template>
  <div id="viewAll">
    <div class="viewAll_title">viewAll</div>
    <div class="canister_content_top_content">
      <ul class="canister_content_top_ul" v-if="!noData">
        <li v-for="item in canister" :key="item.id">
          <p>{{ item.canisterId }}</p>
          <p>subnet: {{ item.subnetName }}</p>
          <p>{{ item.createtimestamp }}</p>
        </li>
      </ul>
      <el-empty :image-size="50" description="No data" v-else> </el-empty>
    </div>
  </div>
</template>

<script>
import chainCloudApi from "../../../assets/js/request";
import { Loading } from "element-ui";
export default {
  data() {
    return {
      canister: [],
      noData: false,
    };
  },
  created() {
    let principle = this.$store.getters.getPrinciple();
    if (!principle) {
      this.$router.replace("/404");
    }
    this.principle = principle;
  },
  async mounted() {
    let topInstance = Loading.service({
      target: ".canister_content_top_content",
    });
    let result = this.$store.getters.getCommitCanister();
    let principle = this.$store.getters.getPrinciple();
    if (!result) {
      try {
        result = await chainCloudApi.getAllCanister(principle);
        this.$store.dispatch("setCommitCanisterConfig", result);
      } catch (err) {
        console.log("failed to getAllCanister:", err);
        return;
      }
    }

    for (let i = 0; i < result.length; i++) {
      this.canister.push(result[i]);
    }
    topInstance.close();
    if (this.canister.length == 0) {
      this.noData = true;
    }
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
#viewAll {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.viewAll_title {
  display: flex;
  font-size: 15px;
  font-weight: 900;
  align-items: center;
  height: 8%;
  width: 100%;
  background-color: white;
  text-indent: 10px;
}
.canister_content_top_content {
  display: flex;
  width: 98%;
  align-content: center;
  justify-items: center;
  height: 88%;
  margin-left: 1%;
  background-color: white;
  border-radius: 10px;
}
.canister_content_top_ul {
  margin: 0;
  padding: 0;
}
.canister_content_top_ul {
  list-style: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.canister_content_top_ul li {
  display: inline-block;
  border-radius: 5px;
  line-height: 10px;
  width: 30%;
  height: 25%;
  margin-left: 2.65%;
  margin-top: 1%;
  background-color: #f3f3f3;
  flex-wrap: wrap;
  align-content: center;
}
.canister_content_top_ul li p {
  margin-left: 6%;
  align-items: center;
  display: flex;
  width: 88%;
  height: 20%;
  margin-top: 4%;
}
.canister_content_top_ul li p:first-child {
  font-size: 15px;
  font-weight: 600;
}
.canister_content_top_ul li p:nth-child(2) {
  font-size: 13px;
  font-weight: 400;
}
.canister_content_top_ul li p:last-child {
  font-size: 12px;
  color: rgb(161, 161, 161);
}
.el-empty {
  width: 100%;
  height: 100%;
}
</style>