mod event;
mod operation;
mod types;
use context::{metadata, util};
use ic_cdk::export::candid::Nat;
use ic_cdk::export::candid::{CandidType, Deserialize};
use ic_cdk::export::Principal;
use ic_cdk::print;
use ic_cdk::storage;
use ic_cdk_macros::*;
use std::collections::HashMap;
use types::*;
static mut count: Option<Nat> = None;
static mut Event: Vec<metadata::Metadata> = vec![];
type CanisterEvent = HashMap<Principal, Vec<usize>>;
type CallerEvent = HashMap<Principal, Vec<usize>>;

/// Add transaction
#[update(name = "createEvent")]
async fn create_event(metadata: metadata::Metadata) -> Result<(), String> {
    event::create_event(metadata).await
}

#[query(name = "getCanisterEvent")]
async fn get_canister_event(
    canister: Principal,
    offset: Nat,
    limit: Nat,
) -> Vec<metadata::Metadata> {
    event::get_canister_event(canister, offset, limit).await
}

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

#[query(name = "getBalance")]
async fn account_balance_dfx(account: String) -> ICPTs {
    operation::account_balance_dfx(account).await
}

#[update(name = "commitCanister")]
async fn commit_canister(canister:CommitCanister)->(){
    return operation::commit_canister(canister).await
}

#[query(name = "getCanisterByPrinciple")]
async fn get_canister_by_principle(principle:Principal) -> Vec<CommitCanister>{
    return operation::get_canister_by_principle(principle).await;
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
