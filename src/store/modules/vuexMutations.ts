const vuexMutations = {
    namespaced: true,
    state: {
        count: 0
    },
    mutations: {
        increment(state, payload){
            state.count += payload.num
        }
    },
    getters: {
        count: state => 'count: ' + state.count
    }
}

export default vuexMutations
