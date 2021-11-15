<template>
  <div id="canister">
    <div class="canister_content">
      <div class="canister_content_overview">Overview</div>
      <div class="canister_content_top">
        <div class="canister_content_left">
          <div class="canister_content_top_title">
            <span>Activity Canister</span>
            <span>
              <label @click="viewAll"> View All </label>
            </span>
          </div>
          <div class="canister_content_top_content">
            <ul class="canister_content_top_ul" v-if="!noData">
              <li v-for="item in canister" :key="item.id">
                <p>{{ item.canister_id }}</p>
                <p>subnet: {{ item.subnet }}</p>
                <p>{{ item.create_time }}</p>
              </li>
            </ul>
            <el-empty :image-size="50" description="No data" v-else> </el-empty>
          </div>
        </div>
        <div class="canister_content_top_right">
          <p>
            <span
              >Canister:<br />
              {{ canisterCount }}
            </span>
            <span>Subnet:<br />{{ subnetCount }}</span>
          </p>
          <p>
            <label>
              Cycle wallet: <span>{{ cycleWallet }}</span></label
            >
          </p>
        </div>
      </div>
      <div class="canister_content_bottom">
        <div class="canister_content_bottom_title">
          <span>Activity Record</span>
          <span>
            <label> More </label>
          </span>
        </div>
        <div class="canister_content_bottom_content">
          <el-table
            :data="tableData"
            style="width: 100%; line-height: 13px"
            :row-style="{ height: '20px' }"
            :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
            v-if="!noData"
          >
            <el-table-column prop="event" label="Behave" width="280">
            </el-table-column>
            <el-table-column prop="time" label="Time" align="right">
            </el-table-column>
          </el-table>
          <el-empty :image-size="50" description="No data" v-else> </el-empty>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate, past } from "../../../assets/js/util";
import { chainCloudLocal } from "../../../assets/js/actor";
import { generateTestData } from "../../../assets/js/actor.test";
import { getCanisterInfo } from "../../../assets/js/agent";
import { Loading } from "element-ui";
import chainCloudApi from "../../../assets/js/request";
export default {
  name: "canister",
  data() {
    return {
      canister: [],
      noData: false,
      canisterCount: 0,
      subnetCount: 0,
      tableData: [],
      size: 5,
      cycleWallet: "********",
    };
  },
  beforeCreate() {
    let principle = this.$store.getters.getPrinciple();
    if (!principle) {
      this.$router.replace("/404");
    }
  },
  async mounted() {
    let topInstance = Loading.service({
      target: ".canister_content_top_content",
    });
    let bottomInstance = Loading.service({
      target: ".canister_content_bottom_content",
    });
    let principle = this.$store.getters.getPrinciple();

    // let subnet = await getCanisterInfo("z73ze-xqaaa-aaaah-aazsa-cai");
    // console.log("subnet", subnet);

     //await generateTestData(chainCloudLocal,principle)
    console.log(
      await chainCloudApi.getCanisterInfo("dtems-oqaaa-aaaag-qaala-cai")
    );
    let result;
    try {
      result = await chainCloudLocal.getCanisterByPrinciple(
        principle.toString()
      );
    } catch (err) {
      console.log("Network connection failed, error reason:", err);
      return;
    }

    topInstance.close();
    bottomInstance.close();
    if (result.length == 0) {
      this.noData = true;
    }
    this.$store.dispatch("setCommitCanisterConfig", result);
    let set = new Set();
    if (result.length > 0) {
      this.cycleWallet = result[0].controller.toString();
    }
    this.canisterCount = result.length;
    for (let i = 0; i < result.length; i++) {
      if (i <= this.size) {
        Object.defineProperty(result[i], "id", {
          value: i,
          writable: true,
        });
        this.canister.push(result[i]);
        this.tableData.push({
          event: `add canister  ${result[i].canister_id.toString()}`,
          time: formatDate(result[i].create_time, "yyyy-MM-dd hh:mm:ss"),
        });
        this.canister[i].create_time = past(result[i].create_time);
      }
      set.add(result[i].subnet);
    }

    this.subnetCount = set.size;
  },
  methods: {
    viewAll() {
      this.$router.replace("/sidebar/viewall");
    },
  },
};
</script>
<style  scoped>
body {
  margin: 0;
}
p {
  margin: 0;
  padding: 0;
}
#canister {
  display: flex;
  width: 100%;
  height: 100%;
}

