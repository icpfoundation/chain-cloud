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

.head {
    width: 100%;
    border-radius: 0.08rem;
    background: white;
    padding: 0.2rem;
}

.headBox {
    width: 100%;
    display: flex;
    margin-top: 0.2rem;
    align-items: center;
}

.headItem {
    background: #F8F8F8;
    padding: 0.2rem;
    height: 2.4rem;
}

.headLeft {
    width: 4.4rem;
    margin-right: 0.2rem;
}

.headRight {
    flex: 1;
}

.headRightItem {
    font-size: 0.14rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    display: flex;
    align-items: center;
    margin-bottom: 0.1rem;
}

.headRightItemtitle {
    width: 1.4rem;
    font-weight: 600;
    margin-right: 0.2rem;
}

.headItemTitle {
    font-size: 0.2rem;
    font-weight: 500;
    color: #333333;
    margin-bottom: 0.2rem;
}



.headItemLog {
    display: flex;
    align-items: center;
    font-size: 0.16rem;
    font-weight: 600;
    color: #333333;
}

.headItemLog img {
    width: 0.44rem;
    height: 0.44rem;
    margin-right: 0.1rem;
}

.headItemLogCloud {
    height: 0.44rem;

}

.headItemLogCloudTop {
    display: flex;
}

.headItemLogCloudRunning {
    width: 0.7rem;
    text-align: center;
    line-height: 0.2rem;
    height: 0.2rem;
    background: rgba(85, 200, 137, 0.2);
    border-radius: 0.04rem;
    font-size: 11px;
    font-weight: 500;
    color: #48C982;
    margin-left: 0.1rem;
}

.headItemLogCloudid {
    font-size: 12px;
    color: #333333;
}

.line {
    width: 100%;
    height: 0.01rem;
    background: #EBEBEB;
    margin: 0.2rem 0;
}

.idInfo {
    margin-bottom: 0.1rem;
    font-size: 12px;
    font-weight: 400;
    color: #333333;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.idInfoTitle {
    font-weight: 600;
    margin-bottom: 0.02rem;
}

.headItemTable {
    width: 100%;
    height: 1.8rem;
    border-radius: 0.04rem;
    border: 0.01rem solid #E6E6E6;
}

.headTableItem {
    height: 0.44rem;
    background: #FAFAFA;
    border-radius: 0.04rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.2rem;
    font-size: 0.14rem;
    color: #333333;
    border-bottom: 0.01rem solid #EBEBEB;
}

.headTableItem:last-child {
    border-bottom: none;
}

.tab {
    background: #FAFAFA;
    font-weight: 600;
}

.content {
    width: 100%;
    padding: 0.2rem;
    border-radius: 0.04rem;
    background: white;
    margin-top: 0.2rem;
}

.contentTitle {
    font-size: 0.2rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
}

.table {
    border-radius: 0.04rem;
}

.tableHead {
    height: 0.44rem;
    background: #FAFAFA;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    border-bottom: 0.01rem solid #E6E6E6;
}

.tableHeadTime {
    font-size: 0.14rem;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #1776FF;
    width: 0.88rem;
    height: 0.2rem;
    background: rgba(23, 118, 255, 0.2);
    border-radius: 0.02rem;
    line-height: 0.22rem;
    text-align: center;
}

.itemCom {
    display: flex;
    align-items: center;
    padding: 0 0.2rem;
}

.tableItem {
    display: flex;
    background: white;
    border-bottom: 0.01rem solid #EBEBEB;
    padding: 0.2rem;
}

.tableItem:hover {
    background: #FAFAFA;
}
.tableItem:last-child{
    border-bottom:0px solid;
}
.leibie {
    width: 0.16rem;
    height: 0.16rem;
    margin-right: 0.1rem;
}

.groupName {
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight:600;
    color: #333333;
}

.groupNameItem {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    display: flex;
    align-items: center;
    margin-top: 0.1rem;
}

.groupNameItemtime {
    font-weight: 400;
    color: #666666;
    margin-left: 0.02rem;
}

.groupNameItemTo {
    color: #333333;
    margin:0 0.1rem 0 0.4rem;
}


.contentBox {
    width: 100%;
    background: #FAFAFA;
    border: 0.01rem solid #E6E6E6;
    margin-top: 0.2rem;
}

.pageStyle {
    display: flex;
    justify-content: center;
    margin-top: 0.2rem;
}
</style>

