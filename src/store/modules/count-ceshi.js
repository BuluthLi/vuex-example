const state = {
    count: 100
}
const getters = {
    value: (state, getters, rootState) => {
        console.log(state.count);
        return state.count
    }
}
const actions = {
    acAdd: ({ commit, state }, data) => {
        commit('add', data);
    },
    acDecrease: ({ commit, state }, data) => {
        commit('decrease', data);
    },
}
const mutations = {
    acAdd: (state, data) => {
        state.count += data;
    },
    acDecrease: (state, data) => {
        state.count -= data;
    },
}
export default {
    namespaced: true,
    state, getters, actions, mutations
}