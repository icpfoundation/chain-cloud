import axios, { AxiosInstance } from 'axios'
import { getCanisterInfo } from './agent'
import { formatDate } from './util'
const CHAIN_CLOUD_HOST: string = "https://chaincloud.skyipfs.com:9091"

type CanisterInfo = {
    id: number;
    type: string;
    canisterId: string;
    controllerId: string;
    name: string
    subnetId: string;
    subnetName: string
    network: string;
    createtimestamp: string;
    updateTimestamp?: string;
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

    getAllCanister = async (controller: string): Promise<Array<any>> => {
        try {
            let data: any = await this.getCanisterList(controller);
            let result = JSON.parse(data.result);
            let arr: Array<CanisterInfo> = []
            for (let i = 0; i < result.length; i++) {
                let subnet = this.getCanisterSubnet(result[i]);
                let info = this.getCanisterInfo(controller, result[i]);
                let canisterResult = await Promise.all([subnet, info]);
                arr.push({
                    id: i,
                    type: canisterResult[1].type,
                    canisterId: result[i],
                    controllerId: canisterResult[0].controllerId,
                    name: canisterResult[1].name,
                    subnetId: canisterResult[0].subnet,
                    subnetName: canisterResult[0].name,
                    network: canisterResult[1].network,

                    createtimestamp: formatDate(
                        canisterResult[1].createtimestamp * 1000,
                        "yyyy-MM-dd hh:mm:ss"
                    ),
                    updateTimestamp: formatDate(
                        canisterResult[1].updateTimestamp * 1000,
                        "yyyy-MM-dd hh:mm:ss"
                    ),
                })
            }
            return arr
        } catch (err) {
            console.log('get getAllCanister fail :', err)
            return null
        }

    }
}
const chainCloudApi = new ChainCloudApi(CHAIN_CLOUD_HOST)
export default chainCloudApi