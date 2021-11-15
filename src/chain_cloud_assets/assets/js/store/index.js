

import Vuex from 'vuex'
import Vue from 'vue';
import { Principal } from '@dfinity/principal';
Vue.use(Vuex)
export default new Vuex.Store({
    ICIdentity: {
        principle: null
    },
    CanisterInfo: {
        CommitCanister: null
    },
    getters: {
        getPrinciple: (ICIdentity) => () => {
            if (!ICIdentity.principle) {
                let identity = localStorage.getItem("chain_cloud")
                if (identity) {
                    let parse_identity = JSON.parse(identity)
                    if (Object.prototype.hasOwnProperty.call(parse_identity, '_arr')) {
                        let arr = new Array()
                        for (let i = 0; ; i++) {
                            if (!parse_identity._arr[i]) {
                                break
                            }
                            arr.push(parse_identity._arr[i])
                        }
                        ICIdentity.principle = new Principal(arr)
                    }
                }
            }
            return ICIdentity.principle
        },
        getCommitCanister: (CanisterInfo) => () => {
            return CanisterInfo.CommitCanister
        }
    },
    mutations: {
        ICIdentityConfig(ICIdentity, principle) {
            ICIdentity.principle = principle
        },
        CommitCanisterConfig(CanisterInfo, canister) {
            CanisterInfo.CommitCanister = canister
        }
    },
    actions: {
        setICIdentityConfig({ commit }, principle) {
            if (!principle) {
                return
            }
            localStorage.setItem("chain_cloud", JSON.stringify(principle))
            commit('ICIdentityConfig', principle)

        },
        setCommitCanisterConfig({ commit }, canister) {
            commit('CommitCanisterConfig', canister)
        }
    }
})