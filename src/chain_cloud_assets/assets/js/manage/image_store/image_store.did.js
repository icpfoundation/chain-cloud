export const idlFactory = ({ IDL }) => {
  const Image = IDL.Record({
    'ptr': IDL.Nat64,
    'max_size': IDL.Nat64,
    'size': IDL.Nat64,
  });
  const imageStoreRes = IDL.Variant({ 'Ok': IDL.Null, 'Err': IDL.Text });
  return IDL.Service({
    'get_group_image': IDL.Func(
      [IDL.Principal, IDL.Nat64],
      [IDL.Vec(IDL.Nat8)],
      ['query'],
    ),
    'get_group_image_basic_info': IDL.Func(
      [IDL.Principal, IDL.Nat64],
      [IDL.Opt(Image)],
      ['query'],
    ),
    'get_project_image': IDL.Func(
      [IDL.Principal, IDL.Nat64, IDL.Nat64],
      [IDL.Vec(IDL.Nat8)],
      ['query'],
    ),
    'get_project_image_basic_info': IDL.Func(
      [IDL.Principal, IDL.Nat64, IDL.Nat64],
      [IDL.Opt(Image)],
      ['query'],
    ),
    'group_image_store': IDL.Func(
      [IDL.Principal, IDL.Nat64, IDL.Vec(IDL.Nat8)],
      [imageStoreRes],
      [],
    ),
    'project_image_store': IDL.Func(
      [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Vec(IDL.Nat8)],
      [imageStoreRes],
      [],
    ),
    'remove_group_image': IDL.Func(
      [IDL.Principal, IDL.Nat64],
      [imageStoreRes],
      [],
    ),
    'remove_project_image': IDL.Func(
      [IDL.Principal, IDL.Nat64, IDL.Nat64],
      [imageStoreRes],
      [],
    ),
    'update_manage_canister': IDL.Func([IDL.Principal], [], []),
  });
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
