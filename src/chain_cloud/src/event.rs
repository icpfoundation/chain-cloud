use crate::install;
use crate::types::{ChainCloudCanister, CommitCanister, Db, Snapshot};
use chain_cloud_util::{types::Log, util};
use ic_cdk::api::call::{CallResult, RejectionCode};
use ic_cdk::export::candid::Nat;
use ic_cdk::export::Principal;
use ic_cdk::{api, print, storage};
use std::collections::HashMap;
pub static CREATETRANSACTION: &str = "createEvent";
static mut Event: Vec<Log> = vec![];
type CanisterEvent = HashMap<Principal, Vec<usize>>;
type CallerEvent = HashMap<Principal, Vec<usize>>;
static mut CanisterList: Vec<ChainCloudCanister> = vec![];

use crate::operation;
#[derive(Default, Clone)]
pub struct EventLog {
    log: Vec<Log>,
    canister_list: Vec<ChainCloudCanister>,
    canister_event: HashMap<Principal, Vec<usize>>,
    account_event: HashMap<Principal, Vec<usize>>,
    memo_size: usize,
    data_size: usize,
    expected_cost_cycle: Nat,
}

impl EventLog {
    pub fn new(memo_size: usize, data_size: usize, expected_cost_cycle: Nat) -> Self {
        Self {
            log: vec![],
            canister_list: vec![],
            canister_event: HashMap::new(),
            account_event: HashMap::new(),
            memo_size: memo_size,
            data_size: data_size,
            expected_cost_cycle: expected_cost_cycle,
        }
    }

    pub async fn create_event(&mut self, new_log: Log) -> Result<bool, String> {
        if new_log.memo.len() > self.memo_size {
            return Err("memo too long".to_string());
        }
        let position: usize;

        let log_size = self.log.len();
        if log_size > self.data_size {
            if self.canister_list.len() == 0
                || self.canister_list[self.canister_list.len() - 1].data_size
                    >= self.data_size as u64
            {
                let new_canister =
                    install::create_canister(api::id(), 0.into(), self.expected_cost_cycle.clone())
                        .await;

                match new_canister {
                    Ok(principal) => {
                        ic_cdk::print(principal.to_string());
                        self.canister_list.push(ChainCloudCanister {
                            id: principal,
                            data_size: 0,
                        });
                        let res: CallResult<()> =
                            api::call::call(principal, CREATETRANSACTION, (&new_log,)).await;
                        return Ok(true);
                    }
                    Err(err) => {
                        ic_cdk::print(err.to_string());
                        return Err(err.to_string());
                    }
                }
            } else {
                let data_size = self.canister_list.len();
                let canister = &self.canister_list[data_size].id;
                let res: CallResult<()> =
                    api::call::call(canister.clone(), CREATETRANSACTION, (&new_log,)).await;
                print(format!("res {:?}", res));
                self.canister_list[data_size].data_size += 1;
                return Ok(true);
            }
        }
        self.log.push(new_log.clone());
        position = self.log.len() - 1;

        if !self.canister_event.contains_key(&new_log.canister) {
            self.canister_event
                .insert(new_log.canister.clone(), vec![position]);
        }
        if !self.account_event.contains_key(&new_log.caller) {
            self.account_event
                .insert(new_log.caller.clone(), vec![position]);
            return Ok(true);
        }

        self.canister_event
            .get_mut(&new_log.canister)
            .unwrap()
            .push(position);
        Ok(true)
    }

    pub async fn get_last_event(&self, limit: Nat) -> Vec<Log> {
        let limit = util::nat_to_u64(limit).unwrap() as usize;
        let len = self.log.len();
        if len == 0 {
            return vec![];
        }
        if len <= limit {
            return self.log.to_vec();
        }
        return self.log[len - limit - 1..len].to_vec();
    }

    pub async fn get_canister_last_event(&self, canister: Principal, limit: Nat) -> Vec<Log> {
        let limit = util::nat_to_u64(limit).unwrap() as usize;
        let mut canister_log: Vec<Log> = vec![];
        if !self.canister_event.contains_key(&canister) {
            return canister_log;
        }
        let event = self.canister_event.get(&canister).unwrap();
        let len = event.len();

        if len <= limit {
            for i in event.iter() {
                canister_log.push(self.log[*i].clone())
            }
            return canister_log;
        }
        for i in event[len - limit - 1..len].iter() {
            canister_log.push(self.log[*i].clone())
        }
        return canister_log;
    }

