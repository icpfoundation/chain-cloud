<template>
  <div id="mertirc">
    <div class="mertirc_title">
      <label> Canister Mertric </label>
      <div>
        <el-button
          @click="drawer = true"
          type="primary"
          style="margin-left: 16px"
        >
          select canister
        </el-button>

        <el-drawer
          title="canister list"
          custom-class="canister_list"
          :visible.sync="drawer"
          size="20%"
          :modal="false"
          :show-close="false"
          style="font-size: 15px;"
        >
          <div class="canisterList">
            <p
              v-for="item in canister"
              :key="item.id"
              @click="selectCanister(item.canisterId)"
            >
              {{ item.canisterId }}
            </p>
          </div>
        </el-drawer>
      </div>
    </div>

    <div class="mertirc_content">
      <ul>
        <li id="loadAvg"></li>
        <li id="cpuProfile"></li>
        <li id="memoryProfile"></li>
        <li id="networkBandwith"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { chainCloudLocal } from "../../../assets/js/actor";
import chainCloudApi from "../../../assets/js/request";
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);
export default {
  data() {
    return {
      canister: [],
      drawer: false,
      innerDrawer: false,
      loadAvgOption: {
        title: {
          text: "Load Avg",
          textStyle: {
            fontSize: 15,
          },
        },
        backgroundColor: "#fff",
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: [
            {
              name: "1 min",
              itemStyle: {
                color: "#0082ff",
              },
            },
            {
              name: "5 min",
              itemStyle: {
                color: "#43dda1",
              },
            },
            { name: "15 min" },
          ],
          bottom: 0,
          icon: "rect",
          itemHeight: 3,
        },
        grid: {
          left: "4%",
          right: "4%",
          bottom: "10%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {
              show: false,
            },
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "1 min",
            type: "line",
            stack: "Total",
            symbol: "none",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lineStyle: {
              color: "#0082ff",
            },
          },
          {
            name: "5 min",
            type: "line",
            stack: "Total",
            symbol: "none",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lineStyle: {
              color: "#43dda1",
            },
          },
          {
            name: "15 min",
            type: "line",
            stack: "Total",
            symbol: "none",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
        ],
      },
      cpuProfileOption: {
        title: {
          text: "CPU Profile",
          textStyle: {
            fontSize: 15,
          },
        },
        backgroundColor: "#fff",
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["CPU Profile"],
          bottom: 0,
          icon: "rect",
          itemHeight: 3,
          itemStyle: {
            color: "#43dda1",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {
              show: false,
            },
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
          ],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            interval: "auto",
            formatter: function (value) {
              value = value * 100;
              return `${value} %`;
            },
          },
        },
        series: [
          {
            name: "CPU Profile",
            type: "line",
            stack: "Total",
            symbol: "none",
            data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
            lineStyle: {
              color: "#43dda1",
            },
          },
        ],
      },
      memoryProfileOption: {
        title: {
          text: "Memory Profile",
          textStyle: {
            fontSize: 15,
          },
        },
        backgroundColor: "#fff",
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: [
            {
              name: "含缓存",
              itemStyle: {
                color: "#43dda1",
              },
            },
            {
              name: "不含缓存",
              itemStyle: {
                color: "#0082ff",
              },
            },
          ],
          bottom: 0,
          icon: "rect",
          itemHeight: 3,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {
              show: false,
            },
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
          ],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            interval: "auto",
            formatter: "{value} %",
          },
        },
        series: [
          {
            name: "含缓存",
            type: "line",
            stack: "Total",
            symbol: "none",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lineStyle: {
              color: "#43dda1",
            },
          },
          {
            name: "不含缓存",
            type: "line",
            stack: "Total",
            symbol: "none",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lineStyle: {
              color: "#0082ff",
            },
          },
        ],
      },
      networkBandwithOption: {
        title: {
          text: "Network Bandwith",
          textStyle: {
            fontSize: 15,
          },
        },
        backgroundColor: "#fff",
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: [
            {
              name: "Receive",
              itemStyle: {
                color: "#43dda1",
              },
            },
            {
              name: "Send",
              itemStyle: {
                color: "#fac858",
              },
            },
          ],
          bottom: 0,
          icon: "rect",
          itemHeight: 3,
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "10%",

          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {
              show: false,
            },
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
          ],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            show: true,
            interval: "auto",
            formatter: function (value) {
              if (value > 1024 * 1024) {
                return `${(value / 1024 / 1024 / 3600).toFixed(2)} Mbps`;
              }
              if (value > 1024) {
                return `${(value / 1024 / 3600).toFixed(2)} Kbps`;
              }
              return `${((value * 8) / 3600).toFixed(2)}  bps`;
            },
          },
        },
        series: [
          {
            name: "Receive",
            type: "line",
            stack: "Total",
            symbol: "none",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lineStyle: {
              color: "#43dda1",
            },
          },
          {
            name: "Send",
            type: "line",
            stack: "Total",
            symbol: "none",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            lineStyle: {
              color: "#fac858",
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
    this.showCharts("ryjl3-tyaaa-aaaaa-aaaba-cai");
    let result = this.$store.getters.getCommitCanister();
    if (!result) {
      try {
        let principle = this.$store.getters.getPrinciple();
        result = await chainCloudApi.getAllCanister(principle);
        this.$store.dispatch("setCommitCanisterConfig", result);
      } catch (err) {
        console.log("failed to getAllCanister:", err);
        return;
      }
    }

    this.canister = result;
  },
  methods: {
    selectCanister(canisterid) {
      this.showCharts(canisterid);
    },
    async showCharts(canisterId) {
      let time = new Date().getTime();
      let res = [];
      try {
        res = await chainCloudLocal.getCanisterEventByTime(
          canisterId,
          time - 12 * 3600 * 1000
        );
      } catch (err) {
        console.log("Network connection failed, error reason:", err);
      }

      for (let i of res) {
        let time = new Date(Number(i.transaction_time));
        let hours = time.getUTCHours();
        if (hours > 11) {
          continue;
        }
        this.cpuProfileOption.series[0].data[hours] =
          Number(this.cpuProfileOption.series[0].data[hours]) +
          Number((1 / res.length).toFixed(2));
        let min = time.getUTCMinutes();
        this.loadAvgOption.series[0].data[hours] =
          Number(this.loadAvgOption.series[0].data[hours]) + 1 / 60;
        this.loadAvgOption.series[1].data[hours] =
          Number(this.loadAvgOption.series[1].data[hours]) + 1 / 12;
        this.loadAvgOption.series[2].data[hours] =
          Number(this.loadAvgOption.series[2].data[hours]) + 1 / 4;

        i.transaction_time = Number(i.transaction_time);
        i.stable_size = Number(i.stable_size);
        i.cycle = Number(i.cycle);
        let info = JSON.stringify(i);
        let buf = Buffer.from(info, "utf8");
        this.networkBandwithOption.series[0].data[hours] =
          Number(this.networkBandwithOption.series[0].data[hours]) + buf.length;

        this.memoryProfileOption.series[0].data[hours] = Number(
          (i.stable_size / 16384) * 100
        );
      }

      var chartDom = document.getElementById("loadAvg");
      var myChart = echarts.init(chartDom);
      myChart.setOption(this.loadAvgOption);

      var cupchartDom = document.getElementById("cpuProfile");
      var myChartcpu = echarts.init(cupchartDom);
      myChartcpu.setOption(this.cpuProfileOption);

      var memorychartDom = document.getElementById("memoryProfile");
      var memorymyChart = echarts.init(memorychartDom);
      memorymyChart.setOption(this.memoryProfileOption);

      var networkchartDom = document.getElementById("networkBandwith");
      var networkmyChart = echarts.init(networkchartDom);
      networkmyChart.setOption(this.networkBandwithOption);
    },
  },
};
</script>

<style scoped>
#mertirc {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.mertirc_title {
  display: flex;
  height: 8%;
  width: 100%;
  background: white;
  align-items: center;
  text-indent: 10px;
}
.mertirc_title label {
  font-size: 15px;
  font-weight: 900;
}
.mertirc_content {
  display: flex;
  width: 100%;
  height: 90%;
}
.mertirc_content ul {
  margin: 0;
  padding: 0;
  display: flex;
  width: 98%;
  margin-left: 1%;
  height: 100%;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.mertirc_content ul li {
  display: flex;
  width: 48%;
  height: 47%;
  border-radius: 10px;
  padding: 5px;
  background-color: white;
}
.canisterList p {
  font-size: 15px;
  cursor: pointer;
}
.canisterList p:hover {
  background: rgb(218, 218, 218);
}

</style>