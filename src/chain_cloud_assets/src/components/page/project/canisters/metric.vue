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
  margin-top: 0.2rem;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid #6984aa;
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
  border: 1px solid #6984aa;
  margin-top: 0.2rem;
  box-shadow: 0 0.375rem 0.75rem rgb(127 150 174 / 13%);
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
        <span>Calling frequency (Last 24 hours)</span>
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
    let currentTime = new Date(new Date().getTime() - 24 * 3600 * 1000);

    if (getProjectRest.Ok.length > 0) {
      this.project.name = getProjectRest.Ok[0].name;
      let warnline = Number(
        getProjectRest.Ok[0].canister_cycle_floor / BigInt(100000000)
      );

      let data = [];
      let canisters = [];

      for (let i = 0; i < getProjectRest.Ok[0].canisters.length; i++) {
        canisters.push(getProjectRest.Ok[0].canisters[i].toString());
      }

      let legend = ["warnline"];
      let series = [];
      let method1 = [];
      let method2 = [];
      let warnlineArr = [];
      if (canisters.length == 0) {
        warnlineArr.push({
          name: moment(new Date().getTime() - 24 * 3600 * 1000).format(
            "YYYY-MM-DD HH:mm:SS"
          ),
          value: [
            moment(new Date().getTime() - 24 * 3600 * 1000).format(
              "YYYY-MM-DD HH:mm:SS"
            ),
            Number(warnline),
          ],
        });
        warnlineArr.push({
          name: moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:SS"),
          value: [
            moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:SS"),
            Number(warnline),
          ],
        });
      }
      for (let j = 0; j < canisters.length; j++) {
        let event = await chainCloud.getCanisterEventByTime(
          canisters[j],
          new Date().getTime() - 24 * 3600 * 1000
        );

        let map = new Map();
        if (event.length == 0) {
          data.push({
            name: moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:SS"),
            value: [
              moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:SS"),
              Number(0),
            ],
          });
          data.push({
            name: moment(new Date().getTime() - 24 * 3600 * 1000).format(
              "YYYY-MM-DD HH:mm:SS"
            ),
            value: [
              moment(new Date().getTime() - 24 * 3600 * 1000).format(
                "YYYY-MM-DD HH:mm:SS"
              ),
              Number(0),
            ],
          });
          warnlineArr.push({
            name: moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:SS"),
            value: [
              moment(new Date().getTime()).format("YYYY-MM-DD HH:mm:SS"),
              Number(warnline),
            ],
          });
          warnlineArr.push({
            name: moment(new Date().getTime() - 24 * 3600 * 1000).format(
              "YYYY-MM-DD HH:mm:SS"
            ),
            value: [
              moment(new Date().getTime() - 24 * 3600 * 1000).format(
                "YYYY-MM-DD HH:mm:SS"
              ),
              Number(warnline),
            ],
          });
        }
        for (let i = event.length - 1; i > 0; i--) {
          let logTime = new Date(
            Number(event[i].transaction_time / BigInt(1000000))
          );
          data.push({
            name: moment(logTime).format("YYYY-MM-DD HH:mm:SS"),
            value: [
              moment(logTime).format("YYYY-MM-DD HH:mm:SS"),
              Number(event[i].cycle / BigInt(100000000)),
            ],
          });
          warnlineArr.push({
            name: moment(logTime).format("YYYY-MM-DD HH:mm:SS"),
            value: [
              moment(logTime).format("YYYY-MM-DD HH:mm:SS"),
              Number(warnline),
            ],
          });
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
        legend.push(canisters[j]);
        series.push({
          name: canisters[j],
          type: "line",
          showSymbol: false,
          data: data,
          itemStyle: {
            color: "#6984aa",
          },
          lineStyle: {
            color: "#6984aa",
          },
        });
      }
      series.push({
        name: "warnline",
        type: "line",
        showSymbol: false,
        data: warnlineArr,
        itemStyle: {
          color: "#f49394",
        },
        lineStyle: {
          color: "#f49394",
        },
      });

      let dateList = data.map(function (item) {
        return item[0];
      });

      let option = {
        legend: {
          data: legend,
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            params = params[0];
            var date = new Date(moment(params.name, "YYYY-MM-DD HH:mm:SS"));
            return (
              date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear() +
              " : " +
              params.value[1]
            );
          },
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false,
          },
        },
        series: series,
      };
      this.lineEachart1 = echarts.init(document.getElementById("line"));

      this.lineEachart1.setOption(option, true);
      let show = canisters.length > 0;
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
          show: show,
        },
        series: [
          {
            name: "",
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
            name: "",
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
