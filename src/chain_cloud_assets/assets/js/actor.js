import { createActor, chain_cloud } from "../../../declarations/chain_cloud";
import { createActor as manageActor, } from "../js/manage/manage";
import { idlFactory as manageDID, } from "../js/manage/manage/manage.did.js";
import { createActor as imageStore, } from "../js/manage/image_store";
import { idlFactory as imageStoreDID, } from "../js/manage/image_store/image_store.did.js";
import { createActor as canisterLog, } from "../js/manage/canister_log";
import { idlFactory as canisterLogDID, } from "../js/manage/canister_log/canister_log.did.js";
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

function initManageCanister(identity, host = "http://localhost:8000") {
  let manage_canister = manageActor(MANAGE_CANISTER_LOCALNET, {
    agentOptions: {
      host: host,
      identity: identity
    },
  });
  let imageStore_canister = imageStore(IMAGESTORE_CANISTER_LOCALNET, {
    agentOptions: {
      host: host,
      identity: identity
    },
  });
  let log_canister = canisterLog(CANISTER_LOG_LOCALNET, {
    agentOptions: {
      host: host,
      identity: identity
    },
  })
  return new ManageCanister(manage_canister, imageStore_canister, log_canister, identity._principal)
}



async function initPlug(host = "http://localhost:8000") {

  let whitelist = [MANAGE_CANISTER_LOCALNET, IMAGESTORE_CANISTER_LOCALNET, CANISTER_LOG_LOCALNET];


  let publicKey = await window.ic.plug.requestConnect({
    whitelist,
    host,
  });




  let principalId = await window.ic.plug.agent.getPrincipal();


  let manageActor = await window.ic.plug.createActor({
    canisterId: MANAGE_CANISTER_LOCALNET,
    interfaceFactory: manageDID,
    host,
  });
  await window.ic.plug.agent.fetchRootKey();
  let imageActor = await window.ic.plug.createActor({
    canisterId: IMAGESTORE_CANISTER_LOCALNET,
    interfaceFactory: imageStoreDID,
    host,
  });
  await window.ic.plug.agent.fetchRootKey();
  let logActor = await window.ic.plug.createActor({
    canisterId: CANISTER_LOG_LOCALNET,
    interfaceFactory: canisterLogDID,
    host,
  });

  await window.ic.plug.agent.fetchRootKey();

  return new ManageCanister(manageActor, imageActor, logActor, principalId)

}


const chainCloudLocal = new ChainCloudCanister(createActorLocal);
const chainCloud = new ChainCloudCanister(createActorMain)
const manageCanister = new ManageCanister(manage_canister, imageStore_canister, log_canister)
export { chainCloudLocal, chainCloud, manageCanister, initManageCanister, initPlug }