.canister_content {
  height: 100%;
  width: 84%;
  float: right;

  background-color: rgb(239, 241, 241);
  display: flex;
  flex: 5;
  flex-wrap: wrap;
}
.canister_content_overview {
  display: flex;
  width: 100%;
  font-size: 15px;
  font-weight: 900;
  height: 8%;
  background-color: white;
  text-indent: 10px;
  align-items: center;
}
.canister_content_top {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: 35%;
  justify-content: space-around;
}
.canister_content_left {
  background-color: white;
  display: flex;
  width: 72%;
  flex-wrap: wrap;
  border-radius: 10px;
}
.canister_content_top_right {
  background-color: white;
  display: flex;
  width: 25%;
  flex-wrap: wrap;
  border-radius: 10px;
}
.canister_content_top_title,
.canister_content_bottom_title {
  display: flex;
  width: 100%;
  height: 15%;
  float: left;
  font-size: 12px;
  align-items: center;
  justify-content: space-around;
}

.canister_content_top_title span,
.canister_content_bottom_title span {
  display: flex;
  width: 47.5%;
  align-items: center;
}
.canister_content_top_title span:first-child,
.canister_content_bottom_title span:first-child {
  height: 60%;
  font-size: 15px;
  font-weight: 900;
}
.canister_content_top_title span:last-child,
.canister_content_bottom_title span:last-child {
  height: 40%;
  justify-content: flex-end;
}
.canister_content_top_title span:last-child label,
.canister_content_bottom_title span:last-child label {
  color: rgb(18, 135, 231);
  font-weight: 900;
  cursor: pointer;
}

.canister_content_top_content {
  display: flex;
  width: 100%;
  align-content: center;
  justify-items: center;
  height: 83%;
}
.canister_content_top_ul {
  margin: 0;
  padding: 0;
}
.canister_content_top_ul {
  list-style: none;
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-around;
}
.canister_content_top_ul li {
  display: flex;
  border-radius: 5px;
  line-height: 10px;
  width: 32%;
  height: 45%;
  background-color: #f3f3f3;
  flex-wrap: wrap;
  align-content: center;
}
.canister_content_top_ul li p {
  margin-left: 6%;
  align-items: center;
  display: flex;
  width: 88%;
  height: 25%;
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
.canister_content_bottom {
  display: flex;
  height: 53%;
  width: 98.5%;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  margin-left: 0.75%;
  border-radius: 10px;
  margin-top: 0.5%;
}
.canister_content_bottom_title,
.canister_content_bottom_content {
  width: 100%;
}
.canister_content_bottom_content {
  height: 85%;
  border-radius: 10px;
  width: 96%;
  background-color: white;
}
.canister_content_top_right p:first-child {
  display: flex;

  width: 100%;
  height: 30%;
}
.canister_content_top_right p:first-child span {
  margin-left: 5%;
  display: flex;
  width: 50%;
  margin: 2% 0 0 5%;
  font-size: 15px;
  line-height: 30px;
}
.canister_content_top_right p:last-child {
  display: flex;
  flex: 1;
  border-top: 1px solid rgb(235, 235, 235);
  width: 100%;
  height: 70%;
  font-size: 15px;
}
.canister_content_top_right p:last-child label {
  font-size: 15px;
  margin: 3% 0 0 5%;
}
.canister_content_top_right p:last-child label span {
  font-size: 12px;
}
.el-table__header-wrapper {
  background-color: rgb(239, 241, 241) !important;
  z-index: 2;
}
.el-table thead {
  color: black !important;
}
.el-empty {
  width: 100%;
  height: 100%;
}
</style>