import { Actor, HttpAgent, ActorSubclass } from "@dfinity/agent";
import { Principal } from "@dfinity/principal";
enum CanisterStatus{
    running=null,
    stopping=null,
    stopped=null
}

enum CanisterType{
    wallet = null,
    ui = null,
    server = null
}

type CommitCanister = {
    canister_id: Principal;
    status: CanisterStatus;
    controller: Principal;
    memory_size: bigint;
    balance: bigint;
    module_hash: string;
    principle: Principal;
    create_time: bigint;
    subnet: string;
    canister_type: CanisterType;
}

type Metadata = {
    canister: Principal;
    caller: Principal;
    cycle: bigint;
    method_name: string;
    memo: string;
    transaction_time: bigint;
    stable_size: bigint;
}
type GetCanisterByIdResult = { 'Ok' : CommitCanister } | { 'Err' : string };

interface ChainCloudInterface {
    getCanisterByPrinciple(principle: Principal): any
    getCanisterLastEvent(principle: Principal, limit: bigint): any
    commitCanister(canisterInfo: CommitCanister): any
    createEvent(meta: Metadata): any
    getCanisterById(principle: Principal, canisterId: Principal): GetCanisterByIdResult
    getCanisterEventByTime(canister:Principal,startTime:bigint):Array<Metadata>
}


class ChainCloudCanister {
    private actor: ChainCloudInterface;
    constructor(actor: ChainCloudInterface) {
        this.actor = actor
    }
    async getCanisterByPrinciple(principal: string): Promise<Array<CommitCanister>> {
        let parsePrincipal = Principal.fromText(principal)
        let result:Array<CommitCanister> = await this.actor.getCanisterByPrinciple(parsePrincipal)
        return result
    }

    async getCanisterLastEvent(principal: string, limit: bigint): Promise<Array<Metadata>>{
        let parsePrincipal = Principal.fromText(principal)
        let result: Array<Metadata> = await this.actor.getCanisterLastEvent(parsePrincipal, limit)
        return result
    }

    async commitCanister(commitdata: CommitCanister): Promise<any>{
        let result = await this.actor.commitCanister(commitdata)
        return result
    }

    async createEvent(meta: Metadata): Promise<any>{
        let result = await this.actor.createEvent(meta)
        return result
    }

    async getCanisterById(principle: string, canisterId: string): Promise<GetCanisterByIdResult>{
        let parsePrinciple = Principal.fromText(principle)
        let parseCanisterId =  Principal.fromText(canisterId)
        let result = await this.actor.getCanisterById(parsePrinciple, parseCanisterId)
        if (Object.prototype.hasOwnProperty.call(result, 'Ok')) {
         return result['Ok']   
        } 
        return null
    }

    async getCanisterEventByTime(canister: string, startTime: bigint): Promise<Array<Metadata>>{
        let parseCanister = Principal.fromText(canister)
        let result = await this.actor.getCanisterEventByTime(parseCanister, startTime)
        return result
    }
}

export default ChainCloudCanister