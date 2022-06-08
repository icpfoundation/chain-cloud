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
  display: flex;
  height: 5.88rem;
  margin-top: 0.2rem;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: scroll;
  overflow-x: hidden;
}

.itemBox {
  width: 10.9rem;
  padding: 0.2rem;
  font-size: 0.2rem;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  background: #ffffff;
  border-radius: 0.08rem;
}
</style>

<template>
  <div class="app">
    <div class="title">
      <div class="titleName">Metric</div>
      <span class="titlePath">{{ project.name }} / Metric</span>
    </div>
    <div class="content">
      <div class="itemBox">
        <span>Cycle Balance (Last 24 hours)</span>
        <div id="line" style="height: 4.24rem" class="echartLineWidth"></div>
      </div>
      <div class="itemBox">
        <span>Call function quantity (Last 24 hours)</span>
        <div id="bar" style="height: 4.24rem" class="echartLineWidth"></div>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import { mapGetters } from "vuex";
import {
  manageCanister,
  chainCloud,
} from "@/chain_cloud_assets/assets/js/actor";
import { Principal } from "@dfinity/principal";

import moment from "moment";
export default {
  data() {
    return {
      lineEachart1: null,
      lineEachart2: null,
      project: {
        name: "",
      },
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["getManageCanister"]),
  },

  async mounted() {
    let canister = this.getManageCanister();
    let manage = manageCanister;
    if (canister) {
      manage = canister;
    }

    let account = Principal.fromText(this.$route.params.user);
    let groupId = BigInt(this.$route.params.groupId);
    let projectId = BigInt(this.$route.params.projectId);
    let getProjectRest = await manage.getProjectInfo(
      account,
      groupId,
      projectId
    );
    let currentTime = new Date(new Date().getTime - 24 * 3600 * 1000);

    if (getProjectRest.Ok.length > 0) {
      console.log("getProjectRest", getProjectRest.Ok[0].canisters);
      this.project.name = getProjectRest.Ok[0].name;
      let warnline = Number(
        getProjectRest.Ok[0].canister_cycle_floor / BigInt(100000000)
      );

      let data = [];
      let canisters = [];
      for (let i = 0; i < getProjectRest.Ok[0].canisters.length; i++) {
        canisters.push(getProjectRest.Ok[0].canisters[i].toString());
      }
      let series = [];
      let method1 = [];
      let method2 = [];
      let warnlineArr = [];

      for (let j = 0; j < canisters.length; j++) {
        let event = await chainCloud.getCanisterEventByTime(
          canisters[j],
          new Date().getTime() - 24 * 3600 * 1000
        );

        let map = new Map();

        for (let i = event.length - 1; i > 0; i--) {
          let logTime = new Date(
            Number(event[i].transaction_time / BigInt(1000000))
          );
          data.push([
            moment(logTime).format("HH:mm::SS"),
            Number(event[i].cycle / BigInt(100000000)),
          ]);
          warnlineArr.push([
            moment(logTime).format("HH:mm::SS"),
            Number(warnline),
          ]);
          if (!map.get(event[i].method_name)) {
            map.set(event[i].method_name, 1);
            continue;
          }
          map.set(event[i].method_name, map.get(event[i].method_name) + 1);
        }
        let array = Array.from(map);
        array.sort(function (a, b) {
          return b[1] - a[1];
        });

        if (array.length >= 2) {
          method1.push({
            value: array[0][1],
            name: array[0][0],
          });
          method2.push({
            value: array[1][1],
            name: array[1][0],
          });
        } else if (array.length > 1) {
          method1.push({
            value: array[0][1],
            name: array[0][0],
          });
          method2.push({
            value: 0,
            name: "",
          });
        } else {
          method1.push({
            value: 0,
            name: "",
          });
          method2.push({
            value: 0,
            name: "",
          });
        }
        series.push({
          type: "line",
          showSymbol: false,
          name: "Canister",
          data: data,
          itemStyle: {
            color: "#78c85d",
          },
          lineStyle: {
            color: "#78c85d",
          },
        });

        series.push({
          type: "line",
          showSymbol: false,
          name: "WarningLine",
          data: warnlineArr,
          itemStyle: {
            color: "#f49394",
          },
          lineStyle: {
            color: "#f49394",
          },
        });
      }
      let dateList = data.map(function (item) {
        return item[0];
      });
      let option = {
        legend: {
          data: ["WarningLine", "Canister"],
        },
        visualMap: [
          {
            show: false,
            type: "continuous",
            seriesIndex: 0,
            min: 0,
            max: 400,
          },
        ],
        title: [
          {
            left: "center",
          },
        ],
        tooltip: {
          trigger: "axis",
        },
        xAxis: [
          {
            data: dateList,
          },
        ],
        yAxis: {
          name: "Billion",
        },
        grid: [
          {
            top: "10%",
          },
        ],
        series: series,
      };
      this.lineEachart1 = echarts.init(document.getElementById("line"));
      // http://localhost:8080/#/project/projectoverview/metric/4evaj-w2syn-bk4gx-3mgbw-akept-4c4za-yimc2-xro4u-cjlrx-kvakc-sae/1/5
      this.lineEachart1.setOption(option, true);
      let yData = ["65md3-jqaaa-aaaan-qaihq-cai"];
      let option2 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLabel: {},
        },
        yAxis: {
          type: "category",
          data: canisters,
          axisLabel: {},
        },
        series: [
          {
            name: "function1",
            type: "bar",
            label: {
              show: true,
              formatter: (data) => {
                return `${data.name}(${data.value})`;
              },
            },
            data: method1,
          },
          {
            name: "function2",
            type: "bar",
            label: {
              show: true,
              formatter: (data) => {
                return `${data.name}(${data.value})`;
              },
            },
            data: method2,
          },
        ],
      };
      this.lineEachart2 = echarts.init(document.getElementById("bar"));
      this.lineEachart2.setOption(option2, true);
    }
  },
};
</script>
