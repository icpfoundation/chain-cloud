use ic_cdk::api;
use ic_cdk::export::Principal;
use ic_cdk::storage;
use std::collections::HashMap;
type Registration = HashMap<Principal, bool>;
type Whitelist = HashMap<Principal, bool>;
static mut Owner: Option<Principal> = None;

pub async fn registration_authority(canister_id: Principal) -> Result<(), String> {
    let result = is_members(api::caller()).await;
    if result {
        let authority_table = storage::get_mut::<Registration>();
        authority_table.insert(canister_id, true);
        return Ok(());
    }

    Err("Not a member of the white list".to_string())
}

pub async fn canister_authority_existence(canister_id: Principal) -> bool {
    let authority_table = storage::get::<Registration>();
    if !authority_table.contains_key(&canister_id) {
        return false;
    }
    return *authority_table.get(&canister_id).unwrap();
}
pub fn set_owner(owner: Principal) -> () {
    unsafe {
        if Owner == None {
            Owner = Some(owner);
        }
    }
}

pub fn reset_owner(owner: Principal) -> Result<(), String> {
    unsafe {
        if api::caller() == Owner.unwrap() {
            Owner = Some(owner);
            return Ok(());
        }
        return Err("No permission".to_string());
    }
}
fn modifier_owner() -> bool {
    unsafe {
        if api::caller() == Owner.unwrap() {
            return true;
        }
        false
    }
    }


pub async fn add_white_list(wallet: Principal) -> Result<(), String> {
    let check_result = modifier_owner();
    if check_result {
        let whitelist_table = storage::get_mut::<Whitelist>();
        whitelist_table.insert(wallet, true);
        return Ok(());
    }

    Err("Not owner".to_string())
}

pub async fn is_members(wallet: Principal) -> bool {
    let whitelist_table = storage::get::<Whitelist>();
    if !whitelist_table.contains_key(&wallet) {
        return false;
    }
    return *whitelist_table.get(&wallet).unwrap();
}
