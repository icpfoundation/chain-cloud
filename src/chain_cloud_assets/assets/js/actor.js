import { createActor, chain_cloud } from "../../../declarations/chain_cloud";
import { createActor as manageActor, } from "../js/manage/manage";
import { createActor as imageStore, } from "../js/manage/image_store";
import { createActor as canisterLog, } from "../js/manage/canister_log";
import ChainCloudCanister from "./chain_cloud";
import ManageCanister from "./manage";
import { MANAGE_CANISTER_LOCALNET, IMAGESTORE_CANISTER_LOCALNET, CANISTER_LOG_LOCALNET } from "./config"
const canisterId = process.env.CHAIN_CLOUD_CANISTER_ID;
var createActorLocal = createActor(canisterId, {
  agentOptions: {
    host: "http://localhost:8000",
  },
});
var createActorMain = createActor("bedhi-xqaaa-aaaaj-aadja-cai", {
  agentOptions: {
    host: "https://ic0.app",
  },
});

var manage_canister = manageActor(MANAGE_CANISTER_LOCALNET, {
  agentOptions: {
    host: "http://localhost:8000",
  },
});
var imageStore_canister = imageStore(IMAGESTORE_CANISTER_LOCALNET, {
  agentOptions: {
    host: "http://localhost:8000",
  },
});
var log_canister = canisterLog(CANISTER_LOG_LOCALNET, {
  agentOptions: {
    host: "http://localhost:8000",
  },
});


const chainCloudLocal = new ChainCloudCanister(createActorLocal);
const chainCloud = new ChainCloudCanister(createActorMain)
const manageCanister = new ManageCanister(manage_canister, imageStore_canister, log_canister)
export { chainCloudLocal, chainCloud, manageCanister }