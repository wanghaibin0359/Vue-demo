import {
    login,
    getInfo
} from "@/api/user"
export default {
    namespaced: true,
    state: {
        role: [],
        token: ""
    },
    mutations: {
        setToken(state, {
            token
        }) {
            state.token = token
        },
        setRole(state, data) {
            state.role = data
        }
    },
    actions: {
        login({
            state,
            commit
        }, datas) {
            return login(datas).then(data => {
                commit("setToken", {
                    token: "1111"
                })

            })
        },
        getInfo({
            state,
            commit
        }) {
            return getInfo().then(data => {
                commit("setRole", data.role)
                return Promise.resolve(data.role)
            })
        }
    }
}