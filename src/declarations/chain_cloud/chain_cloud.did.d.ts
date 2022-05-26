import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

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
export interface Metadata {
  'transaction_time' : bigint,
  'memo' : string,
  'cycle' : bigint,
  'method_name' : string,
  'canister' : Principal,
  'caller' : Principal,
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
  'commitCanister' : ActorMethod<[CommitCanister], undefined>,
  'createEvent' : ActorMethod<[Metadata], Result>,
  'getCallerEvent' : ActorMethod<[Principal, bigint, bigint], Array<Metadata>>,
  'getCanisterById' : ActorMethod<
    [Principal, Principal],
    GetCanisterByIdResult,
  >,
  'getCanisterByPrinciple' : ActorMethod<[Principal], Array<CommitCanister>>,
  'getCanisterEvent' : ActorMethod<
    [Principal, bigint, bigint],
    Array<Metadata>,
  >,
  'getCanisterEventByTime' : ActorMethod<[Principal, bigint], Array<Metadata>>,
  'getCanisterLastEvent' : ActorMethod<[Principal, bigint], Array<Metadata>>,
  'getCanisterList' : ActorMethod<[], Array<Principal>>,
  'getCanisterStatus' : ActorMethod<[Principal, CallType], StatusResult>,
  'getLastEvent' : ActorMethod<[bigint], Array<Metadata>>,
  'getLocalCanisterList' : ActorMethod<[], Array<CanisterStatusFormat>>,
}
