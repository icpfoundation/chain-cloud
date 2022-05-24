export const idlFactory = ({ IDL }) => {
  const imageStoreRes = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  return IDL.Service({
    'get_image' : IDL.Func(
        [IDL.Principal, IDL.Nat64],
        [IDL.Vec(IDL.Nat8)],
        ['query'],
      ),
    'image_store' : IDL.Func(
        [IDL.Principal, IDL.Principal, IDL.Nat64, IDL.Vec(IDL.Nat8)],
        [imageStoreRes],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