    pub async fn get_canister_list(&self) -> Vec<Principal> {
        let mut canister_list: Vec<Principal> = vec![];
        for keys in self.canister_event.keys() {
            canister_list.push(keys.clone());
        }
        return canister_list;
    }

    pub async fn get_canister_event_by_time(
        &self,
        canister: Principal,
        start_time: Nat,
    ) -> Vec<Log> {
        let mut res: Vec<Log> = vec![];
        if !self.canister_event.contains_key(&canister) {
            return res;
        }
        let canister_log = self.canister_event.get(&canister).unwrap();

        let mut i = canister_log.len() - 1;
        loop {
            if self.log[canister_log[i]].transaction_time >= start_time {
                res.push(self.log[canister_log[i]].clone())
            } else {
                return res;
            }
            if i == 0 {
                return res;
            }
            i = i - 1;
        }
    }

    pub async fn get_canister_event(
        &self,
        canister: Principal,
        offset: Nat,
        limit: Nat,
    ) -> Vec<Log> {
        let offset = util::nat_to_u64(offset).unwrap() as usize;
        let mut limit = util::nat_to_u64(limit).unwrap() as usize;
        if limit > 50 {
            limit = 50;
        }
        if !self.canister_event.contains_key(&canister) {
            return vec![];
        }
        let canister_log = self.canister_event.get(&canister).unwrap();
        if offset > canister_log.len() {
            return vec![];
        }
        let mut result: Vec<Log> = vec![];

        if offset + limit >= canister_log.len() {
            for i in canister_log[offset..canister_log.len()].iter() {
                result.push(self.log[*i].clone());
            }
            return result;
        }
        for i in canister_log[offset..offset + limit].iter() {
            result.push(self.log[*i].clone());
        }
        return result;
    }

    pub async fn get_caller_event(&self, caller: Principal, offset: Nat, limit: Nat) -> Vec<Log> {
        let offset = util::nat_to_u64(offset).unwrap() as usize;
        let mut limit = util::nat_to_u64(limit).unwrap() as usize;
        if limit > 50 {
            limit = 50;
        }

        if !self.account_event.contains_key(&caller) {
            return vec![];
        }
        let result = self.account_event.get(&caller).unwrap();
        if offset > result.len() {
            return vec![];
        }
        let mut account_log: Vec<Log> = vec![];
        if offset + limit >= result.len() {
            for i in result[offset..result.len()].iter() {
                account_log.push(self.log[*i].clone());
            }
            return account_log;
        }

        for i in result[offset..offset + limit].iter() {
            account_log.push(self.log[*i].clone());
        }
        return account_log;
    }

    pub fn pre_upgrade(&self) {
        let mut canister_event_snapshot: Vec<Snapshot<Vec<usize>>> = vec![];
        let mut account_event_snapshot: Vec<Snapshot<Vec<usize>>> = vec![];
        // let canister_event = storage::get::<CanisterEvent>();
        for (k, v) in self.canister_event.iter() {
            let snapshot = Snapshot::<Vec<usize>> {
                key: k.clone(),
                value: v.to_vec(),
            };
            canister_event_snapshot.push(snapshot);
        }

        for (k, v) in self.account_event.iter() {
            let snapshot = Snapshot::<Vec<usize>> {
                key: k.clone(),
                value: v.to_vec(),
            };
            account_event_snapshot.push(snapshot);
        }
        let mut commit_canister_bucket: Vec<Vec<CommitCanister>> = vec![];
        let bucket = storage::get::<operation::CanisterBucket>();
        for i in bucket.values() {
            commit_canister_bucket.push(i.to_vec());
        }
        unsafe {
            let db = Db {
                canisterEvent: canister_event_snapshot,
                callerEvent: account_event_snapshot,
                event: Event.to_vec(),
                commitCanister: commit_canister_bucket,
            };
            storage::stable_save((db,)).expect("stable_save failed");
        }
        let size = ic_cdk::api::stable::stable_size();
        let size = format!("Current used memory page size: {}", size);
        print(size);
    }
}

