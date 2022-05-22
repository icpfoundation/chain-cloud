<style scoped>
.logo {
    display: flex;
    flex: 1;
    justify-content: flex-start;
    cursor: pointer;
}

.user {
    font-size: 12px;
    color: #252B3A;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
}

.logImg {
    width: 169px;
    height: 22px;
}

.appwrappBanner {
    display: flex;
}

.appWrappLeft {
    width: 2.6rem;
    background: #ffffff;
    min-height: 100%;
}

.appWrappLeftHead {
    width: 100%;
    height: 0.8rem;
    padding: 0 0.2rem;
    font-size: 0.16rem;
    font-weight: 600;
    color: #333333;
    display: flex;
    align-items: center;
}

.appWrappLeftHead img {
    width: 0.44rem;
    height: 0.44rem;
    margin-right: 0.1rem;
}

.appWrappLeftBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 0.1rem;
    padding: 0 0.1rem;
}

.menuItem {
    width: 100%;
    margin-bottom: 0.04rem;
    display: flex;
    font-size: 0.14rem;
    color: #333333;
    cursor: pointer;
    padding: 0.13rem;
}

.menuItemMain {
    flex-direction: column;
    justify-content: center;
}

.fatherItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 0.1rem;
}

.menuItemMainLeft {
    display: flex;
    align-items: center;
}

.menuItemMainRight {
    width: 0.16rem;
    height: 0.16rem;
}

.menuItem img {
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.08rem;
}

.chooseClass {
    background: #E7F1FF;
    border-radius: 0.08rem;
}

.childrenBox {
    margin-top: 0.04rem;
    width: 100%;
}

.childImg {
    width: 0.24rem;
    height: 0.24rem;
    margin-right: 0.1rem;
}

.childrenmenuItem {
    height: 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
}

.chooseSonClass {
    color: #1776FF;
}

.appWrappRight {
    min-height: 100%;
    padding: 0 0.2rem;
    padding-bottom: 0.48rem;
    width: 16.5rem;
}
</style>

<template>
    <div class="layoutApp">
        <div class="appwrappBanner" v-bind:style="{ minHeight: browserHeight + 'px' }">
            <div class="appWrappLeft">
                <div class="appWrappLeftHead">
                    <img src="../../../assets/chain_cloud/menu/pic_group_avatar@2x.png" alt="">
                    <span>Project Group 1</span>
                </div>
                <div class="appWrappLeftBox">
                    <div class="menuItem menuItemMain" v-for="(item, index) in menuList" :key="index"
                        @click="chooseFun(item, index)">
                        <div class="fatherItem" :class="{ chooseClass: item.select }">
                            <div class="menuItemMainLeft">
                                <img :src="item.selUrl" alt="" v-if="item.select">
                                <img :src="item.norUrl" alt="" v-else>
                                <span :class="{ chooseSonClass: item.select }">{{ item.menuName }}</span>
                            </div>
                            <img src="../../../assets/chain_cloud/menu/icon_arrow_down@2x.png" class="menuItemMainRight"
                                alt="" v-if="item.isSon && item.select">
                        </div>
                        <div class="childrenBox" v-if="item.isSon && item.select">
                            <div class="childrenmenuItem" v-for="(itemChildren, indexChildren) in item.children"
                                :key="indexChildren" @click.stop="chooseSonFun(item, itemChildren, indexChildren)">
                                <div class="childImg"></div>
                                <span :class="{ chooseSonClass: itemChildren.select }">{{ itemChildren.menuName
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="appWrappRight">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive" />
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive" />
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
                    name: "IDE",
                    href: "",
                },
                {
                    name: "TEAM",
                    href: "",
                },
                {
                    name: "DAPP - SCAN",
                    href: "",
                },
                {
                    name: "ABOUT US",
                    href: "",
                },
            ],
            browserHeight: 0,
            menuList: [
                {
                    menuName: 'Overview',
                    norUrl: require('../../../assets/chain_cloud/menu/icon_overview_nor@2x.png'),
                    selUrl: require('../../../assets/chain_cloud/menu/icon_overview_sel@2x.png'),
                    href: 'overview',
                    children: [
                        {
                            menuName: 'Detail',
                            href: 'detail',
                            select: false,
                        },
                        {
                            menuName: 'Activity',
                            href: 'activity',
                            select: false,
                        }
                    ],
                    isSon: true,
                    select: true,
                },
                {
                    menuName: 'Members',
                    norUrl: require('../../../assets/chain_cloud/menu/icon_member_nor@2x.png'),
                    selUrl: require('../../../assets/chain_cloud/menu/icon_member_nor@2x.png'),
                    href: 'members',
                    isSon: false,
                    select: false,
                },
                {
                    menuName: 'Setting',
                    norUrl: require('../../../assets/chain_cloud/menu/icon_setting_nor@2x.png'),
                    selUrl: require('../../../assets/chain_cloud/menu/icon_setting_nor@2x.png'),
                    href: 'setting',
                    isSon: false,
                    select: false,
                },
            ]
        }
    },
    methods: {
     
        chooseFun(item, index) {
            this.menuList.forEach(element => {
                element.select = false;
                if (element.isSon) {
                    element.children.forEach(elechildren => {
                        elechildren.select = false
                    })
                }

            })
            item.select = true;
            // localStorage.activeMenuHref = item.href
            // localStorage.activeMenuIndex = index
            this.$router.push({
                name: item.href
            })
        },
        chooseSonFun(item, itemChildren, indexChildren) {
            item.children.forEach(element => {
                element.select = false
            })
            itemChildren.select = true;
            this.$router.push({
                name: itemChildren.href
            })
        },
    },
    mounted() {
        this.browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        let url = window.location.href;
        console.log(localStorage.activeMenuHref)
        if (localStorage.activeMenuHref && localStorage.activeMenuHref.length > 3) {
            this.menuList.forEach(element => {
                element.select = false;
            })
            this.menuList[parseInt(localStorage.activeMenuIndex)].select = true;
        }
        if (localStorage.activeMenuHref && localStorage.activeMenuHref.length > 3) {
            if (localStorage.activeMenuHref === url) {
                return
            } else {
                this.$router.push({
                    name: localStorage.activeMenuHref
                })
            }
        } else {
            this.$router.push({
                name: "overview"
            })
        }
    },
}
</script>
