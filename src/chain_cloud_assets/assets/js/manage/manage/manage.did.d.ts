import type { Principal } from '@dfinity/principal';
export type Authority = { 'Read' : null } |
  { 'Write' : null } |
  { 'Operational' : null };
export interface CanisterSettings {
  'freezing_threshold' : [] | [bigint],
  'controllers' : [] | [Array<Principal>],
  'memory_allocation' : [] | [bigint],
  'compute_allocation' : [] | [bigint],
}
export type CanisterStatus = { 'stopped' : null } |
  { 'stopping' : null } |
  { 'running' : null };
export type CanisterStatusRes = { 'Ok' : [CanisterStatusResponse, bigint] } |
  { 'Err' : string };
export interface CanisterStatusResponse {
  'status' : CanisterStatus,
  'memory_size' : bigint,
  'cycles' : bigint,
  'settings' : CanisterSettings,
  'module_hash' : [] | [Array<number>],
}
export type GetGroupMemberInfoRes = { 'Ok' : Member } |
  { 'Err' : string };
export interface Group {
  'id' : bigint,
  'url' : string,
  'members' : Array<[Principal, Member]>,
  'projects' : Array<[bigint, Project]>,
  'name' : string,
  'description' : string,
  'create_time' : bigint,
  'visibility' : Profile,
}
export type GroupInfoRes = { 'Ok' : [] | [Group] } |
  { 'Err' : string };
export type InstallCodeMode = { 'reinstall' : null } |
  { 'upgrade' : null } |
  { 'install' : null };
export interface Member {
  'join_time' : bigint,
  'name' : string,
  'authority' : Authority,
  'identity' : Principal,
  'expiration_time' : [] | [bigint],
}
export type OptGroupRes = { 'Ok' : null } |
  { 'Err' : string };
export type Profile = { 'Private' : null } |
  { 'Public' : null };
export interface Project {
  'id' : bigint,
  'function' : ProjectType,
  'members' : Array<[Principal, Member]>,
  'canister_cycle_floor' : bigint,
  'name' : string,
  'create_by' : Principal,
  'description' : string,
  'git_repo_url' : string,
  'create_time' : bigint,
  'canisters' : Array<Principal>,
  'visibility' : Profile,
  'in_group' : bigint,
}
export type ProjectInfoRes = { 'Ok' : [] | [Project] } |
  { 'Err' : string };
export type ProjectType = { 'NFT' : null } |
  { 'Sns' : null } |
  { 'Games' : null } |
  { 'Dapp' : null } |
  { 'Defi' : null } |
  { 'Infrastructure' : null } |
  { 'Swap' : null } |
  { 'Bridge' : null } |
  { 'Tools' : null } |
  { 'Authentication' : null } |
  { 'Official' : null } |
  { 'Metaverse' : null } |
  { 'Wallet' : null };
export interface RelationProject { 'group_id' : bigint, 'project_id' : bigint }
export type Result = { 'Ok' : null } |
  { 'Err' : string };
export interface User {
  'user_name' : string,
  'groups' : Array<[bigint, Group]>,
  'create_time' : bigint,
  'identity' : Principal,
  'relation_project' : Array<[Principal, Array<RelationProject>]>,
  'profile' : Profile,
}
export type UserRes = { 'Ok' : User } |
  { 'Err' : string };
export interface _SERVICE {
  'add_group' : (arg_0: Principal, arg_1: Group) => Promise<OptGroupRes>,
  'add_group_member' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: Member,
    ) => Promise<OptGroupRes>,
  'add_project' : (arg_0: Principal, arg_1: bigint, arg_2: Project) => Promise<
      OptGroupRes
    >,
  'add_project_canister' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Principal,
    ) => Promise<OptGroupRes>,
  'add_project_member' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Member,
    ) => Promise<OptGroupRes>,
  'add_user' : (arg_0: string, arg_1: Profile) => Promise<OptGroupRes>,
  'delete_project_canister' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Principal,
    ) => Promise<OptGroupRes>,
  'get_canister_status' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Principal,
    ) => Promise<CanisterStatusRes>,
  'get_group_info' : (arg_0: Principal, arg_1: bigint) => Promise<GroupInfoRes>,
  'get_group_member_info' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: Principal,
    ) => Promise<GetGroupMemberInfoRes>,
  'get_project_info' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<ProjectInfoRes>,
  'get_user_info' : (arg_0: Principal) => Promise<UserRes>,
  'install_code' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Principal,
      arg_4: InstallCodeMode,
      arg_5: Array<number>,
      arg_6: Array<number>,
    ) => Promise<OptGroupRes>,
  'remove_group' : (arg_0: Principal, arg_1: bigint) => Promise<OptGroupRes>,
  'remove_group_member' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: Principal,
    ) => Promise<OptGroupRes>,
  'remove_project' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<OptGroupRes>,
  'remove_project_canister' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Principal,
    ) => Promise<OptGroupRes>,
  'remove_project_member' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Principal,
    ) => Promise<OptGroupRes>,
  'start_project_canister' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Principal,
    ) => Promise<OptGroupRes>,
  'stop_project_canister' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Principal,
    ) => Promise<OptGroupRes>,
  'update_canister_cycle_floor' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: bigint,
    ) => Promise<OptGroupRes>,
  'update_group_basic_information' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: string,
      arg_3: string,
      arg_4: Profile,
      arg_5: string,
    ) => Promise<OptGroupRes>,
  'update_group_member_authority' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: Principal,
      arg_3: Authority,
    ) => Promise<OptGroupRes>,
  'update_log_canister' : (arg_0: Principal) => Promise<undefined>,
  'update_project_basic_information' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: string,
      arg_4: string,
      arg_5: Profile,
      arg_6: string,
      arg_7: bigint,
      arg_8: Array<Principal>,
    ) => Promise<OptGroupRes>,
  'update_project_description' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: string,
    ) => Promise<OptGroupRes>,
  'update_project_git_repo_url' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: string,
    ) => Promise<OptGroupRes>,
  'update_project_member_authority' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Principal,
      arg_4: Authority,
    ) => Promise<OptGroupRes>,
  'update_project_visibility' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Profile,
    ) => Promise<OptGroupRes>,
  'visible_project' : () => Promise<Array<Array<[Principal, bigint, Group]>>>,
}
