<template>
  <div>
    <h3>HOME</h3>
    <button @click="doSomething">{{ principal }}</button>
  </div>
</template>

<script>
import { AuthClient } from "@dfinity/auth-client";
import { Actor, HttpAgent } from "@dfinity/agent";
import { DelegationIdentity } from "@dfinity/identity";
import { Principal } from "@dfinity/principal";

export default {
  name: "Home",
  data() {
    return {
        principal: "LOGIN",
        IDENTITY_URL: "https://identity.ic0.app",
        maxTimeToLive: 120,
        authClient: null,
    };
  },
  components: {},
  methods: {
    doSomething: async function (event) {
      if (event) {
        alert(event.target.tagName + "" + this.IDENTITY_URL);

        this.authClient.login({
          identityProvider: this.IDENTITY_URL,
          onSuccess: () => {
            let identity = this.authClient.getIdentity();
            let principle = identity.getPrincipal();
            this.principal = principle;

            console.log("Logged in with II: " + this.principle);
          },
          onError: (str) => {
            console.log("Error while logging with II: " + str);
          },
        });
      }
    },
  },
  mounted() {
      const init = async () => {
          this.authClient = await AuthClient.create();
      }

      init();
  },
  destroyed() {},
};
</script>
