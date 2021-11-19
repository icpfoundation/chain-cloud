import { HttpAgent } from "@dfinity/agent";
declare function getCanisterInfo(canister: string): any;
declare function  getWalletCycle(identity:any,canisterId:string)
declare const agent:HttpAgent
export { getCanisterInfo,agent,getWalletCycle}
