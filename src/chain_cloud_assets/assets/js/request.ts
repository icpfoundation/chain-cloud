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

    getCanisterList = async (controller: string): Promise<Array<any>> => {
        let result = await this.api.get('/public/canisterlist', {
            params: { 'controller': controller }
        })
        if (result) {
            try {
                return result.data
            } catch (err) {
                return err
            }
        }
        return null
    }
    getCanisterSubnet = async (canisterid: string): Promise<any> => {
        return await getCanisterInfo(canisterid)
    }
    getCanisterInfo = async (controller: string, canisterid: string): Promise<any> => {

        let result = await this.api.get('/public/canisterinfo', {
            params: { 'canisterid': canisterid, 'controller': controller }
        })
        if (result) {
            try {
                let parseData = JSON.parse(result.data.data)
                return parseData
            } catch (err) {
                return err
            }
        }
        return null
    }
}
const chainCloudApi = new ChainCloudApi(CHAIN_CLOUD_HOST)
export default chainCloudApi