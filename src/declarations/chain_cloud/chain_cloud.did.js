export const idlFactory = ({ IDL }) => {
  const CanisterStatus = IDL.Variant({
    'stopped' : IDL.Null,
    'stopping' : IDL.Null,
    'running' : IDL.Null,
  });
  const CanisterType = IDL.Variant({
    'ui' : IDL.Null,
    'server' : IDL.Null,
    'wallet' : IDL.Null,
  });
  const CommitCanister = IDL.Record({
    'controller' : IDL.Principal,
    'status' : CanisterStatus,
    'principle' : IDL.Principal,
    'balance' : IDL.Nat,
    'memory_size' : IDL.Nat,
    'canister_id' : IDL.Principal,
    'create_time' : IDL.Nat,
    'subnet' : IDL.Text,
    'module_hash' : IDL.Text,
    'canister_type' : CanisterType,
  });
  const Metadata = IDL.Record({
    'transaction_time' : IDL.Nat,
    'memo' : IDL.Text,
    'cycle' : IDL.Nat,
    'method_name' : IDL.Text,
    'canister' : IDL.Principal,
    'caller' : IDL.Principal,
    'stable_size' : IDL.Nat,
  });
  const Result = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  const GetCanisterByIdResult = IDL.Variant({
    'Ok' : CommitCanister,
    'Err' : IDL.Text,
  });
  const CallType = IDL.Variant({ 'Local' : IDL.Null, 'Remote' : IDL.Null });
  const CanisterSettings = IDL.Record({
    'controller' : IDL.Opt(IDL.Principal),
    'freezing_threshold' : IDL.Opt(IDL.Nat),
    'memory_allocation' : IDL.Opt(IDL.Nat),
    'compute_allocation' : IDL.Opt(IDL.Nat),
  });
  const CanisterStatusFormat = IDL.Record({
    'controller' : IDL.Principal,
    'status' : CanisterStatus,
    'memory_size' : IDL.Nat,
    'cycles' : IDL.Nat,
    'settings' : CanisterSettings,
    'module_hash' : IDL.Opt(IDL.Text),
  });
  const StatusResult = IDL.Variant({
    'Ok' : CanisterStatusFormat,
    'Err' : IDL.Text,
  });
  return IDL.Service({
    'commitCanister' : IDL.Func([CommitCanister], [], []),
    'createEvent' : IDL.Func([Metadata], [Result], []),
    'getCallerEvent' : IDL.Func(
        [IDL.Principal, IDL.Nat, IDL.Nat],
        [IDL.Vec(Metadata)],
        ['query'],
      ),
    'getCanisterById' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [GetCanisterByIdResult],
        ['query'],
      ),
    'getCanisterByPrinciple' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(CommitCanister)],
        ['query'],
      ),
    'getCanisterEvent' : IDL.Func(
        [IDL.Principal, IDL.Nat, IDL.Nat],
        [IDL.Vec(Metadata)],
        ['query'],
      ),
    'getCanisterEventByTime' : IDL.Func(
        [IDL.Principal, IDL.Nat],
        [IDL.Vec(Metadata)],
        ['query'],
      ),
    'getCanisterLastEvent' : IDL.Func(
        [IDL.Principal, IDL.Nat],
        [IDL.Vec(Metadata)],
        ['query'],
      ),
    'getCanisterList' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getCanisterStatus' : IDL.Func(
        [IDL.Principal, CallType],
        [StatusResult],
        [],
      ),
    'getLastEvent' : IDL.Func([IDL.Nat], [IDL.Vec(Metadata)], ['query']),
    'getLocalCanisterList' : IDL.Func(
        [],
        [IDL.Vec(CanisterStatusFormat)],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
