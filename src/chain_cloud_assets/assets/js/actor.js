import { createActor, chain_cloud } from "../../../declarations/chain_cloud";
import ChainCloudCanister from "./chain_cloud";
const canisterId = process.env.CHAIN_CLOUD_CANISTER_ID;
var createActorLocal = createActor(canisterId, {
  agentOptions: {
    host: "http://localhost:8000",
  },
});
const chainCloudLocal = new ChainCloudCanister(createActorLocal);
const chainCloud = new ChainCloudCanister(chain_cloud)

export { chainCloudLocal, chainCloud }