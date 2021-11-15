<template>
  <div id="hosteslist">
    <div class="hosteslist_title">Hostes List</div>
    <div class="hosteslist_content">
      <p class="hosteslist_content_title"><label>Hostes List </label></p>
      <div class="hosteslist_content_content">
        <el-table
          :data="tableData.slice(startIndex, startIndex + pageSize)"
          style="width: 100%"
          :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
          v-if="!noData"
        >
          <el-table-column prop="name" label="Name" width="180">
          </el-table-column>
          <el-table-column prop="canisterId" label="Canister ID " width="280">
          </el-table-column>
          <el-table-column prop="tearm" label="Tearm"> </el-table-column>
          <el-table-column prop="lastTime" label="LastTime" width="280">
          </el-table-column>
          <el-table-column prop="operate" label="Operate">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >Detail</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-empty :image-size="50" description="No data" v-else> </el-empty>
      </div>
      <span class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="tableData.length"
          :page-size="pageSize"
          @next-click="nextClick"
          @prev-click="prevClick"
          @current-change="currentChange"
        >
        </el-pagination>
      </span>
    </div>
  </div>
</template>

<script>
import { createActor } from "../../../../declarations/chain_cloud";
import { Principal } from "@dfinity/principal";
import { chainCloudLocal } from "../../../assets/js/actor";
import { formatDate, past } from "../../../assets/js/util";
import { Loading } from "element-ui";
export default {
  name: "hostesList",
  data() {
    return {
      noData: false,
      pageSize: 5,
      startIndex: 0,
      tableData: [],
    };
  },
  beforeCreate() {
    let principle = this.$store.getters.getPrinciple();
    if (!principle) {
      this.$router.replace("/404");
    }
  },
  async mounted() {
    let loadInstance = Loading.service({
      target: ".hosteslist_content_content",
    });
    let principle = this.$store.getters.getPrinciple();
    let result;
    try {
      result = await chainCloudLocal.getCanisterByPrinciple(
        principle.toString()
      );
    } catch (err) {
      console.log("Network connection failed, error reason:", err);
      return;
    }
    loadInstance.close();
    if (result.length == 0 || !result) {
      this.noData = true;
      return;
    }
    for (let i of result) {
      this.tableData.push({
        name: i.canister_id.toString(),
        canisterId: i.canister_id.toString(),
        tearm: "*****",
        lastTime: formatDate(i.create_time, "yyyy-MM-dd hh:mm:ss"),
      });
    }
  },
  methods: {
    nextClick(e) {
      this.startIndex = this.startIndex + this.pageSize;
    },
    prevClick(e) {
      this.startIndex = this.startIndex - this.pageSize;
    },
    currentChange(e) {
      this.startIndex = (e - 1) * this.pageSize;
    },
    handleClick(value) {
      this.$router.push({
        name: "detail",
        query: { canisterId: value.canisterId },
      });
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
#hosteslist {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.hosteslist_title {
  display: flex;
  font-size: 15px;
  font-weight: 900;
  align-items: center;
  height: 8%;
  width: 100%;
  background-color: white;
  text-indent: 10px;
}
.hosteslist_content {
  display: flex;
  height: 90%;
  width: 98%;
  flex-wrap: wrap;
  margin-left: 1%;
  flex-direction: row;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
}
.hosteslist_content_title {
  display: flex;
  width: 100%;
  height: 10%;
  align-items: center;
  float: left;
  border-radius: 10px 10px 0 0;
}
.hosteslist_content_title label {
  margin-left: 10px;
  font-size: 15px;
  font-weight: 900;
}

.hosteslist_content_content {
  display: flex;
  width: 98%;
  margin-left: 1%;
  height: 77%;
  float: left;
  flex-wrap: wrap;
}

.pagination {
  display: flex;
  width: 100%;
  height: 13%;
  justify-content: flex-end;
  background-color: white;
  border-radius: 0 0 10px 10px;
}
.el-empty {
  width: 100%;
  height: 100%;
}
</style>