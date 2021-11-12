import axios, { AxiosInstance } from 'axios'
import { getCanisterInfo } from './agent'
const CHAIN_CLOUD_HOST: string = "https://chaincloud.skyipfs.com:9091"
type CanisterInfo = {
    canisterId: string;
    controller: string;
    name: string
    moduleHash: string;
    subnetId: string;
    subnetName: string
    canisterType: string;
    network: string;
    createTime?: bigint;
    memorySize?: bigint;
}
class ChainCloudApi {
    private api: AxiosInstance;
    constructor(host: string) {
        this.api = axios.create({
            baseURL: host,
        })
    }

    getCanisterList = async (): Promise<Array<any>> => {
        let result = await this.api.get('/public/canisterlist')
        if (result) {
            try {
                return result.data
            } catch (err) {
                return err
            }

        }
        return null
    }
    getCanisterInfo = async (canisterid: string): Promise<CanisterInfo> => {

        let result = await this.api.get('/public/canisterinfo', {
            params: { 'canisterid': canisterid }
        })
        if (result) {
            try {
                let res = await getCanisterInfo(canisterid)
                let parseData = JSON.parse(result.data.data)
                return {
                    subnetId: res.subnet,
                    subnetName: res.name,
                    moduleHash: res.moduleHash,
                    controller: res.controllerId,
                    canisterType: parseData.type,
                    network: parseData.network,
                    canisterId: canisterid,
                    name: parseData.name
                }

            } catch (err) {
                return err
            }
        }
        return null
    }
}
const chainCloudApi = new ChainCloudApi(CHAIN_CLOUD_HOST)
export default chainCloudApi