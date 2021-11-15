<template>
  <div id="viewAll">
    <div class="viewAll_title">viewAll</div>
    <div class="canister_content_top_content">
      <ul class="canister_content_top_ul">
        <li v-for="item in canister" :key="item.id">
          <p>{{ item.canister_id }}</p>
          <p>subnet: {{ item.subnet }}</p>
          <p>{{ item.create_time }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { formatDate, past } from "../../../assets/js/util";
import { chainCloudLocal } from "../../../assets/js/actor";
export default {
  data() {
    return {
      canister: [],
    };
  },
  created() {
    let principle = this.$store.getters.getPrinciple();
    if (!principle) {
      this.$router.replace("/404");
    }
    this.principle = principle.toString();
  },
  async mounted() {
    let principle = this.$store.getters.getPrinciple();
    let result;
    try {
      result = await chainCloudLocal.getCanisterByPrinciple(
        principle.toString()
      );
    } catch (err) {
      console.log("Network connection failed, error reason:", err);
      return;
    }
    for (let i = 0; i < result.length; i++) {
      Object.defineProperty(result[i], "id", {
        value: i,
        writable: true,
      });
      this.canister.push(result[i]);
      this.canister[i].create_time = past(result[i].create_time);
    }
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
#viewAll {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.viewAll_title {
  display: flex;
  font-size: 15px;
  font-weight: 900;
  align-items: center;
  height: 10%;
  width: 100%;
  background-color: white;
  text-indent: 10px;
}
.canister_content_top_content {
  display: flex;
  width: 98%;
  align-content: center;
  justify-items: center;
  height: 83%;
  margin-left: 1%;
  background-color: white;
}
.canister_content_top_ul {
  margin: 0;
  padding: 0;
}
.canister_content_top_ul {
  list-style: none;
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.canister_content_top_ul li {
  display: inline-block;
  border-radius: 5px;
  line-height: 10px;
  width: 30%;
  height: 25%;
  margin-left: 2.65%;
  margin-top: 1%;
  background-color: #f3f3f3;
  flex-wrap: wrap;
  align-content: center;
}
.canister_content_top_ul li p {
  margin-left: 6%;
  align-items: center;
  display: flex;
  width: 88%;
  height: 20%;
  margin-top: 4%;
}
.canister_content_top_ul li p:first-child {
  font-size: 15px;
  font-weight: 600;
}
.canister_content_top_ul li p:nth-child(2) {
  font-size: 13px;
  font-weight: 400;
}
.canister_content_top_ul li p:last-child {
  font-size: 12px;
  color: rgb(161, 161, 161);
}
</style>