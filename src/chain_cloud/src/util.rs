use ic_cdk::export::candid::Nat;
use ic_cdk::export::Principal;
use crate::types::{CanisterStatusResponse,CanisterIdRecord};
use ic_cdk::{print,api};
pub fn nat_to_u64(num: Nat) -> Result<u64, String> {
    let u64_digits = num.0.to_u64_digits();

    match u64_digits.len() {
        0 => Ok(0),
        1 => Ok(u64_digits[0]),
        _ => Err("Nat -> Nat64 conversion failed".to_string()),
    }
}

pub async fn is_canister(id:Principal) -> bool{
    let canister_id = CanisterIdRecord {
        canister_id: id,
    };
    let res: Result<(CanisterStatusResponse,), _> = api::call::call(
        Principal::management_canister(),
        "canister_status",
        (canister_id,),
    )
    .await;
    match res {
        Ok((data,)) => {
            let info = format!("{:?}", data);
            print(info);
            return true
        },
        Err(_) =>{
            print("*****");
            return false
        }
    }
}