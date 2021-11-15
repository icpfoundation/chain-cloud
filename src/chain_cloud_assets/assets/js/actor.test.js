import { Principal } from "@dfinity/principal";
const generateTestData = async (chainCloudLocal,principle) => {
    console.log("模拟测试数据");
     await chainCloudLocal.commitCanister({
      canister_id: Principal.fromText('rrkah-fqaaa-aaaaa-aaaaq-cai'),
      status: { 'running': null },
      controller: Principal.fromText('rwlgt-iiaaa-aaaaa-aaaaa-cai'),
      memory_size: 10,
      balance: 2000000000,
      module_hash: '0xe0df779f65fe44893d8991bef0f9af442bff019b79ec756eface2b58beec236f',
      principle: Principal.fromText(principle.toString()),
      create_time: new Date().getTime(),
      subnet: 'testnet1',
      canister_type: { 'ui': null }
    })
    await chainCloudLocal.commitCanister({
        canister_id: Principal.fromText('r7inp-6aaaa-aaaaa-aaabq-cai'),
        status: { 'running': null },
        controller: Principal.fromText('rwlgt-iiaaa-aaaaa-aaaaa-cai'),
        memory_size: 100,
        balance: 4000000000,
        module_hash: '0xf6e707019190a0d8596f78665096fd62bb1bb1c1d43bc4b1746d50c201cdf268',
        principle: Principal.fromText(principle.toString()),
        create_time: new Date().getTime(),
        subnet: 'testnet2',
        canister_type: { 'ui': null }
    })
    await chainCloudLocal.commitCanister({
        canister_id: Principal.fromText('ryjl3-tyaaa-aaaaa-aaaba-cai'),
        status: { 'running': null },
        controller: Principal.fromText('rwlgt-iiaaa-aaaaa-aaaaa-cai'),
        memory_size: 100,
        balance: 4000000000,
        module_hash: '0xf6e707019190a0d8596f78665096fd62bb1bb1c1d43bc4b1746d50c201cdf268',
        principle: Principal.fromText(principle.toString()),
        create_time: new Date().getTime(),
        subnet: 'testnet2',
        canister_type: { 'ui': null }
    })

    await chainCloudLocal.createEvent({
      transaction_time: new Date().getTime(),
      memo: "burn",
      cycle: 1000000000000,
      method_name: "burn",
      canister: Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"),
      caller: Principal.fromText("rrkah-fqaaa-aaaaa-aaaaq-cai"),
      stable_size: 1,
    });
    await chainCloudLocal.createEvent({
        transaction_time: new Date().getTime(),
        memo: "burn",
        cycle: 1000000000000,
        method_name: "burn",
        canister: Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"),
        caller: Principal.fromText("rrkah-fqaaa-aaaaa-aaaaq-cai"),
        stable_size: 1,
      });
      await chainCloudLocal.createEvent({
        transaction_time: new Date().getTime(),
        memo: "burn",
        cycle: 1000000000000,
        method_name: "burn",
        canister: Principal.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"),
        caller: Principal.fromText("rrkah-fqaaa-aaaaa-aaaaq-cai"),
        stable_size: 1,
      });
    
    await chainCloudLocal.createEvent({
        transaction_time: new Date().getTime() - 100 * 1000,
        memo: "mint",
        cycle: 900000000,
        method_name: "mint",
        canister: Principal.fromText("rrkah-fqaaa-aaaaa-aaaaq-cai"),
        caller: Principal.fromText("rwlgt-iiaaa-aaaaa-aaaaa-cai"),
        stable_size: 2,
    });
    
    await chainCloudLocal.createEvent({
        transaction_time: new Date().getTime() - 200 * 1000,
        memo: "transfer",
        cycle: 800000000,
        method_name: "transfer",
        canister: Principal.fromText("rwlgt-iiaaa-aaaaa-aaaaa-cai"),
        caller: Principal.fromText("rwlgt-iiaaa-aaaaa-aaaaa-cai"),
        stable_size: 3,
    });
    await chainCloudLocal.createEvent({
        transaction_time: new Date().getTime() - 200 * 1000,
        memo: "approve",
        cycle: 800000000,
        method_name: "transfer",
        canister: Principal.fromText("rwlgt-iiaaa-aaaaa-aaaaa-cai"),
        caller: Principal.fromText("rwlgt-iiaaa-aaaaa-aaaaa-cai"),
        stable_size: 3,
    });
    await chainCloudLocal.createEvent({
        transaction_time: new Date().getTime() - 200 * 1000,
        memo: "transforfrom",
        cycle: 800000000,
        method_name: "transfer",
        canister: Principal.fromText("rwlgt-iiaaa-aaaaa-aaaaa-cai"),
        caller: Principal.fromText("rwlgt-iiaaa-aaaaa-aaaaa-cai"),
        stable_size: 3,
    });
    console.log("模拟测试数据结束");
}
export {generateTestData}