import type { Principal } from '@dfinity/principal';
export type Action = { 'UpdateProject' : [bigint, bigint, string] } |
  { 'UpdateProjectCanister' : [bigint, bigint, string] } |
  { 'UpdateGroup' : [bigint, string] };
export interface _SERVICE {
  'create_log' : (
      arg_0: Principal,
      arg_1: bigint,
      arg_2: Principal,
      arg_3: Array<number>,
    ) => Promise<undefined>,
  'get_log' : (arg_0: Principal, arg_1: bigint, arg_2: bigint) => Promise<
      [] | [Array<[Principal, bigint, Action, Array<string>]>]
    >,
}
