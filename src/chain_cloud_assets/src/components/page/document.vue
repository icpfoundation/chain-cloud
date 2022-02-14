<template>
  <div>
    <headerview></headerview>

    <h3>Coming soon</h3>

    <footerview></footerview>
  </div>
</template>

<script>
import headerview from "../common/header.vue";
import footerview from "../common/footer.vue";

export default {
  name: "DocumentView",
  data() {
    return {};
  },
  components: {
    headerview,
    footerview,
  },
  methods: {},
  mounted() {},
  destroyed() {},
};
</script>

<style scoped>
h3 {
    /* margin: 50px auto; */
    padding-left: 10%;
    width: 500px;
}
</style>
