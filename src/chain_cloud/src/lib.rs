
mod authority;
mod event;
mod operation;
mod types;
use chain_cloud_util::metadata;
use ic_cdk::api;
use ic_cdk::export::candid::Nat;
use ic_cdk::export::Principal;
use ic_cdk_macros::*;
use types::*;

#[init]
fn init() {
    authority::set_owner(api::caller());
}
/// Generate a canister transaction event
#[update(name = "createEvent")]
async fn create_event(metadata: metadata::Metadata) -> Result<(), String> {
    event::create_event(metadata).await
}

// Query canisters event
#[query(name = "getCanisterEvent")]
async fn get_canister_event(
    canister: Principal,
    offset: Nat,
    limit: Nat,
) -> Vec<metadata::Metadata> {
    event::get_canister_event(canister, offset, limit).await
}
// Query canisters event information of ordinary account calls
#[query(name = "getCallerEvent")]
async fn get_caller_event(caller: Principal, offset: Nat, limit: Nat) -> Vec<metadata::Metadata> {
    event::get_caller_event(caller, offset, limit).await
}

#[query(name = "getLastEvent")]
async fn get_last_event(limit: Nat) -> Vec<metadata::Metadata> {
    event::get_last_event(limit).await
}

#[query(name = "getCanisterLastEvent")]
async fn get_canister_last_event(canister: Principal, limit: Nat) -> Vec<metadata::Metadata> {
    event::get_canister_last_event(canister, limit).await
}

#[query(name = "getCanisterList")]
async fn get_canister_list() -> Vec<Principal> {
    event::get_canister_list().await
}

// Get canisterstatus information
// including canisters, remaining cycles and modules_hash、controller、memory_size、status
#[update(name = "getCanisterStatus")]
async fn get_canister_status(
    canister: Principal,
    calltype: CallType,
) -> Result<CanisterStatusFormat, String> {
    operation::get_canister_status(canister, calltype).await
}

#[query(name = "getLocalCanisterList")]
async fn get_local_canister_list() -> Vec<CanisterStatusFormat> {
    operation::get_local_canister_list().await
}

#[update(name = "commitCanister")]
async fn commit_canister(canister: CommitCanister) -> () {
    return operation::commit_canister(canister).await;
}

// Query the list of all canisters under the account
#[query(name = "getCanisterByPrinciple")]
async fn get_canister_by_principle(principle: Principal) -> Vec<CommitCanister> {
    return operation::get_canister_by_principle(principle).await;
}

#[query(name = "getCanisterById")]
async fn get_canister_by_id(
    principle: Principal,
    canister_id: Principal,
) -> Result<CommitCanister, String> {
    return operation::get_canister_by_id(principle, canister_id).await;
}
#[query(name = "getCanisterEventByTime")]
async fn get_canister_event_by_time(
    canister: Principal,
    start_time: Nat,
) -> Vec<metadata::Metadata> {
    return event::get_canister_event_by_time(canister, start_time).await;
}
/// Before the upgrade task starts, you need to persist the data in memory
#[pre_upgrade]
fn pre_upgrade() {
   event::pre_upgrade();
}

/// Before the upgrade task ends, you need to reload the persistent data into memory
#[post_upgrade]
fn post_update() {
    event::post_update();
}