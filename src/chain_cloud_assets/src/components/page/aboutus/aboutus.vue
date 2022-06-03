<style scoped>
.app {
    width: 100%;
}

.head {
    width: 100%;
    height: 500px;
    position: relative;
}

.headContent {
    width: 1200px;
    margin: 0 auto;
    padding-top: 174px;
}

.headlogo {
    width: 70px;
    height: 62px;
}

.headInfo {
    margin-top: 30px;
    font-size: 62px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #2E333A;
}

.headLine {
    width: 60px;
    height: 6px;
    background: #1776FF;
    margin-top: 40px;
}

.comItem {
    background: #F8FBFF;
    width: 100%;
}

.comItemContent {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}

.inspirationpadding {
    padding: 100px 0 135px 0;
}

.inspirationImg {
    width: 436px;
    height: 520px;
}

.comItemContentWord {
    width: 684px;
}

.InspirationTop {
    margin-top: 10px;
}

.comItemContentWordTitle {
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    margin-bottom: 30px;
}

.comItemContentWordInfo {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #818181;
    margin-top: 20px;
}

.doespadding {
    padding: 120px 0 184px 0;
}

.doesbg {
    background: white;
}

.builtbg {
    background: #1776FF;
}

.builtbgpadding {
    padding: 100px 0 90px 0;
}

.builTile {
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
}

.builTileInfo {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 20px;
}

