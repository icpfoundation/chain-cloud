export const idlFactory = ({ IDL }) => {
  const imageStoreRes = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  return IDL.Service({
    'get_group_image' : IDL.Func(
        [IDL.Principal, IDL.Nat64],
        [IDL.Vec(IDL.Nat8)],
        ['query'],
      ),
    'get_project_image' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64],
        [IDL.Vec(IDL.Nat8)],
        ['query'],
      ),
    'group_image_store' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Vec(IDL.Nat8)],
        [imageStoreRes],
        [],
      ),
    'project_image_store' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Vec(IDL.Nat8)],
        [imageStoreRes],
        [],
      ),
    'update_manage_canister' : IDL.Func([IDL.Principal], [], []),
  });
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
