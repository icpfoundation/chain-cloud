<style scoped>
.app {
    width: 100%;
    padding-bottom: 80px;
}

.content {
    width: 1200px;
    padding-top: 40px;
    margin: 0 auto;
}

.search {
    width: 100%;
}

.contentBox {
    margin-top: 40px;
    display: flex;
}

.left {
    width: 2.6rem;
    background: #ffffff;
    min-height: 100%;
    margin-right: 20px;
}

.typeList {
    width: 100%;
}

.typeTilte {
    font-size: 18px;
    font-weight: 600;
    color: #333333;
    width: 100%;
    height: 50px;
    margin-bottom: 4px;
    padding-left: 30px;
    line-height: 50px;
    padding: 0 10px;
}

.typeItem {
    width: 100%;
    height: 50px;
    margin-bottom: 4px;
    cursor: pointer;
    border-radius: 8px;
    padding-left: 20px;
    line-height: 50px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
}

.typeItem:hover {
    background: #F8F8F8;
}

.line {
    width: 100%;
    margin-top: 30px;
    margin-bottom: 10px;
}

.filterItem {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.filterItem img {
    width: 16px;
    height: 16px;
}

.right {
    flex: 1
}

.rightItem {
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    color: #333333;
}

.itemTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
}

.all {
    font-size: 14px;
    font-weight: 400;
    color: #1776FF;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.all img {
    width: 16px;
    height: 16px;
    margin-left: 5px;
}

