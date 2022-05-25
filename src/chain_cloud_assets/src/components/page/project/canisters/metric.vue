<style scoped>
.app {
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
    background: #FFFFFF;
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
                <span>Cycle_balance</span>
                <div id="line" style="height:3.24rem" class="echartLineWidth"></div>
            </div>
            <div class="itemBox">
                <span>Cycle_balance</span>
                <div id="bar" style="height:3.24rem" class="echartLineWidth"></div>
            </div>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    data() {
        return {
            lineEachart1: null,
            lineEachart2: null
        }
    },
    methods: {
    },
    mounted() {
        this.lineEachart1 = echarts.init(document.getElementById('line'));
        let option1 = {
            grid: {
                left: 50,
                right: 40,
                top: 30,
                bottom: 20,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                itemStyle: {
                    color: "#1776FF"
                },
                areaStyle: {}
            }
        };
        this.lineEachart1.setOption(option1, true);
        this.lineEachart2 = echarts.init(document.getElementById('bar'));
        let option2 = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                bottom: '0'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '30px',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['19th May', '20th May', '21th May', '22th May', '23th May', '24th May'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            },
            series: [
                {
                    name: '2011',
                    type: 'bar',
                    itemStyle: {
                        color: "#1776FF"
                    },
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012',
                    type: 'bar',
                    itemStyle: {
                        color: "#48C982"
                    },
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };
        this.lineEachart2.setOption(option2, true);
    },
}
</script>
