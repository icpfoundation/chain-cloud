export const idlFactory = ({ IDL }) => {
  const Action = IDL.Variant({
    'UpdateProject' : IDL.Tuple(IDL.Nat64, IDL.Nat64, IDL.Text),
    'UpdateProjectCanister' : IDL.Tuple(IDL.Nat64, IDL.Nat64, IDL.Text),
    'UpdateGroup' : IDL.Tuple(IDL.Nat64, IDL.Text),
  });
  return IDL.Service({
    'create_log' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Principal, IDL.Vec(IDL.Nat8)],
        [],
        [],
      ),
    'get_log' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64],
        [
          IDL.Opt(
            IDL.Vec(
              IDL.Tuple(IDL.Principal, IDL.Nat64, Action, IDL.Vec(IDL.Text))
            )
          ),
        ],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