.table {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.tableItem {
    width: 450px;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    cursor: pointer;
}

.tableItem:hover {
    background: #F8F8F8;
}

.tableImg {
    width: 60px;
    height: 60px;
    background: #558678;
    border-radius: 8px;
    border: 1px solid #E6E6E6;
    margin-right: 20px;
    margin-top: 4px;
}

.tableInfo {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.tableItemName {
    font-size: 18px;
    font-weight: 600;
    color: #333333;
}

.tableItemBy {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    margin-top: 2px;
}

.tableItemBy img {
    width: 16px;
    height: 16px;
    margin-left: 5px;
}

.tableItemDec {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;
    margin-top: 2px;
}

.tableItemDiv {
    display: flex;
    height: 20px;
    border-radius: 10px;
    border: 1px solid #CCCCCC;
    margin-top: 4px;
    align-items: center;
    width: 130px;
    justify-content: center;
    font-size: 12px;
    font-weight: 400;
    color: #666666;
}
</style>

<template>
    <div class="app">
        <div class="content">
            <div class="search">
                <Select v-model="roleValue">
                    <Option v-for="(item, index) in roleList" :value="item.value" :key="index">{{ item.label }}</Option>
                </Select>
            </div>
            <div class="contentBox">
                <div class="left">
                    <div class="typeList" v-for="(item, index) in typeList" :key="index">
                        <div class="typeTilte">{{ item.name }}</div>
                        <div class="typeItem" v-for="(typeItem, typeIndex) in item.list" :key="typeIndex">
                            {{ typeItem.name }}</div>
                    </div>
                    <div class="line"></div>
                    <div class="typeList">
                        <div class="typeTilte">Filters</div>
                        <div class="typeItem filterItem" v-for="(item, index) in filtersList" :key="index"
                            @click="chooseFun(item)">
                            <span> {{ item.name }}</span>
                            <img src="../../../../assets/chain_cloud/teamscan/icon_add_gray@2x.png" alt=""
                                v-if="!item.select">
                            <img src="../../../../assets/chain_cloud/teamscan/icon_gou@2x.png" alt="" v-else>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="rightItem">
                        <div class="itemTitle">
                            <span>Groups</span>
                            <span class="all" @click="toGroupFun">
                                <span>View all</span>
                                <img src="../../../../assets/chain_cloud/teamscan/icon_arrow_right_blue@2x.png" alt="">
                            </span>
                        </div>
                        <div class="table">
                            <div class="tableItem" v-for="(item, index) in tableData.tableList" :key="index"
                                @click="toGroupItemFun(item)">
                                <div class="tableImg"></div>
                                <div class="tableInfo">
                                    <span class="tableItemName">{{ item.name }}</span>
                                    <div class="tableItemBy">
                                        <span>{{ item.by }}</span>
                                        <img src="../../../../assets/chain_cloud/group/icon_check@2x.png" alt="">
                                    </div>
                                    <div class="tableItemDec">{{ item.dec }}</div>
                                    <div class="tableItemDiv">{{ item.type }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rightItem">
                        <div class="itemTitle">
                            <span>Projects</span>
                            <span class="all" @click="toProjectFun">
                                <span>View all</span>
                                <img src="../../../../assets/chain_cloud/teamscan/icon_arrow_right_blue@2x.png" alt="">
                            </span>
                        </div>
                        <div class="table">
                            <div class="tableItem" v-for="(item, index) in tableData.tableList" :key="index"
                                @click="toProjectItemFun(item)">
                                <div class="tableImg"></div>
                                <div class="tableInfo">
                                    <span class="tableItemName">{{ item.name }}</span>
                                    <div class="tableItemBy">
                                        <span>{{ item.by }}</span>
                                        <img src="../../../../assets/chain_cloud/group/icon_check@2x.png" alt="">
                                    </div>
                                    <div class="tableItemDec">{{ item.dec }}</div>
                                    <div class="tableItemDiv">{{ item.type }}</div>
                                </div>
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
            roleValue: null,
            roleList: [
                {
                    value: '1',
                    label: 'Guest'
                },
                {
                    value: '2',
                    label: 'Reporter'
                },
                {
                    value: '3',
                    label: 'Developer'
                },
                {
                    value: '4',
                    label: 'Maintainer'
                }
            ],
            typeList: [
                {
                    name: "Types",
                    id: 1,
                    list: [
                        {
                            name: "Apps",
                            id: "apps"
                        },
                        {
                            name: "Action",
                            id: "action"
                        },
                    ]
                },
                {
                    name: "Categories",
                    id: 2,
                    list: [
                        {
                            name: "API management",
                            id: "management"
                        },
                        {
                            name: "Chat",
                            id: "chat"
                        },
                        {
                            name: "Code quality",
                            id: "quality"
                        },
                        {
                            name: "Code review",
                            id: "review"
                        },
                        {
                            name: "Continuous integration",
                            id: "integration"
                        },
                        {
                            name: "Dependency management",
                            id: "management"
                        },

                        {
                            name: "Deployment",
                            id: "deployment"
                        },
                        {
                            name: "IDEs",
                            id: "ides"
                        },
                        {
                            name: "Learning",
                            id: "learning"
                        },
                        {
                            name: "Localization",
                            id: "localization"
                        },
                        {
                            name: "Mobile",
                            id: "mobile"
                        },
                        {
                            name: "Monitoring",
                            id: "monitoring"
                        },
                    ]
                },
            ],
            selectList: [1],
            filtersList: [
                {
                    name: "Free",
                    select: true,
                    id: 1
                },
                {
                    name: "Free Trials",
                    select: false,
                    id: 2
                },
                {
                    name: "GitHub Enterprise",
                    select: false,
                    id: 3
                },
                {
                    name: "Paid",
                    select: false,
                    id: 4
                },
            ],
            tableData: {
                tableList: [
                    {
                        name: "yong1",
                        by: "By imgbot",
                        dec: "A GitHub app that optimizes your images",
                        type: "Recommended",
                    },
                    {
                        name: "yong2",
                        by: "By imgbot",
                        dec: "A GitHub app that optimizes your images",
                        type: "Recommended",
                    },
                    {
                        name: "yong3",
                        by: "By imgbot",
                        dec: "Daily,automatic backups of your repos and metadata. Restore your backups with metadata in seconds + Sync to your S3 or Azure",
                        type: "Recommended",
                    },
                    {
                        name: "yong4",
                        by: "By imgbot",
                        dec: "A GitHub app that optimizes your images",
                        type: "Recommended",
                    },
                    {
                        name: "yong5",
                        by: "By imgbot",
                        dec: "A GitHub app that optimizes your images",
                        type: "Recommended",
                    },
                ],
                total: 5,
                page: 1,
                pageSize: 3
            }
        }
    },
    methods: {
        chooseFun(item) {
            item.select = !item.select;
            console.log("dsfdsf")
            let arr = []
            this.filtersList.forEach(element => {
                if (element.select) {
                    arr.push(element.id)
                }
            });
            this.selectList = arr;
            if (arr.length === 0) {
                this.filtersList[0].select = true;
                this.selectList = [1]
            }
        },
        toGroupItemFun() {
            this.$router.push({
                name: "group_index"
            })
        },
        toGroupFun() {
            this.$router.push({
                name: "group_index"
            })
        },
        toProjectFun() {
            this.$router.push({
                name: "project_index"
            })
        },
        toProjectItemFun() {
            this.$router.push({
                name: "project_index"
            })
        }
    },
    created() {
    },
}
</script>
