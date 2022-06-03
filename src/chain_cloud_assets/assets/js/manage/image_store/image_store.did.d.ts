import type { Principal } from '@dfinity/principal';
export type imageStoreRes = { 'Ok' : null } |
  { 'Err' : string };
export interface _SERVICE {
  'get_group_image' : (arg_0: Principal, arg_1: bigint) => Promise<
      Array<number>
    >,
  'get_project_image' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
    ) => Promise<Array<number>>,
  'group_image_store' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: Array<number>,
    ) => Promise<imageStoreRes>,
  'project_image_store' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: bigint,
      arg_3: Array<number>,
    ) => Promise<imageStoreRes>,
  'update_manage_canister' : (arg_0: Principal) => Promise<undefined>,
}