pub async fn create_event(new_log: Log) -> Result<(), String> {
    if new_log.memo.len() > 150 {
        return Err("memo too long".to_string());
    }
    unsafe {
        crate::event_log
            .write()
            .unwrap()
            .create_event(new_log)
            .await;
    }
    // let position: usize;
    // unsafe {
    //     let log_size = Event.len();
    //     if log_size > 1 {
    //         if CanisterList.len() == 0 || CanisterList[CanisterList.len() - 1].data_size >= 100000 {
    //             let cycle: Nat = "4000000000000".parse().unwrap();
    //             let new_chain_cloud = install::create_canister(api::id(), 0.into(), cycle).await;
    //             format!("{:?}", new_chain_cloud);
    //             match new_chain_cloud {
    //                 Ok(value) => {
    //                     ic_cdk::print(value.to_string());
    //                     CanisterList.push(ChainCloudCanister {
    //                         id: value,
    //                         data_size: 0,
    //                     });
    //                     let res: CallResult<()> =
    //                         api::call::call(value, CREATETRANSACTION, (&new_log,)).await;
    //                     print(format!("res {:?}", res));
    //                     return Ok(());
    //                 }
    //                 Err(err) => {
    //                     ic_cdk::print(err.to_string());
    //                     return Err(err.to_string());
    //                 }
    //             }
    //         } else {
    //             let chain_cloud_canister = CanisterList[CanisterList.len() - 1].id;
    //             let res: CallResult<()> =
    //                 api::call::call(chain_cloud_canister, CREATETRANSACTION, (&new_log,)).await;
    //             print(format!("res {:?}", res));
    //             CanisterList[CanisterList.len() - 1].data_size += 1;
    //             return Ok(());
    //         }
    //     }
    //     Event.push(new_log.clone());
    //     position = Event.len() - 1;
    // }

    // let canister_event = storage::get_mut::<CanisterEvent>();
    // if !canister_event.contains_key(&new_log.canister) {
    //     canister_event.insert(new_log.canister.clone(), vec![position]);
    // }
    // let caller_event = storage::get_mut::<CallerEvent>();
    // if !caller_event.contains_key(&new_log.caller) {
    //     caller_event.insert(new_log.caller.clone(), vec![position]);
    //     return Ok(());
    // }

    // canister_event
    //     .get_mut(&new_log.canister)
    //     .unwrap()
    //     .push(position);
    // caller_event
    //     .get_mut(&new_log.caller)
    //     .unwrap()
    //     .push(position);

    Ok(())
}

pub async fn get_canister_event(canister: Principal, offset: Nat, limit: Nat) -> Vec<Log> {
    // let offset = util::nat_to_u64(offset).unwrap() as usize;
    // let mut limit = util::nat_to_u64(limit).unwrap() as usize;
    // if limit > 50 {
    //     limit = 50;
    // }
    // let canister_event = storage::get::<CanisterEvent>();
    // if !canister_event.contains_key(&canister) {
    //     return vec![];
    // }
    // let blucket = canister_event.get(&canister).unwrap();
    // if offset > blucket.len() {
    //     return vec![];
    // }
    // let mut container: Vec<Log> = vec![];
    // unsafe {
    //     if offset + limit >= blucket.len() {
    //         for i in blucket[offset..blucket.len()].iter() {
    //             container.push(Event[*i].clone());
    //         }
    //         return container;
    //     }

    //     for i in blucket[offset..offset + limit].iter() {
    //         container.push(Event[*i].clone());
    //     }
    //     return container;
    // }
    unsafe {
        crate::event_log
            .read()
            .unwrap()
            .get_canister_event(canister, offset, limit)
            .await
    }
}

pub async fn get_caller_event(account: Principal, offset: Nat, limit: Nat) -> Vec<Log> {
    // let offset = util::nat_to_u64(offset).unwrap() as usize;
    // let mut limit = util::nat_to_u64(limit).unwrap() as usize;
    // if limit > 50 {
    //     limit = 50;
    // }
    // let caller_event = storage::get::<CallerEvent>();
    // if !caller_event.contains_key(&caller) {
    //     return vec![];
    // }
    // let blucket = caller_event.get(&caller).unwrap();
    // if offset > blucket.len() {
    //     return vec![];
    // }
    // let mut container: Vec<Log> = vec![];
    // unsafe {
    //     if offset + limit >= blucket.len() {
    //         for i in blucket[offset..blucket.len()].iter() {
    //             container.push(Event[*i].clone());
    //         }
    //         return container;
    //     }

    //     for i in blucket[offset..offset + limit].iter() {
    //         container.push(Event[*i].clone());
    //     }
    //     return container;
    // }
    unsafe {
        crate::event_log
            .read()
            .unwrap()
            .get_caller_event(account, offset, limit)
            .await
    }
}

