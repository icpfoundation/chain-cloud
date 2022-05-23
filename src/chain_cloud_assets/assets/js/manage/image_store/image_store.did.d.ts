import type { Principal } from '@dfinity/principal';
export type imageStoreRes = { 'Ok' : null } |
  { 'Err' : string };
export interface _SERVICE {
  'get_image' : (arg_0: Principal, arg_1: bigint) => Promise<Array<number>>,
  'image_store' : (
      arg_0: Principal,
      arg_1: Principal,
      arg_2: bigint,
      arg_3: Array<number>,
    ) => Promise<imageStoreRes>,
}
