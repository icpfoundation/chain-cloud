export const idlFactory = ({ IDL }) => {
  const Wallet = IDL.Record({
    'describe' : IDL.Text,
    'identity' : IDL.Principal,
  });
  return IDL.Service({
    'add_wallet' : IDL.Func([Wallet], [], []),
    'get_wallet' : IDL.Func([], [IDL.Opt(IDL.Vec(Wallet))], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
