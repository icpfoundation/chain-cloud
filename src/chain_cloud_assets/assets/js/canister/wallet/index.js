import { Actor, HttpAgent } from "@dfinity/agent";
// Imports and re-exports candid interface
import { idlFactory } from './wallet.did.js';
export { idlFactory } from './wallet.did.js';
// CANISTER_ID is replaced by webpack based on node environment
export const canisterId = process.env.CHAIN_CLOUD_CANISTER_ID;

/**
 * 
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./chain_cloud.did.js")._SERVICE>}
 */
 export const walletActor = (canisterId, options) => {
  const agent = new HttpAgent({ ...options?.agentOptions });
  
  // Fetch root key for certificate validation during development
  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options?.actorOptions,
  });
};
  
/**
 * A ready-to-use agent for the chain_cloud canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./chain_cloud.did.js")._SERVICE>}
 */
 export const DefaultWalletActor = walletActor(canisterId);
 