<template>
    <div class="app">
        <div class="title">
            <div class="titleName">Canisters</div>
            <span class="titlePath">Project info / Chain-Cloud / Canisters</span>
        </div>
        <div class="head">
            <div class="headItemTitle">All canister info</div>
            <div class="headBox">
                <div class="headItem headLeft">
                    <div class="headItemLog">
                        <img src="../../../../../assets/chain_cloud/menu/pic_group_avatar@2x.png" alt="">
                        <div class="headItemLogCloud">
                            <div class="headItemLogCloudTop">
                                <span>Chain-Cloud</span>
                                <div class="headItemLogCloudRunning">Running</div>
                            </div>
                            <span class="headItemLogCloudid">ID：rrkah-fqaaa-aaaaa-aaaaq-cai</span>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="idInfo">
                        <div class="idInfoTitle">Created time</div>
                        <span>2022-05-15T15:13:45</span>
                    </div>
                    <div class="idInfo">
                        <div class="idInfoTitle">Update time</div>
                        <span>2022-05-15T15:13:45</span>
                    </div>
                </div>
                <div class="headItem headRight">
                    <div class="headRightItem">
                        <div class="headRightItemtitle">Module hash</div>
                        <span>3e8315 dd80488a9c26a617d14b399e8c030e55d9d9c63aadfd5ded4100623a6b</span>
                    </div>
                    <div class="headRightItem">
                        <div class="headRightItemtitle">Controller</div>
                        <span> rwlgt-iiaaa-aaaaa-aaaaa-cai</span>
                    </div>
                    <div class="headRightItem">
                        <div class="headRightItemtitle">Memory allocation</div>
                        <span>0</span>
                    </div>
                    <div class="headRightItem">
                        <div class="headRightItemtitle">Compute allocation</div>
                        <span>0</span>
                    </div>
                    <div class="headRightItem">
                        <div class="headRightItemtitle">Memory Size</div>
                        <span>Nat(2073031)</span>
                    </div>
                    <div class="headRightItem">
                        <div class="headRightItemtitle">Freezing threshold</div>
                        <span>2_592_000</span>
                    </div>
                    <div class="headRightItem">
                        <div class="headRightItemtitle">Balance</div>
                        <span>4_000_000_000_000 Cycles</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="contentTitle">Canister Activities</div>
            <div class="contentBox">
                <div class="table">
                    <div class="tableHead">
                        <div class="tableHeadTime">June 2021</div>
                    </div>
                    <div class="tableItem" v-for="(item, index) in tableData.tableList" :key="index">
                        <img class="leibie" src="../../../../../assets/chain_cloud/teamscan/icon_connect@2x.png" alt="">
                        <div class="groupName">
                            <span>10th June</span>
                            <div class="groupNameItem">
                                <span class="groupNameItemtime">18:09</span>
                                <span class="groupNameItemTo">新增</span>
                                <span>canister 4jgqq-aqaaa-aaaah-qaaza-cai</span>
                            </div>
                              <div class="groupNameItem">
                                <span class="groupNameItemtime">18:09</span>
                                <span class="groupNameItemTo">更新</span>
                                <span>canister 4jgqq-aqaaa-aaaah-qaaza-cai</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabList: [
                {
                    name: "All public projects",
                    select: true
                },
                {
                    name: "My projects",
                    select: false
                }
            ],
            groupValue: '1',
            groupList: [
                {
                    value: '1',
                    label: 'Default'
                },
                {
                    value: '2',
                    label: 'Create time'
                }
            ],
            tableData: {
                tableList: [
                    {
                        projectName: "tidy go.sum",
                        author: "yongyu",
                        time: "18 days ago",
                    },
                    {
                        projectName: "tidy go.sum",
                        author: "yongyu",
                        time: "18 days ago",
                    },
                    {
                        projectName: "tidy go.sum",
                        author: "yongyu",
                        time: "18 days ago",
                    },
                    {
                        projectName: "tidy go.sum",
                        author: "yongyu",
                        time: "18 days ago",
                    },
                    {
                        projectName: "tidy go.sum",
                        author: "yongyu",
                        time: "18 days ago",
                    },
                ],
                total: 5,
                page: 1,
                pageSize: 3
            }
        }
    },
    methods: {

        headPageFun(value) {
            this.$Notice.info({
                title: "暂无后台数据",
                background: true,
                duration: 3
            });
        },
    },
    created() {
        let url = window.location.href
        console.log(url)
    },
}
</script>
