use chain_cloud_util::types::Log;
use ic_cdk::export::candid::CandidType;
use ic_cdk::export::candid::{Deserialize, Nat};
use ic_cdk::export::Principal;

#[allow(non_camel_case_types)]
#[derive(CandidType, Debug, Deserialize, Clone)]
pub enum CanisterStatus {
    #[serde(rename = "running")]
    Running,
    #[serde(rename = "stopping")]
    Stopping,
    #[serde(rename = "stopped")]
    Stopped,
}

#[derive(CandidType, Debug, Deserialize)]
pub struct CanisterStatusResponse {
    pub status: CanisterStatus,
    pub settings: CanisterSettings,
    pub module_hash: Option<Vec<u8>>,
    pub controller: Principal,
    pub memory_size: Nat,
    pub cycles: Nat,
}

#[derive(CandidType, Debug, Deserialize, Clone)]
pub struct CanisterStatusFormat {
    pub status: CanisterStatus,
    pub settings: CanisterSettings,
    pub module_hash: Option<String>,
    pub controller: Principal,
    pub memory_size: Nat,
    pub cycles: Nat,
}

#[derive(CandidType, Clone, Deserialize, Debug)]
pub struct CanisterIdRecord {
    pub canister_id: Principal,
}

#[derive(CandidType, Deserialize)]
pub enum InstallMode {
    #[serde(rename = "install")]
    Install,
    #[serde(rename = "reinstall")]
    Reinstall,
    #[serde(rename = "upgrade")]
    Upgrade,
}
#[derive(CandidType, Deserialize)]
pub enum CallType {
    Local,
    Remote,
}

#[derive(CandidType, Deserialize)]
pub struct CanisterInstall {
    pub mode: InstallMode,
    pub canister_id: Principal,
    #[serde(with = "serde_bytes")]
    pub wasm_module: Vec<u8>,
    #[serde(with = "serde_bytes")]
    pub arg: Vec<u8>,
}

#[derive(CandidType, Debug, Deserialize)]
pub struct AccountBalanceArgs {
    pub account: String,
}

#[derive(CandidType, Deserialize)]
pub struct CreateResult {
    pub canister_id: Principal,
}

#[derive(CandidType, Clone, Debug, Deserialize)]
pub struct CanisterSettings {
    pub controller: Option<Principal>,
    pub compute_allocation: Option<Nat>,
    pub memory_allocation: Option<Nat>,
    pub freezing_threshold: Option<Nat>,
}

#[derive(CandidType, Clone, Deserialize)]
pub struct CreateCanisterArgs {
    pub cycles: u64,
    pub settings: CanisterSettings,
}

#[derive(CandidType)]
pub struct In {
    pub settings: Option<CanisterSettings>,
}

#[derive(Deserialize, CandidType, Debug)]
pub struct CreateCanisterResult {
    pub canister_id: Principal,
}

#[derive(CandidType, Clone, Deserialize)]
pub struct UpdateCanister {
    pub canister_id: Principal,
    pub settings: CanisterSettings,
}

#[derive(CandidType, Deserialize)]
pub struct Snapshot<T> {
    pub key: Principal,
    pub value: T,
}

#[derive(CandidType, Deserialize)]
pub struct Db {
    pub canisterEvent: Vec<Snapshot<Vec<usize>>>,
    pub callerEvent: Vec<Snapshot<Vec<usize>>>,
    pub event: Vec<Log>,
    pub commitCanister:Vec<Vec<CommitCanister>>,
}

#[allow(non_camel_case_types)]
#[derive(CandidType, Deserialize, Clone)]
pub enum CanisterType {
    #[serde(rename = "wallet")]
    Wallet,
    #[serde(rename = "ui")]
    UI,
    #[serde(rename = "server")]
    Server,
}

#[derive(CandidType, Deserialize,Clone)]
pub struct CommitCanister{
    pub canister_id:Principal,
    pub status:CanisterStatus,
    pub controller:Principal,
    pub memory_size:Nat,
    pub balance:Nat,
    pub module_hash:String,
    pub principle:Principal,
    pub create_time:Nat,
    pub subnet:String,
    pub canister_type:CanisterType,
}
#[derive(CandidType, Deserialize,Clone)]
pub struct ChainCloudCanister{
    pub id:Principal,
    pub data_size:u64,
}