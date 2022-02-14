<template>
  <div>
    <headerview></headerview>

    <div class="docview">
      <p><a href="https://storageapi.fleek.co/lyswifter-team-bucket/chain-cloud/Chain-cloud production design doc.pdf">Chain-Cloud production design documnet</a></p>
    </div>

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
.docview {
  margin: 50px auto;
  width: 85%;
  font-family: "Work Sans", "Roboto", "Nunito Sans", Helvetica, Arial, sans-serif;
  font-weight: normal;
}
</style>
