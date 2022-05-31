

import { Actor, ActorSubclass, HttpAgent } from "@dfinity/agent";
import {
    IDL, InputBox, renderInput, renderValue
} from "@dfinity/candid";
import { Principal } from "@dfinity/principal";

async function canisterInterface(agent: HttpAgent, canisterId: Principal) {
    const common_interface: IDL.InterfaceFactory = ({ IDL }) => IDL.Service({
        __get_candid_interface_tmp_hack: IDL.Func([], [IDL.Text], ['query']),
    });
    const actor: ActorSubclass = Actor.createActor(common_interface, { agent, canisterId });
    const candid_source = await actor.__get_candid_interface_tmp_hack() as string;
    return candid_source
}
export { canisterInterface }