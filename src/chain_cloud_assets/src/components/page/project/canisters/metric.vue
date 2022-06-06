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
  height: 4.88rem;
  margin-top: 0.2rem;
  justify-content: space-between;
}

.itemBox {
  width: 7.9rem;
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
      <span class="titlePath">Project info / Chain-Cloud / Metric</span>
    </div>
    <div class="content">
      <div class="itemBox">
        <span>Cycle Balance</span>
        <div id="line" style="height: 3.24rem" class="echartLineWidth"></div>
      </div>
      <div class="itemBox">
        <span>Call function quantity</span>
        <div id="bar" style="height: 3.24rem" class="echartLineWidth"></div>
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
export default {
  data() {
    return {
      lineEachart1: null,
      lineEachart2: null,
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
    let currentTime = new Date().getTime();
    let option1 = {
      grid: {
        left: 50,
        right: 40,
        top: 30,
        bottom: 20,
      },
      legend: {
        data: ["WarningLine"],
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
        name: "Billion",
      },
      series: [],
    };

    if (getProjectRest.Ok.length > 0) {
      let warnline = Number(
        getProjectRest.Ok[0].canister_cycle_floor / BigInt(100000000)
      );
      option1.series.push({
        data: [
          warnline,
          warnline,
          warnline,
          warnline,
          warnline,
          warnline,
          warnline,
        ],
        type: "line",
        itemStyle: {
          color: "#f49394",
        },
        areaStyle: {},
        name: "WarningLine",
      });

      let event = await chainCloud.getCanisterEventByTime(
        "ejhe2-miaaa-aaaag-qaazq-cai",
        new Date().getTime() - 24 * 3600 * 1000
      );
      for (let i = 0; i < getProjectRest.Ok[0].canisters.length; i++) {
        let canister =
          getProjectRest.Ok[0].canisters[i].toString().slice(0, 5) +
          " canister cycle";

        option1.legend.data.push(canister);

        let cycle = [];
        if (event.length >= 7) {
          let idx = Math.floor(event.length / 7);
          for (let i = 0; i < 7; i++) {
            if (event.length >= i + 1) {
            }
            cycle.push(Number(event[idx * i].cycle / BigInt(100000000)));
          }
        } else {
          if (event.length > 0) {
            for (let i = 0; i < 7; i++) {
              cycle.push(
                Number(event[event.length - 1].cycle / BigInt(100000000))
              );
            }
          } else {
            cycle = [0, 0, 0, 0, 0, 0, 0];
          }
        }

        if (cycle.length > 7) {
          cycle.slice(0, 6);
        }

        option1.series.push({
          data: cycle,
          type: "line",
          itemStyle: {
            color: "#1776FF",
          },
          areaStyle: {},
          name: canister,
        });
      }
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

      this.lineEachart1 = echarts.init(document.getElementById("line"));

      this.lineEachart1.setOption(option1, true);
      this.lineEachart2 = echarts.init(document.getElementById("bar"));
      let option2 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          bottom: "0",
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "30px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: [
            "19th May",
            "20th May",
            "21th May",
            "22th May",
            "23th May",
            "24th May",
          ],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        series: [],
      };
      if (array.length > 2) {
        array = array.slice(0, 1);
      }
      let color = ["#48C982", "#1776FF"];
      array.forEach((ele, index) => {
        console.log("ele", ele, index);
        option2.series.push({
          type: "bar",
          itemStyle: {
            color: color[index],
          },
          label: {
            show: true,
            formatter: function (value) {
              return value.data.method;
            },
          },
          data: [
            { method: ele[0], value: ele[1] },
            { method: ele[0], value: ele[1] },
            { method: ele[0], value: ele[1] },
            { method: ele[0], value: ele[1] },
            { method: ele[0], value: ele[1] },
            { method: ele[0], value: ele[1] },
          ],
        });
      });
      this.lineEachart2.setOption(option2, true);
    }
  },
};
</script>
