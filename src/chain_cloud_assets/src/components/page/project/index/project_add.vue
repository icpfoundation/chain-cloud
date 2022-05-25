<style scoped>
.app { margin-top:1rem;
    width: 100%;
    padding-bottom: 100px;
}

.content {
    width: 1200px;
    margin: 0 auto;
}

.head {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 44px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
}

.line {
    width: 100%;
    height: 1px;
    background: #333333;
    margin: 20px 0 0 0;
}

.contentbox {
    display: flex;
    height: 740px;
}

.left {
    width: 280px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #818181;
    padding-right: 20px;
    border-right: 1px solid #CCCCCC;
}

.right {
    flex: 1;
    padding-left: 60px;
}

.wordStyle {
    margin-top: 20px;
}

.nameItem {
    display: flex;
    font-size: 13px;
    font-weight: 500;
    color: #333333;
    flex-direction: column;
    margin-top: 20px;
}


.description {
    font-size: 13px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    width: 720px;
    margin-top: 30px;
}

.fileBox {
    margin-top: 10px;
    display: flex;
    align-items: center;
    flex: 1;
}

.fileBox img {
    width: 60px;
    height: 60px;
    margin-right: 10px
}

.fileButtonBox {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #818181;
    position: relative;
}

.visibiliBox {
    display: flex;
    flex-direction: column;
}

.appleStyle {
    display: flex;
    flex-direction: column;
}

.radioDec {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #818181;
    margin-left: 10px;
}

.radioSel {
    font-size: 12px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
}

.radioImg {
    width: 16px;
    height: 16px;
    margin-top: 4px
}

.radioBox {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.upFileButton {
    width: 115px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #818181;
    text-align: center;
    line-height: 32px;
    cursor: pointer;
    margin-right: 10px;
}

.fileUpNone {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
    width: 100%;
}

.fileTop {
    display: flex;
    align-items: center;
}

.fileName {
    flex: 1;
    height: 32px;
    background: #F8F8F8;
    border-radius: 2px;
    padding: 0 0.1rem;
    line-height: 32px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
}

.saveButton {
    margin-top: 60px;
    width: 108px;
    height: 32px;
    background: #1776FF;
    border-radius: 4px;
    border: 1px solid #1776FF;
    text-align: center;
    line-height: 32px;
    font-size: 13px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    cursor: pointer;
}

.lineBottom {
    width: 100%;
    height: 1px;
    background: #F1F1F1;
}
</style>

<template>
    <div class="app">
        <div class="content">
            <div class="head">
                <span>New project</span>
            </div>
            <div class="line"></div>
            <div class="contentbox">
                <div class="left">
                    <div class="wordStyle">Projects allow you to manage and collaborate across multiple projects. Members
                        of a group have access to all of its projects.</div>
                    <div class="wordStyle">Projects can also be nested by creating subgroups.</div>
                    <div class="wordStyle">Projects that belong to a group are prefixed with the group namespace.
                        Existing projects may be moved into a group.</div>
                </div>
                <div class="right">
                    <div class="nameItem">
                        <span>Projects name</span>
                        <Input placeholder="Production project" style="width:320px;margin-top:10px" :clearable="true" />
                    </div>
                    <div class="nameItem">
                        <span>Projects URL</span>
                        <Input placeholder="my-awesome-project" style="width:720px;margin-top:10px" :clearable="true" />
                    </div>
                    <div class="description">
                        <span>Projects description (optional)</span>
                        <Input type="textarea" style="width:100%;margin-top:10px" placeholder="Multiline input" />
                    </div>
                    <div class="description">
                        <span>Projects avatar</span>
                        <div class="fileBox">
                            <img :src="imgurl" alt="">
                            <div class="fileButtonBox">
                                <div class="fileTop">
                                    <div class="upFileButton" style="margin-top:0">
                                        <span>Choose picture</span>
                                        <input type="file" class="fileUpNone" accept="image/*"
                                            @change="previewImage($event)">
                                    </div>
                                    <div class="fileName">{{ fileName }}</div>
                                </div>
                                <span>The maximum file size allowed is 200KB.</span>
                            </div>
                        </div>
                    </div>
                    <div class="description">
                        <span>Visibility level</span>
                        <div class="visibiliBox">
                            <Radio-group v-model="type">
                                <div class="radioBox">
                                    <Radio label="Private">
                                        <img src="../../../../../assets/chain_cloud/group/icon_private@2x.png" alt=""
                                            class="radioImg">
                                        <span class="radioSel">Private</span>
                                        <span class="radioDec">projects can only be viewed by
                                            mambers.</span>
                                    </Radio>
                                </div>
                                <div class="radioBox">
                                    <Radio label="Public">
                                        <img src="../../../../../assets/chain_cloud/group/icon_pubilc@2x.png" alt=""
                                            class="radioImg">
                                        <span class="radioSel">Public</span>
                                        <span class="radioDec"> projects can be viewed without
                                            any
                                            authentication.</span>
                                    </Radio>
                                </div>
                            </Radio-group>
                        </div>
                    </div>
                    <div class="saveButton" @click="saveFun">Create project</div>
                </div>
            </div>
        </div>
        <div class="lineBottom"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            type: "Public",
            fileName: "No file chosen…",
            imgurl: require('../../../../../assets/chain_cloud/menu/pic_group_avatar@2x.png')
        }
    },
    methods: {
        saveFun() {
            this.$Notice.info({
                title: "暂无上传接口",
                background: true,
                duration: 3
            });
        },
        previewImage(e) {
            var dt = e.target;
            for (var i = 0; i !== dt.files.length; i++) {
                let that = this;//改变this指向
                let files = dt.files[0];//图片文件名
                if (!e || !window.FileReader) return; // 看是否支持FileReader
                let reader = new FileReader();
                reader.readAsDataURL(files); // 关键一步，在这里转换的
                reader.onloadend = function () {
                    that.imgurl = this.result;//赋值
                }
                this.fileName = dt.files[i].name
            }
        },
    },
    created() {
    },
}
</script>
