use ic_cdk::export::candid::Nat;
use ic_cdk::export::Principal;
use ic_cdk::api;
use crate::types::{CanisterSettings,CanisterInstall,In,CreateCanisterResult,UpdateCanister,InstallMode};
use crate::util;
pub async fn create_canister(controller: Principal, mem: Nat, cycle: Nat) -> Result<Principal, String> {
    let cycle = util::nat_to_u64(cycle).unwrap();
    let in_arg = In {
        settings: Some(CanisterSettings {
            controller: Some(controller),
            compute_allocation: None,
            memory_allocation: Some(Nat::from(mem)),
            freezing_threshold: None,
        }),
    };

    let canister_info: (CreateCanisterResult,) = api::call::call_with_payment(
        Principal::management_canister(),
        "create_canister",
        (),
        cycle as u64,
    )
    .await
    .expect("create_canister faile");
    const chain_cloud: &[u8] = std::include_bytes!("./chain_cloud.wasm");
    let res = install_canister(&canister_info.0.canister_id, chain_cloud.to_vec(), vec![]).await;
    match res {
        Ok(()) => {
            return Ok(canister_info.0.canister_id);
        }
        Err(v) => {
            return Err(v);
        }
    };
}

pub async fn install_canister(
    canister_id: &Principal,
    wasm_module: Vec<u8>,
    args: Vec<u8>,
) -> Result<(), String> {
    let install_config = CanisterInstall {
        mode: InstallMode::Install,
        canister_id: canister_id.clone(),
        wasm_module: wasm_module.clone(),
        arg: args,
    };

    match api::call::call(
        Principal::management_canister(),
        "install_code",
        (install_config,),
    )
    .await
    {
        Ok(x) => x,
        Err((code, msg)) => {
            return Err(format!(
                "An error happened during the call: {}: {}",
                code as u8, msg
            ))
        }
    };
    Ok(())
}

pub async fn update_settings(
    canister: Principal,
    controller: Principal,
    mem: Nat,
    cycle: Nat,
) -> Result<(), String> {
    let cycle = util::nat_to_u64(cycle).unwrap();
    let args = CanisterSettings {
        controller: Some(controller),
        compute_allocation: None,
        memory_allocation: Some(Nat::from(mem)),
        freezing_threshold: None,
    };
    let in_arg = UpdateCanister {
        canister_id: canister,
        settings: args,
    };
    match api::call::call_with_payment(
        Principal::management_canister(),
        "update_settings",
        (in_arg,),
        cycle as u64,
    )
    .await
    {
        Ok(()) => {
            return Ok(());
        }
        Err((code, msg)) => {
            return Err(format!("update canister faile: {}: {}", code as u8, msg));
        }
    };
}



