
import { Profile, OptGroupRes, Group, GroupInfoRes, CanisterStatusRes, Project, ProjectInfoRes, UserRes } from "./manage/manage/manage.did"
import { imageStoreRes } from "./manage/image_store/image_store.did"
import { Principal, } from "@dfinity/principal";

import { Action } from "./manage/canister_log/canister_log.did"
import { Actor, HttpAgent, Identity } from "@dfinity/agent";


interface ManageInterface {
    add_user(principal: string, profile: Profile): OptGroupRes
    add_group(account: Principal, group: Group): OptGroupRes
    visible_project(): Array<Array<[Principal, bigint, Group]>>
    get_group_info(user: Principal, group_id: bigint): GroupInfoRes,
    update_group_name_and_description_and_visibility(
        accout: Principal,
        group_id: bigint,
        name: string,
        description: string,
        visibility: Profile,
    ): OptGroupRes,

    get_canister_status(
        account: Principal,
        group_id: bigint,
        project_id: bigint,
        canister: Principal,
    ): CanisterStatusRes,

    add_project(account: Principal, group_id: bigint, project: Project): OptGroupRes

    get_project_info(
        account: Principal,
        group_id: bigint,
        project_id: bigint,
    ): ProjectInfoRes,

    get_user_info(account: Principal): UserRes,

}

interface ImageStoreInterface {
    group_image_store(user: Principal, group_id: bigint, imageData: Array<number>): imageStoreRes
    project_image_store(user: Principal, group_id: bigint, project_id: bigint, imageData: Array<number>): imageStoreRes
    get_group_image(user: Principal, group_id: bigint): Array<number>
    get_project_image(
        user: Principal,
        group_id: bigint,
        project_id: bigint,
    ): Array<number>,
}
interface CanisterLogInterface {
    get_log(user: Principal, group_id: bigint, page: bigint): [] | [Array<[Principal, bigint, Action, Array<string>]>]
}

class ManageCanister {
    manageActor: ManageInterface
    imageActor: ImageStoreInterface
    canisterLogActor: CanisterLogInterface
    public identity: Principal
    constructor(manageActor: ManageInterface, imageActor: ImageStoreInterface, canisterLogActor: CanisterLogInterface, identity?: Principal) {
        this.manageActor = manageActor
        this.imageActor = imageActor
        this.canisterLogActor = canisterLogActor
        this.identity = identity
    }

    async addUser(name: string, profile: Profile): Promise<OptGroupRes> {
        let addUserRes: OptGroupRes = await this.manageActor.add_user(name, profile)
        return addUserRes
    }

    async addGroup(account: Principal, group: Group): Promise<OptGroupRes> {
        let addGroupRes: OptGroupRes = await this.manageActor.add_group(account, group)
        return addGroupRes
    }

    async visibleProject(): Promise<Array<Array<[Principal, bigint, Group]>>> {
        let visibleProjectRes: Array<Array<[Principal, bigint, Group]>> = await this.manageActor.visible_project()
        return visibleProjectRes
    }

    async getGroupInfo(account: Principal, group_id: bigint): Promise<GroupInfoRes> {
        let getGroupInfoRes = await this.manageActor.get_group_info(account, group_id)
        return getGroupInfoRes
    }

    async groupImageStore(account: Principal, group_id: bigint, imageData: Array<number>): Promise<imageStoreRes> {
        let imageStoreRes = await this.imageActor.group_image_store(account, group_id, imageData)
        return imageStoreRes
    }

    async projectImageStore(account: Principal, group_id: bigint, project_id: bigint, imageData: Array<number>): Promise<imageStoreRes> {
        let imageStoreRes = await this.imageActor.project_image_store(account, group_id, project_id, imageData)
        return imageStoreRes
    }

    async getGroupImage(account: Principal, group_id: bigint): Promise<Array<number>> {
        let getImageRes = await this.imageActor.get_group_image(account, group_id)
        return getImageRes
    }

    async getProjectImage(account: Principal, group_id: bigint, project_id: bigint): Promise<Array<number>> {
        let getImageRes = await this.imageActor.get_project_image(account, group_id, project_id)
        return getImageRes
    }

    async getLog(account: Principal, group_id: bigint, page: bigint): Promise<[] | [Array<[Principal, bigint, Action, Array<string>]>]> {
        let getLogRes = await this.canisterLogActor.get_log(account, group_id, page)
        return getLogRes
    }

    async updateGroupNameAndDescriptionAndVisibility(accout: Principal,
        group_id: bigint,
        name: string,
        description: string,
        visibility: Profile): Promise<OptGroupRes> {
        let updateGroupInfoRes = await this.manageActor.update_group_name_and_description_and_visibility(accout, group_id, name, description, visibility)
        return updateGroupInfoRes
    }

    async getCanisterStatus(
        account: Principal,
        group_id: bigint,
        project_id: bigint,
        canister: Principal,
    ): Promise<CanisterStatusRes> {
        let getCanisterStatusRes = await this.manageActor.get_canister_status(account, group_id, project_id, canister)
        return getCanisterStatusRes
    }


    async addProject(account: Principal, group_id: bigint, project: Project) {
        let addProjectRes = await this.manageActor.add_project(account, group_id, project)
        return addProjectRes
    }

    async getProjectInfo(account: Principal,
        group_id: bigint,
        project_id: bigint,) {
        let getProjectRes = await this.manageActor.get_project_info(account, group_id, project_id)
        return getProjectRes
    }

    async getUserInfo(account: Principal): Promise<UserRes> {
        let getUserInfoRes = await this.manageActor.get_user_info(account)
        return getUserInfoRes
    }
}



export default ManageCanister
export { Profile }