pub async fn get_last_event(limit: Nat) -> Vec<Log> {
    // let limit = util::nat_to_u64(limit).unwrap() as usize;
    // unsafe {
    //     let len = Event.len();
    //     if len == 0 {
    //         return vec![];
    //     }
    //     if len <= limit {
    //         return Event.to_vec();
    //     }
    //     return Event[len - limit - 1..len].to_vec();
    // }

    unsafe { crate::event_log.read().unwrap().get_last_event(limit).await }
}

pub async fn get_canister_last_event(canister: Principal, limit: Nat) -> Vec<Log> {
    // let limit = util::nat_to_u64(limit).unwrap() as usize;
    // let canister_event = storage::get::<CanisterEvent>();
    // let mut result: Vec<Log> = vec![];
    // if !canister_event.contains_key(&canister) {
    //     return result;
    // }
    // let event = canister_event.get(&canister).unwrap();
    // let len = event.len();
    // unsafe {
    //     if len <= limit {
    //         for i in event.iter() {
    //             result.push(Event[*i].clone())
    //         }
    //         return result;
    //     }
    //     for i in event[len - limit - 1..len].iter() {
    //         result.push(Event[*i].clone())
    //     }
    //     return result;
    // }
    unsafe {
        crate::event_log
            .read()
            .unwrap()
            .get_canister_last_event(canister, limit)
            .await
    }
}

pub async fn get_canister_list() -> Vec<Principal> {
    // let mut res: Vec<Principal> = vec![];
    // let canister_event = storage::get::<CanisterEvent>();
    // for keys in canister_event.keys() {
    //     res.push(keys.clone());
    // }
    // return res;
    unsafe { crate::event_log.read().unwrap().get_canister_list().await }
}

pub async fn get_canister_event_by_time(canister: Principal, start_time: Nat) -> Vec<Log> {
    // let mut res: Vec<Log> = vec![];
    // let canister_event = storage::get::<CanisterEvent>();
    // if !canister_event.contains_key(&canister) {
    //     return res;
    // }
    // let bucket = canister_event.get(&canister).unwrap();
    // unsafe {
    //     let mut i = bucket.len() - 1;
    //     loop {
    //         if Event[bucket[i]].transaction_time >= start_time {
    //             res.push(Event[bucket[i]].clone())
    //         } else {
    //             return res;
    //         }
    //         if i == 0 {
    //             return res;
    //         }
    //         i = i - 1;
    //     }
    // }
    unsafe {
        crate::event_log
            .read()
            .unwrap()
            .get_canister_event_by_time(canister, start_time)
            .await
    }
}
pub fn pre_upgrade() {
    let mut canister_event_snapshot: Vec<Snapshot<Vec<usize>>> = vec![];
    let mut caller_event_snapshot: Vec<Snapshot<Vec<usize>>> = vec![];
    let canister_event = storage::get::<CanisterEvent>();
    for (k, v) in canister_event.iter() {
        let snapshot = Snapshot::<Vec<usize>> {
            key: k.clone(),
            value: v.to_vec(),
        };
        canister_event_snapshot.push(snapshot);
    }
    let caller_event = storage::get::<CallerEvent>();

    for (k, v) in caller_event.iter() {
        let snapshot = Snapshot::<Vec<usize>> {
            key: k.clone(),
            value: v.to_vec(),
        };
        caller_event_snapshot.push(snapshot);
    }

    let mut commit_canister_bucket: Vec<Vec<CommitCanister>> = vec![];
    let bucket = storage::get::<operation::CanisterBucket>();
    for i in bucket.values() {
        commit_canister_bucket.push(i.to_vec());
    }
    unsafe {
        let db = Db {
            canisterEvent: canister_event_snapshot,
            callerEvent: caller_event_snapshot,
            event: Event.to_vec(),
            commitCanister: commit_canister_bucket,
        };
        storage::stable_save((db,)).expect("stable_save failed");
    }
    let size = ic_cdk::api::stable::stable_size();
    let size = format!("Current used memory page size: {}", size);
    print(size);
}

pub fn post_update() {
    let db = storage::stable_restore::<(Db,)>().expect("Data recovery failed");
    data_load(db.0);
}

/// Reload data into memory
fn data_load(db: Db) {
    unsafe {
        Event = db.event;
    }
    let canister_event = storage::get_mut::<CanisterEvent>();
    for e in db.canisterEvent.into_iter() {
        canister_event.insert(e.key.clone(), e.value);
    }
    for e in db.callerEvent.into_iter() {
        canister_event.insert(e.key.clone(), e.value);
    }
    let bucket = storage::get_mut::<operation::CanisterBucket>();
    for e in db.commitCanister.into_iter() {
        bucket.insert(e[0].principle, e);
    }
}
