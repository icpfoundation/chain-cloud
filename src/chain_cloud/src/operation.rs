// use context::metadata::{ Metadata,CanisterStatusResponse,CanisterIdRecord,InstallMode};
use crate::types;
use ic_cdk::export::Principal;
use ic_cdk::storage;
use ic_cdk::{api,print};
use num_bigint::BigUint;
use std::collections::HashMap;
use types::*;
type CanisterInfo = HashMap<Principal, CanisterStatusFormat>;
pub type CanisterBucket = HashMap<Principal, Vec<CommitCanister>>;


pub async fn get_canister_status(
    canister: Principal,
    calltype: CallType,
) -> Result<CanisterStatusFormat, String> {
    let res: Result<CanisterStatusFormat, String> = match calltype {
        CallType::Local => {
            let canister_table = storage::get::<CanisterInfo>();
            if canister_table.contains_key(&canister) {
                let canister_info = canister_table.get(&canister).unwrap();
                return Ok(canister_info.clone());
            }
            Err("canister not exist".to_string())
        }
        CallType::Remote => {
            print(Principal::management_canister().to_string());
            canister_status(canister).await
        }
    };
    return res;
}

pub async fn get_local_canister_list() -> Vec<CanisterStatusFormat> {
    let local_canister = storage::get::<CanisterInfo>();
    let mut result: Vec<CanisterStatusFormat> = vec![];
    for v in local_canister.values() {
        result.push(v.clone());
    }
    return result;
}


async fn canister_status(canister: Principal) -> Result<CanisterStatusFormat, String> {
    let canister_id = CanisterIdRecord {
        canister_id: canister.clone(),
    };
    let res: Result<(CanisterStatusResponse,), _> = api::call::call(
        Principal::management_canister(),
        "canister_status",
        (canister_id,),
    )
    .await;
    match res {
        Ok((data,)) => {
            let info = format!("{:?}", &data);
            print(info);
            let module = match &data.module_hash {
                Some(v) => Some(BigUint::from_bytes_be(&v).to_str_radix(16)),
                None => None,
            };
            let status_foramt = CanisterStatusFormat {
                status: data.status,
                settings: data.settings,
                module_hash: module,
                controller: data.controller,
                memory_size: data.memory_size,
                cycles: data.cycles,
            };
            let canisetr_id = canister.clone();
            let canister_table = storage::get_mut::<CanisterInfo>();
            canister_table.insert(canisetr_id, status_foramt.clone());
            return Ok(status_foramt);
        }
        Err(v) => {
            let info = format!("{:?}", v);
            return Err(info);
        }
    }
}

// async fn create_canister(controller: Principal, mem: Nat, cycle: Nat) -> Result<Principal, String> {
//     let cycle = util::nat_to_u64(cycle).unwrap();
//     let in_arg = In {
//         settings: Some(CanisterSettings {
//             controller: Some(controller),
//             compute_allocation: None,
//             memory_allocation: Some(Nat::from(mem)),
//             freezing_threshold: None,
//         }),
//     };

//     let canister_info: (CreateCanisterResult,) = api::call::call_with_payment(
//         Principal::management_canister(),
//         "create_canister",
//         (in_arg,),
//         cycle as u64,
//     )
//     .await
//     .expect("create_canister faile");
//     const HELLO_WASM: &[u8] = std::include_bytes!("../wasm/hello.wasm");
//     let res = install_canister(&canister_info.0.canister_id, HELLO_WASM.to_vec(), vec![]).await;
//     match res {
//         Ok(()) => {
//             return Ok(canister_info.0.canister_id);
//         }
//         Err(v) => {
//             return Err(v);
//         }
//     };
// }

// pub async fn install_canister(
//     canister_id: &Principal,
//     wasm_module: Vec<u8>,
//     args: Vec<u8>,
// ) -> Result<(), String> {
//     let install_config = CanisterInstall {
//         mode: types::InstallMode::Install,
//         canister_id: canister_id.clone(),
//         wasm_module: wasm_module.clone(),
//         arg: args,
//     };

//     match api::call::call(
//         Principal::management_canister(),
//         "install_code",
//         (install_config,),
//     )
//     .await
//     {
//         Ok(x) => x,
//         Err((code, msg)) => {
//             return Err(format!(
//                 "An error happened during the call: {}: {}",
//                 code as u8, msg
//             ))
//         }
//     };
//     Ok(())
// }

// #[update(name = "updateSettings")]
// async fn update_settings(
//     canister: Principal,
//     controller: Principal,
//     mem: Nat,
//     cycle: Nat,
// ) -> Result<(), String> {
//     let cycle = util::nat_to_u64(cycle).unwrap();
//     let args = CanisterSettings {
//         controller: Some(controller),
//         compute_allocation: None,
//         memory_allocation: Some(Nat::from(mem)),
//         freezing_threshold: None,
//     };
//     let in_arg = UpdateCanister {
//         canister_id: canister,
//         settings: args,
//     };
//     match api::call::call_with_payment(
//         Principal::management_canister(),
//         "update_settings",
//         (in_arg,),
//         cycle as u64,
//     )
//     .await
//     {
//         Ok(()) => {
//             return Ok(());
//         }
//         Err((code, msg)) => {
//             return Err(format!("update canister faile: {}: {}", code as u8, msg));
//         }
//     };
// }

pub async fn commit_canister(canister: CommitCanister) -> () {
    let canister_bucket = storage::get_mut::<CanisterBucket>();
    if !canister_bucket.contains_key(&canister.principle) {
        canister_bucket.insert(canister.principle.clone(), vec![canister]);
        return;
    }
    canister_bucket
        .get_mut(&canister.principle)
        .unwrap()
        .push(canister);
}


pub async fn get_canister_by_principle(principle:Principal) -> Vec<CommitCanister>{
    let canister_bucket = storage::get::<CanisterBucket>();
    if !canister_bucket.contains_key(&principle) {
        return vec![];
    }
    let canister_info =  canister_bucket.get(&principle).unwrap().to_vec();

    return canister_info;
}

pub async fn get_canister_by_id(principle:Principal,canister_id:Principal) ->Result<CommitCanister,String>{
    let canister_bucket = storage::get::<CanisterBucket>();
    if !canister_bucket.contains_key(&principle){
       return  Err("not found".to_string());
    }
    for i in canister_bucket.get(&principle).unwrap().iter(){
        if i.canister_id == canister_id{
            return Ok(i.clone());
        }
    }
    return  Err("not found".to_string());
}