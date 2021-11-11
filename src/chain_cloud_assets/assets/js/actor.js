import { createActor } from "../../../declarations/chain_cloud";
import ChainCloudCanister from "./chain_cloud";
let createActorTest = createActor("rrkah-fqaaa-aaaaa-aaaaq-cai", {
    agentOptions: {
      host: "http://localhost:8000",
    },
});
const chainCloud = new ChainCloudCanister(createActorTest); 
export { chainCloud }