.builtBox {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.dfinityImg {
    width: 304px;
    height: 369px;
}

.builtInfo {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    width: 776px;
}

.builtInfoItem {
    margin-bottom: 15px;
    color: #FFFFFF;
}

.builtInfoItem:last-child {
    margin-bottom: 0;
}

.builtContent {
    width: 1200px;
    margin: 0 auto;
}

.intobg {
    background: #F8FBFF;
}

.intoContent {
    width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
}

.intoContentInfo {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #818181;
    margin-top: 20px;
}

.proud {
    background: #FFFFFF;
}

.intoContent {
    padding: 100px 0;
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
}

.learned {
    background: #EBF4FF;
}

.learnedContent {
    width: 1200px;
    margin: 0 auto;
    padding: 54px 0 14px 0;
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
}

.learnedBox {
    display: flex;
    justify-content: space-between;
}

.learnedItem {
    width: 280px;
    height: 237px;
    border-radius: 12px;
    opacity: 0.3;
    border: 1px solid #E2E9F3;
    padding: 20px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #818181;
    text-align: center;
}

.learnedItem:hover {
    background: #FFFFFF;
    border-radius: 12px;
    border: 1px solid #E2E9F3;
}

.learnedTitle {
    text-align: center;
}

.cloud {
    background: #EBF4FF;
    padding: 50px 30px 30px 30px;
}

.cloudBlue {
    width: 100%;
    height: 260px;
    background: linear-gradient(270deg, #0059FF 0%, #1776FF 100%);
    box-shadow: 0px 11px 27px 0px rgba(23, 118, 255, 0.6);
    border-radius: 26px;
}

.cloudBlueContent {
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    padding-top: 50px;
    font-size: 32px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
}

.cloudBox {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}

.cloudItem {
    width: 260px;
    padding-right: 20px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
}
.headContentBg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>

<template>
    <div class="app">
        <div class="head">
            <div class="headContent">
                <img src="../../../../assets/chain_cloud/teamscan/banner_logo@2x.png" alt="" class="headlogo">
                <div class="headInfo">ABOUT US</div>
                <div class="headLine"></div>
                <img src="../../../../assets/chain_cloud/teamscan/banner_bg01@2x.png" alt="" class="headContentBg">
            </div>
        </div>
        <div class="comItem">
            <div class="comItemContent inspirationpadding">
                <img src="../../../../assets/chain_cloud/teamscan/pic_aboutus@2x.png" alt="" class="inspirationImg">
                <div class="comItemContentWord InspirationTop">
                    <span class="comItemContentWordTitle">Inspiration</span>
                    <div class="comItemContentWordInfo">1. When we built enterprise-level applications on ICP, we found
                        that there is currently a lack of efficient multi-canister management systems on the market,
                        which requires us to manually manage many smart contracts, which becomes inconvenient as the
                        scale of the project expands, so the original intention is to provide one-stop contract hosting,
                        collaboration, integration, and monitoring services for enterprise-level users, so that
                        developers can focus on the development of business logic without getting caught in the
                        whirlpool of various environments and configurations.</div>
                    <div class="comItemContentWordInfo">2. When we researched various Dapps on ICP, we found that at
                        this stage, various projects are blooming, good and bad. Among them, there are many valuable and
                        promising projects, and they are also full of many experimental short-sighted ideas. Different,
                        providing great uncertainty for the decision-making of institutions and individual investors, so
                        the idea of providing a judgment system jointly maintained by senior technical personnel, large
                        institutions, and representative community KOLs came to our minds , lingering.</div>
                </div>
            </div>
        </div>
        <div class="comItem doesbg">
            <div class="comItemContent doespadding">
                <div class="comItemContentWord">
                    <span class="comItemContentWordTitle">What it does</span>
                    <div class="comItemContentWordInfo">1. Decentralized code hosting platform, we rely on the storage
                        canister on ICP to realize the decentralized storage of code files, in order to realize the code
                        hosting service in the era of web3.0 corresponding to Github, which is a trustless forever and
                        continued smart contract code to provide escrow services</div>
                    <div class="comItemContentWordInfo">2. Team collaboration management platform, we provide convenient
                        and fast team collaboration management tools based on groups, projects, and users, explore the
                        way of working in the web3.0 era, and aim to create trustworthy and efficient team collaboration
                        tools</div>
                    <div class="comItemContentWordInfo">3. Smart contract compilation, deployment and visualization
                        platform, we provide a set of efficient integrated compilation services, allowing developers to
                        focus on business development without configuring a complex compilation environment</div>
                    <div class="comItemContentWordInfo">4. Dapp-DAO is based on the governance function of the
                        community, allowing qualified ecological participants to make multi-dimensional judgments on
                        projects they are familiar with, making good projects stand out, and greatly improving the
                        activity of the community, so that everyone can Provide support for project construction also
                        receive moderate incentives</div>
                </div>
                <img src="../../../../assets/chain_cloud/teamscan/pic_aboutus@2x (1).png" style="margin-top:39px" alt=""
                    class="inspirationImg">
            </div>
        </div>
        <div class="comItem  builtbg">
            <div class="builtContent builtbgpadding">
                <div class="builTile">How we built it</div>
                <div class="builTileInfo">Most of the functions of the platform are developed based on cansiter, which
                    makes chain-cloud naturally decentralized and 100% on-chain.</div>
                <div class="builtBox">
                    <img src="../../../../assets/chain_cloud/teamscan/dfinity.png" alt="" class="dfinityImg">
                    <div class="builtInfo">
                        <div class="builtInfoItem">1. Code hosting service, based on ICP, an infinitely scalable storage
                            protocol developed by motoko, which can easily and quickly submit code and pull code.</div>
                        <div class="builtInfoItem">2. The contract compilation platform, an efficient contract
                            compilation service developed based on go and rust, can compile canister for multiple users
                            at the same time, which is fast, convenient and efficient.</div>
                        <div class="builtInfoItem">3. Web code editor, a highly customized web code editor based on
                            ```monaco-editor```, allows developers to easily edit code online, supports code
                            highlighting and automatic completion.</div>
                        <div class="builtInfoItem">4. Decentralized Dapp-DAO organization, the dapp-dao mechanism based
                            on the proposal-scoring-voting model allows the community to interact with the project side
                            efficiently, so that the fluid democratic mechanism that ICP has always implemented can show
                            its power in the field of dapp judgment.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="comItem intobg">
            <div class="intoContent">
                <span>Challenges we ran into</span>
                <div class="intoContentInfo">Since we don't have a data center node running the ICP blockchain, we can't
                    get some data. This makes us have to find another way to let users upload some data by referring to
                    our buried hook in their canister, which actually causes a certain amount of damage to users. level
                    of inconvenience, although we will only collect non-sensitive data.</div>
            </div>
        </div>
        <div class="comItem proud">
            <div class="intoContent">
                <span>Accomplishments that we're proud of</span>
                <div class="intoContentInfo">1. We have developed a set of web code editors that enable developers to
                    edit code online and quickly deploy to the ICP network by clicking triggers.</div>
                <div class="intoContentInfo">2. We have developed a decentralized code hosting service based on the ICP
                    network, which enables everyone to trust the authenticity of the code.</div>
                <div class="intoContentInfo">3. We have introduced a decentralized governance method to evaluate
                    projects, including project value evaluation, project team member research, project development
                    progress tracking, project economic model analysis, project code auditing, etc. to comprehensively
                    consider the project and help the project While growing up, you can also enjoy the rewards of
                    project development</div>
            </div>
        </div>
        <div class="comItem learned">
            <div class="learnedContent">
                <div class="learnedTitle">What we learned</div>
                <div class="learnedBox">
                    <div class="learnedItem">1. The whole process and technical ability of project development based on
                        ICP and canister.</div>
                    <div class="learnedItem">2. The basic elements of the code hosting service and its working methods,
                        and the technical
                        path for decentralization.</div>
                    <div class="learnedItem">3. The whole process and technical ability of project development based on
                        ICP and canister.
                    </div>
                    <div class="learnedItem">4. The basic elements of the code hosting service and its working methods,
                        and the technical
                        path for decentralization.</div>
                </div>
            </div>
        </div>
        <div class="comItem cloud">
            <div class="cloudBlue">
                <div class="cloudBlueContent">
                    <div class="learnedTitle">What's next for chain-cloud</div>
                    <div class="cloudBox">
                        <div class="cloudItem">1. Fully implement and continuously optimize the above functions.</div>
                        <div class="cloudItem">2. Conduct media publicity and community promotion.</div>
                        <div class="cloudItem">3. Negotiate investment matters.</div>
                        <div class="cloudItem">4. Decide whether to issue tokens according to the policy situation.
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
        }
    },
    methods: {
    },
    created() {
    },
}

</script>
