<template>
  <div id="detail">
    <div class="detail_title">
      <label>canisterLog</label>
    </div>
    <div class="detail_content">
      <div class="detail_content_left">
        <label class="detail_content_left_title">Basic Infomation</label>
        <p><label>host Name: </label> aaa-bbb-ccc-ddd</p>
        <p><label>host Location: </label> aaa-bbb-ccc-ddd</p>
        <p><label>Subnet Name: </label> {{ canister.subnet }}</p>
        <p><label>Subnet Type: </label>{{ canister.subnet }}</p>
        <p><label>Canistr ID: </label>{{ canister.canisterId }}</p>
        <p><label>Canister Name: </label> {{ canister.name }}</p>
        <p><label>Cycle Wallet ID: </label>{{ canister.controller }}</p>
        <p><label>Owner: </label> {{ canister.owner }}</p>
        <p><label>Versions: </label> aaa-bbb-ccc-ddd</p>
      </div>
      <div class="detail_content_right">
        <div class="detail_content_right_title">
          <p>Assest Infomaction</p>
          <p>
            Create Time: {{ canister.createTime }} &emsp; Update Time:
            {{ canister.updateTime }}
          </p>
          <p>Cycle wallet balance: {{ canister.balance }}</p>
        </div>
        <div class="detail_content_right_bottom">
          <div id="detail_content_right_bottom_pie"></div>
          <div class="detail_content_right_bottom_list">
            <tr v-for="item in service" :key="item[0]">
              <td>{{ item[0] }}</td>
              <td>{{ item[1] }}</td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { chainCloudLocal } from "../../../assets/js/actor";
import { formatDate } from "../../../assets/js/util";
import chainCloudApi from "../../../assets/js/request";
import { generateTestData } from "../../../assets/js/actor.test";
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);
export default {
  data() {
    return {
      service: [],
      canister: {
        canisterId: "",
        status: "",
        controller: "",
        memorySize: 0,
        balance: 0,
        owner: "",
        createTime: "",
        updateTime: "",
        subnet: "",
        name: "",
      },
      option: {
        title: {
          text: "Canister Cost Distribution",
          left: "left",
          textStyle: {
            fontWeight: 900,
            fontSize: 13,
          },
        },
        color: ["#0071ff", "#ff7b5e", "#ffc800", "#00adee", "#00df9a"],

        tooltip: {
          trigger: "item",
        },
        legend: {
          show: false,
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "70%",
            data: [
              { value: 0, name: "" },
              { value: 0, name: "" },
              { value: 0, name: "" },
              { value: 0, name: "" },
              { value: 0, name: "" },
            ],

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  beforeCreate() {
    let principle = this.$store.getters.getPrinciple();
    if (!principle) {
      this.$router.replace("/404");
    }
  },
  async mounted() {
    let principle = this.$store.getters.getPrinciple();
    // await generateTestData(chainCloudLocal,principle)
    var params = this.$route.query;
    let result = this.$store.getters.getCommitCanister();

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
      if (result[i].canisterId == params.canisterId) {
        this.canister.canisterId = result[i].canisterId;
        this.canister.controller = result[i].controllerId;
        this.canister.owner = principle;
        this.canister.subnet = result[i].subnetName;
        this.canister.name = result[i].name;
        this.canister.createTime = result[i].createtimestamp;
        this.canister.updateTime = result[i].updateTimestamp;
        break;
      }
    }
    let event = await chainCloudLocal.getCanisterEventByTime(
      params.canisterId,
      new Date().getTime() - 24 * 3600 * 1000
    );
    let map = new Map();
    for (let i of event) {
      if (!map.get(i.method_name)) {
        map.set(i.method_name, 1);
        continue;
      }
      map.set(i.method_name, map.get(i.method_name) + 1);
    }
    var array = Array.from(map);
    array.sort(function (a, b) {
      return b[1] - a[1];
    });

    let counted = 0;
    let len = event.length;
    for (let i = 0; i < array.length; i++) {
      if (i == 4) {
        break;
      }
      array[i][0] = `Service for ${array[i][0]}`;
      this.option.series[0].data[i].value = array[i][1];
      this.option.series[0].data[i].name = array[i][0];
      this.service.push(array[i]);
      counted = counted + array[i][1];
    }

    if (len <= 4) {
      this.option.series[0].data[len].value = 0;
      this.option.series[0].data[len].name = "Service for other";
      this.service.push(["Service for other", 0]);
    } else {
      this.option.series[0].data[4].value = len - counted;
      this.option.series[0].data[4].name = "Service for other";
      this.service.push(["Service for other", 0]);
    }

    var chartDom = document.getElementById("detail_content_right_bottom_pie");
    var myChart = echarts.init(chartDom);
    myChart.setOption(this.option);
  },
};
</script>
<style scoped>
p {
  margin: 0;
  padding: 0;
}
#detail {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.detail_title {
  display: flex;
  font-size: 15px;
  font-weight: 900;
  align-items: center;
  height: 8%;
  width: 100%;
  background-color: white;
}
.detail_title label {
  margin-left: 3%;
  font-size: 15px;
  font-weight: 900;
}
.detail_content {
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: space-around;
}
.detail_content_left {
  display: flex;
  width: 49%;
  height: 60%;
  flex-wrap: wrap;
  background: white;
  padding-bottom: 2%;
  margin-top: 10px;
  border-radius: 10px;
}
.detail_content_left p {
  display: flex;
  width: 90%;
  color: #646363;
  font-size: 12px;
  align-items: center;
  margin-left: 5%;
}
.detail_content_left p label {
  width: 25%;
}
.detail_content_right {
  display: flex;
  width: 49%;
  height: 98%;
  flex-wrap: wrap;
  margin-top: 1%;
}
.detail_content_left_title {
  font-size: 15px;
  font-weight: 900;
  margin-top: 1%;
  margin-left: 1%;
}
.detail_content_right_title {
  font-size: 15px;
  font-weight: 900;
  display: flex;
  width: 100%;
  height: 20%;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 10px;
}
.detail_content_right_title p:first-child {
  font-size: 15px;
  text-indent: 5px;
}
.detail_content_right_title p:first-child ~ p {
  display: block;
  color: #646363;
  font-size: 12px;
  width: 100%;
  text-indent: 5px;
}

.detail_content_right_bottom {
  display: flex;
  height: 78%;
  width: 100%;
  flex-wrap: wrap;
  border-radius: 10px;

  background-color: white;
}

#detail_content_right_bottom_pie {
  display: flex;
  width: 100%;
  height: 60%;
  border-radius: 10px 10px 0 0;
}
.detail_content_right_bottom_list {
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 0;
  background-color: white;
  flex-wrap: wrap;
  padding-bottom: 10px;
  border-radius: 0 0 10px 10px;
}
.detail_content_right_bottom_list tr {
  border: 1px solid rgb(241, 241, 241);
  display: flex;
  width: 90%;
  margin-left: 5%;
}
.detail_content_right_bottom_list tr td {
  display: flex;
  width: 50%;
  align-items: center;
  font-size: 13px;
  color: #646363;
  text-indent: 10px;
}
</style>