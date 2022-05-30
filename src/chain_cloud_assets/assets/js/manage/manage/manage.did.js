export const idlFactory = ({ IDL }) => {
  const Authority = IDL.Variant({
    'Read' : IDL.Null,
    'Write' : IDL.Null,
    'Operational' : IDL.Null,
  });
  const Member = IDL.Record({
    'join_time' : IDL.Nat64,
    'name' : IDL.Text,
    'authority' : Authority,
    'identity' : IDL.Principal,
  });
  const ProjectType = IDL.Variant({
    'NFT' : IDL.Null,
    'Sns' : IDL.Null,
    'Games' : IDL.Null,
    'Dapp' : IDL.Null,
    'Defi' : IDL.Null,
    'Infrastructure' : IDL.Null,
    'Swap' : IDL.Null,
    'Bridge' : IDL.Null,
    'Tools' : IDL.Null,
    'Authentication' : IDL.Null,
    'Official' : IDL.Null,
    'Metaverse' : IDL.Null,
    'Wallet' : IDL.Null,
  });
  const Profile = IDL.Variant({ 'Private' : IDL.Null, 'Public' : IDL.Null });
  const Project = IDL.Record({
    'id' : IDL.Nat64,
    'function' : ProjectType,
    'members' : IDL.Vec(IDL.Tuple(IDL.Principal, Member)),
    'canister_cycle_floor' : IDL.Nat,
    'name' : IDL.Text,
    'create_by' : IDL.Principal,
    'description' : IDL.Text,
    'git_repo_url' : IDL.Text,
    'create_time' : IDL.Nat64,
    'canisters' : IDL.Vec(IDL.Principal),
    'visibility' : Profile,
    'in_group' : IDL.Nat64,
  });
  const Group = IDL.Record({
    'id' : IDL.Nat64,
    'members' : IDL.Vec(IDL.Tuple(IDL.Principal, Member)),
    'projects' : IDL.Vec(IDL.Tuple(IDL.Nat64, Project)),
    'name' : IDL.Text,
    'description' : IDL.Text,
    'create_time' : IDL.Nat64,
    'visibility' : Profile,
  });
  const OptGroupRes = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  const CanisterStatus = IDL.Variant({
    'stopped' : IDL.Null,
    'stopping' : IDL.Null,
    'running' : IDL.Null,
  });
  const CanisterSettings = IDL.Record({
    'freezing_threshold' : IDL.Opt(IDL.Nat),
    'controllers' : IDL.Opt(IDL.Vec(IDL.Principal)),
    'memory_allocation' : IDL.Opt(IDL.Nat),
    'compute_allocation' : IDL.Opt(IDL.Nat),
  });
  const CanisterStatusResponse = IDL.Record({
    'status' : CanisterStatus,
    'memory_size' : IDL.Nat,
    'cycles' : IDL.Nat,
    'settings' : CanisterSettings,
    'module_hash' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const CanisterStatusRes = IDL.Variant({
    'Ok' : IDL.Tuple(CanisterStatusResponse, IDL.Nat),
    'Err' : IDL.Text,
  });
  const GroupInfoRes = IDL.Variant({ 'Ok' : IDL.Opt(Group), 'Err' : IDL.Text });
  const GetGroupMemberInfoRes = IDL.Variant({
    'Ok' : Member,
    'Err' : IDL.Text,
  });
  const ProjectInfoRes = IDL.Variant({
    'Ok' : IDL.Opt(Project),
    'Err' : IDL.Text,
  });
  const RelationProject = IDL.Record({
    'group_id' : IDL.Nat64,
    'project_id' : IDL.Nat64,
  });
  const User = IDL.Record({
    'user_name' : IDL.Text,
    'groups' : IDL.Vec(IDL.Tuple(IDL.Nat64, Group)),
    'identity' : IDL.Principal,
    'relation_project' : IDL.Vec(
      IDL.Tuple(IDL.Principal, IDL.Vec(RelationProject))
    ),
    'profile' : Profile,
  });
  const UserRes = IDL.Variant({ 'Ok' : User, 'Err' : IDL.Text });
  const InstallCodeMode = IDL.Variant({
    'reinstall' : IDL.Null,
    'upgrade' : IDL.Null,
    'install' : IDL.Null,
  });
  return IDL.Service({
    'add_group' : IDL.Func([IDL.Principal, Group], [OptGroupRes], []),
    'add_group_member' : IDL.Func(
        [IDL.Principal, IDL.Nat64, Member],
        [OptGroupRes],
        [],
      ),
    'add_project' : IDL.Func(
        [IDL.Principal, IDL.Nat64, Project],
        [OptGroupRes],
        [],
      ),
    'add_project_canister' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Principal],
        [OptGroupRes],
        [],
      ),
    'add_project_member' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, Member],
        [OptGroupRes],
        [],
      ),
    'add_user' : IDL.Func([IDL.Text, Profile], [OptGroupRes], []),
    'delete_project_canister' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Principal],
        [OptGroupRes],
        [],
      ),
    'get_canister_status' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Principal],
        [CanisterStatusRes],
        [],
      ),
    'get_group_info' : IDL.Func(
        [IDL.Principal, IDL.Nat64],
        [GroupInfoRes],
        ['query'],
      ),
    'get_group_member_info' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Principal],
        [GetGroupMemberInfoRes],
        ['query'],
      ),
    'get_project_info' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64],
        [ProjectInfoRes],
        ['query'],
      ),
    'get_user_info' : IDL.Func([IDL.Principal], [UserRes], ['query']),
    'install_code' : IDL.Func(
        [
          IDL.Principal,
          IDL.Nat64,
          IDL.Nat64,
          IDL.Principal,
          InstallCodeMode,
          IDL.Vec(IDL.Nat8),
          IDL.Vec(IDL.Nat8),
        ],
        [OptGroupRes],
        [],
      ),
    'remove_group' : IDL.Func([IDL.Principal, IDL.Nat64], [OptGroupRes], []),
    'remove_group_member' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Principal],
        [OptGroupRes],
        [],
      ),
    'remove_project' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64],
        [OptGroupRes],
        [],
      ),
    'remove_project_canister' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Principal],
        [OptGroupRes],
        [],
      ),
    'remove_project_member' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Principal],
        [OptGroupRes],
        [],
      ),
    'start_project_canister' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Principal],
        [OptGroupRes],
        [],
      ),
    'stop_project_canister' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Principal],
        [OptGroupRes],
        [],
      ),
    'update_canister_cycle_floor' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Nat],
        [OptGroupRes],
        [],
      ),
    'update_group_member_authority' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Principal, Authority],
        [OptGroupRes],
        [],
      ),
    'update_group_name_and_description_and_visibility' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Text, IDL.Text, Profile],
        [OptGroupRes],
        [],
      ),
    'update_log_canister' : IDL.Func([IDL.Principal], [], []),
    'update_project_description' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Text],
        [OptGroupRes],
        [],
      ),
    'update_project_git_repo_url' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Text],
        [OptGroupRes],
        [],
      ),
    'update_project_member_authority' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Principal, Authority],
        [OptGroupRes],
        [],
      ),
    'update_project_visibility' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, Profile],
        [OptGroupRes],
        [],
      ),
    'visible_project' : IDL.Func(
        [],
        [IDL.Vec(IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat64, Group)))],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
