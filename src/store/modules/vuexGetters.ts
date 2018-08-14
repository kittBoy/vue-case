const vuexGetters = {
    namespaced: true,
    state: {
        msg: 'hi',
        from: 'vuex'
    },
    getters: {
        msg: state => state.msg,
        from: state => state.from + ' getters'
    }
}

export default vuexGetters
