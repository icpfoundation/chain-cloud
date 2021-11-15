import { Certificate, HttpAgent } from "@dfinity/agent";
import { blobFromText, blobFromUint8Array } from "@dfinity/candid";
import { Principal } from "@dfinity/principal";
import borc from "borc";
const decoder = new borc.Decoder({
    tags: {
        55799: (val) => val,
    },
});
export const agent = new HttpAgent({
    host: "https://ic0.app"
})

const getCanisterInfo = async (canisterId) => {
    let principal = blobFromUint8Array(
        Principal.fromText(canisterId).toUint8Array()
    );
    let pathCommon = [blobFromText("canister"), principal];
    let pathModuleHash = pathCommon.concat(blobFromText("module_hash"));
    let pathControllers = pathCommon.concat(blobFromText("controllers"));
    let readState = await agent.readState(canisterId, {
        paths: [pathModuleHash, pathControllers],
    })
    let cert = new Certificate(readState, agent)
    if (await cert.verify()) {
        let subnet = cert["cert"].delegation
            ? Principal.fromUint8Array(cert["cert"].delegation.subnet_id).toText()
            : null;
        let res = subnet.split('-')

        let module_hash = cert.lookup(pathModuleHash);
        let array = new Uint8Array(module_hash);

        let moduleHash = "";
        for (var i = 0; i < array.length; i++) {
            moduleHash += array[i].toString(16)
        }

        let controllers = cert.lookup(pathControllers);
        let controllerId = decoder
            .decodeFirst(controllers).map((buf) =>
                Principal.fromUint8Array(buf).toText()
            )
        return {
            subnet: subnet,
            name: `Application ${res[0]}`,
            moduleHash,
            controllerId:controllerId[0]
        }
    } else {
        throw new Error('cert verify failed')
    }
}

export {getCanisterInfo}