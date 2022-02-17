import type { Principal } from '@dfinity/principal';
export type CallType = { 'Local' : null } |
  { 'Remote' : null };
export interface CanisterSettings {
  'controller' : [] | [Principal],
  'freezing_threshold' : [] | [bigint],
  'memory_allocation' : [] | [bigint],
  'compute_allocation' : [] | [bigint],
}
export type CanisterStatus = { 'stopped' : null } |
  { 'stopping' : null } |
  { 'running' : null };
export interface CanisterStatusFormat {
  'controller' : Principal,
  'status' : CanisterStatus,
  'memory_size' : bigint,
  'cycles' : bigint,
  'settings' : CanisterSettings,
  'module_hash' : [] | [string],
}
export type CanisterType = { 'ui' : null } |
  { 'server' : null } |
  { 'wallet' : null };
export interface CommitCanister {
  'controller' : Principal,
  'status' : CanisterStatus,
  'principle' : Principal,
  'balance' : bigint,
  'memory_size' : bigint,
  'canister_id' : Principal,
  'create_time' : bigint,
  'subnet' : string,
  'module_hash' : string,
  'canister_type' : CanisterType,
}
export type GetCanisterByIdResult = { 'Ok' : CommitCanister } |
  { 'Err' : string };
export interface Log {
  'transaction_time' : bigint,
  'memo' : string,
  'cycle' : bigint,
  'method_name' : string,
  'canister' : Principal,
  'caller' : Principal,
  'cycle_accept' : bigint,
  'stable_size' : bigint,
}
export type Result = { 'Ok' : null } |
  { 'Err' : string };
export type StatusResult = { 'Ok' : CanisterStatusFormat } |
  { 'Err' : string };
export type createCanisterResult = { 'Ok' : Principal } |
  { 'Err' : string };
export type updateResult = { 'Ok' : null } |
  { 'Err' : string };
export interface _SERVICE {
  'commitCanister' : (arg_0: CommitCanister) => Promise<undefined>,
  'createEvent' : (arg_0: Log) => Promise<Result>,
  'getCallerEvent' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<Array<Log>>,
  'getCanisterById' : (arg_0: Principal, arg_1: Principal) => Promise<
      GetCanisterByIdResult
    >,
  'getCanisterByPrinciple' : (arg_0: Principal) => Promise<
      Array<CommitCanister>
    >,
  'getCanisterEvent' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<Array<Log>>,
  'getCanisterEventByTime' : (arg_0: Principal, arg_1: bigint) => Promise<
      Array<Log>
    >,
  'getCanisterLastEvent' : (arg_0: Principal, arg_1: bigint) => Promise<
      Array<Log>
    >,
  'getCanisterList' : () => Promise<Array<Principal>>,
  'getCanisterStatus' : (arg_0: Principal, arg_1: CallType) => Promise<
      StatusResult
    >,
  'getLastEvent' : (arg_0: bigint) => Promise<Array<Log>>,
  'getLocalCanisterList' : () => Promise<Array<CanisterStatusFormat>>,
  'is_canister' : (arg_0: Principal) => Promise<undefined>,
}
