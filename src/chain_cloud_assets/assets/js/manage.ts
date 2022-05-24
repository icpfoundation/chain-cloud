
import { Profile, OptGroupRes, Group, GroupInfoRes } from "./manage/manage/manage.did"
import { imageStoreRes } from "./manage/image_store/image_store.did"
import { Principal } from "@dfinity/principal";
import { Actor, HttpAgent } from "@dfinity/agent";


interface ManageInterface {
    add_user(principal: string, profile: Profile): OptGroupRes
    add_group(Group): OptGroupRes
    visible_project(): Array<Array<[Principal, bigint, Group]>>
    get_group_info(user: Principal, group_id: bigint): GroupInfoRes,
}

interface ImageStoreInterface {
    image_store(manageCanister: Principal, user: Principal, group_id: bigint, imageData: Array<number>): imageStoreRes
    get_image(user: Principal, group_id: bigint): Array<number>

}

class ManageCanister {
    manageActor: ManageInterface
    imageActor: ImageStoreInterface
    constructor(manageActor: ManageInterface, imageActor: ImageStoreInterface) {
        this.manageActor = manageActor
        this.imageActor = imageActor
    }

    async addUser(principal: string, profile: Profile): Promise<OptGroupRes> {
        let addUserRes: OptGroupRes = await this.manageActor.add_user(principal, profile)
        return addUserRes
    }

    async addGroup(group: Group): Promise<OptGroupRes> {
        let addGroupRes: OptGroupRes = await this.manageActor.add_group(group)
        return addGroupRes
    }

    async visibleProject(): Promise<Array<Array<[Principal, bigint, Group]>>> {
        let visibleProjectRes: Array<Array<[Principal, bigint, Group]>> = await this.manageActor.visible_project()
        return visibleProjectRes
    }

    async getGroupInfo(user: Principal, group_id: bigint): Promise<GroupInfoRes> {
        let getGroupInfoRes = await this.manageActor.get_group_info(user, group_id)
        return getGroupInfoRes
    }

    async imageStore(manageCanister: Principal, user: Principal, group_id: bigint, imageData: Array<number>): Promise<imageStoreRes> {
        let imageStoreRes = await this.imageActor.image_store(manageCanister, user, group_id, imageData)
        return imageStoreRes
    }

    async getImage(user: Principal, group_id: bigint): Promise<Array<number>> {
        let getImageRes = await this.imageActor.get_image(user, group_id)
        return getImageRes
    }



}



export default ManageCanister
export { Profile }