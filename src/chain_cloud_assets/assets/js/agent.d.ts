import { HttpAgent } from "@dfinity/agent";
declare function getCanisterInfo(canister: string): any
declare const agent:HttpAgent
export { getCanisterInfo,agent }