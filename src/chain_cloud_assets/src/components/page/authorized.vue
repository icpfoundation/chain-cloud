<template>
  <div>
    <headerview></headerview>

    <div class="authedview">
      <img src="../../../assets/img/nav_logo@2x.png" alt="logo" />
      <h3>Authoried</h3>
    </div>

    <footerview></footerview>
  </div>
</template>

<script>
import headerview from "../common/header.vue";
import footerview from "../common/footer.vue";

export default {
  name: "authorizedview",
  data() {
    return {};
  },
  components: {
    headerview,
    footerview,
  },
  methods: {},
  mounted() {
  },
  destroyed() {},
};
</script>

<style scoped>
.authedview {
  width: 20%;
  margin: 300px auto;
  text-align: center;
}
</style>
