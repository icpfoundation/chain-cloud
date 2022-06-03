import type { Principal } from '@dfinity/principal';
export interface Wallet { 'describe' : string, 'identity' : Principal }
export interface _SERVICE {
  'add_wallet' : (arg_0: Wallet) => Promise<undefined>,
  'get_wallet' : () => Promise<[] | [Array<Wallet>]>,
}
