import { createActor, chain_cloud } from "../../../declarations/chain_cloud";
import ChainCloudCanister from "./chain_cloud";
const canisterId = process.env.CHAIN_CLOUD_CANISTER_ID;
var createActorLocal = createActor(canisterId, {
  agentOptions: {
    host: "http://localhost:8000",
  },
});
var createActorMain = createActor(canisterId, {
  agentOptions: {
    host: "https://ic0.app",
  },
});
const chainCloudLocal = new ChainCloudCanister(createActorLocal);
const chainCloud = new ChainCloudCanister(createActorMain)

export { chainCloudLocal, chainCloud }