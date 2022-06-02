

import Vuex from 'vuex'
import Vue from 'vue';
import { Principal } from '@dfinity/principal';
import { manageCanister } from '../actor';
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        ManageCanister: null,
        ICIdentity: {
            principle: null,
            identity: null
        },
        CanisterInfo: {
            CommitCanister: null
        },
    },

    getters: {
        getPrinciple: (ICIdentity) => () => {
            if (!ICIdentity.principle) {
                let principle = localStorage.getItem("principleString")
                if (principle) {
                    ICIdentity.principle = principle;
                }
            }
            return ICIdentity.principle
        },
        getCommitCanister: (CanisterInfo) => () => {

            return CanisterInfo.CommitCanister
        },
        getManageCanister: (state) => () => {
            return state.ManageCanister
        }
    },
    mutations: {
        ICIdentityConfig(ICIdentity, principle, identity) {
            ICIdentity.principle = principle
            ICIdentity.identity = identity
        },
        CleanIdentity(ICIdentity) {
            ICIdentity.principle = null
            ICIdentity.identity = null
            localStorage.removeItem('principleString')
            localStorage.removeItem('identity')
        },
        CommitCanisterConfig(CanisterInfo, canister) {
            CanisterInfo.CommitCanister = canister
        },
        manageCanisterConfig(state, canister) {
            state.ManageCanister = canister
        }
    },
    actions: {
        setICIdentityConfig({ commit }, principle, identity) {
            if (!principle) {
                return
            }
            localStorage.setItem("principleString", principle)
            localStorage.setItem("identity", identity)
            commit('ICIdentityConfig', principle)
        },
        removeICIdentity({ commit }) {
            commit('CleanIdentity')
        },
        setCommitCanisterConfig({ commit }, canister) {
            commit('CommitCanisterConfig', canister)
        },
        manageCanisterConfig({ commit }, canister) {
            commit('manageCanisterConfig', canister)
        }
    }
})