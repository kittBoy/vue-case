const vuexAction = {
    namespaced: true,
    state: {
        count: 0,
        isIncrement: true
    },
    mutations: {
        increment(state, payload){
            if(state.isIncrement){
                state.count += payload.num
            }
        },
        isIncrement(state, payload){
            state.isIncrement = payload.isIncrement
        }
    },
    actions: {
        isIncrement ({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const isIncrement = Math.random() > 0.5
                    console.log(isIncrement)
                    commit('isIncrement',{ isIncrement })
                    resolve()
                }, 1000)
            })
        },

        increment ({ dispatch, commit }, payload) {
            return dispatch('isIncrement').then(() => {
                commit('increment', payload)
            })
        }
    },
    getters: {
        count: state => 'count: ' + state.count,
        isIncrement: state => '是否增加：' + state.isIncrement
    }
}

export default vuexAction
