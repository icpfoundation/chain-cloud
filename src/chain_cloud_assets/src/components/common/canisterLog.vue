<template>
  <div id="canister_log">
    <div class="canister_log_title">Canister Log</div>
    <div class="canister_log_content">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="100%"
        v-if="!noData"
        :align="'center'"
        :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
      >
        <el-table-column prop="transaction_time" label="time" width="200">
        </el-table-column>
        <el-table-column prop="canister" label="canister" width="280">
        </el-table-column>

        <el-table-column prop="caller" label="caller"> </el-table-column>
        <el-table-column prop="method_name" label="method"> </el-table-column>
        <el-table-column prop="memo" label="memo"> </el-table-column>
      </el-table>
      <el-empty :image-size="50" description="No data" v-else> </el-empty>
    </div>
  </div>
</template>

<script>
import { chainCloudLocal,chainCloud } from "../../../assets/js/actor";
import { formatDate } from "../../../assets/js/util";
import { Loading } from "element-ui";
export default {
  data() {
    return {
      tableData: [],
      noData: false,
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
      target: ".canister_log_content",
    });
    let principle = this.$store.getters.getPrinciple();
    let result = [];
    try {
      result = await chainCloud.getCanisterByPrinciple(principle);
    } catch (err) {
      console.log("Network connection failed, error reason:", err);
      return;
    }
    loadInstance.close();

    if (result.length == 0) {
      this.noData = true;
    }
    for (let i of result) {
      chainCloudLocal
        .getCanisterLastEvent(i.canister_id.toString(), 5)
        .then((res) => {
          res.forEach((v, k) => {
            this.tableData.push({
              transaction_time: formatDate(
                v.transaction_time,
                "yyyy-MM-dd hh:mm:ss"
              ),
              canister: v.canister.toString(),
              caller: v.caller.toString(),
              method_name: v.method_name,
              memo: v.memo,
            });
          });
        });
    }
  },
};
</script>

<style scoped>
#canister_log {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.canister_log_title {
  display: flex;
  font-size: 15px;
  font-weight: 900;
  align-items: center;
  height: 8%;
  width: 100%;
  background-color: white;
  text-indent: 10px;
}

.canister_log_content {
  display: flex;
  height: 85%;
  width: 96%;
  background: white;
  margin-left: 1%;
  border-radius: 10px;
  margin-top: 10px;
  padding: 1%;
}
.el-empty {
  width: 100%;
  height: 100%;
}
.el-table__row > td {
  border: none;
}
</style>
