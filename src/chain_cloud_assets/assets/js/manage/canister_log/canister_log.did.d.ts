import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'create_log' : (arg_0: Principal, arg_1: Array<number>) => Promise<undefined>,
  'get_log' : (arg_0: Principal, arg_1: bigint) => Promise<
      [] | [Array<Array<string>>]
    >,
}
